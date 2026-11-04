'use client';

import { useLayoutEffect, useRef } from 'react';

/** A finite entrance, with a stationary photograph and no replay on scroll. */
export function useCampaignMotion() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const hero = root.current;
    if (!hero) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const running = new Set<Animation>();
    let started = false;
    const setup = () => {
      running.forEach(animation => animation.cancel());
      running.clear();
      if (preference.matches || started || hero.getBoundingClientRect().bottom <= 0) return;
      started = true;
      const animate = (selector: string, delay: number) => hero.querySelectorAll(selector).forEach((element, index) => {
        const animation = element.animate([{ opacity: 0, translate: '0 16px' }, { opacity: 1, translate: '0 0' }], { duration: 800, delay: delay + index * 90, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
        running.add(animation);
        animation.finished.then(() => { running.delete(animation); animation.cancel(); }).catch(() => running.delete(animation));
      });
      animate('.campaign-topline, .campaign-kicker', 0);
      animate('.campaign-title-line > span', 90);
      animate('.campaign-subtitle, .campaign-action', 240);
      animate('.campaign-metrics, .campaign-signature, .campaign-editorial, .campaign-seal', 320);
    };
    setup();
    preference.addEventListener('change', setup);
    return () => { running.forEach(animation => animation.cancel()); preference.removeEventListener('change', setup); };
  }, []);
  return root;
}
