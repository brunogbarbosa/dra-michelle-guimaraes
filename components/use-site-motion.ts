'use client';

import { useLayoutEffect, type RefObject } from 'react';

/** One entrance per element. Content remains visible when JS or motion is disabled. */
export function useSiteMotion(root: RefObject<HTMLElement | null>, selector = '[data-reveal]') {
  useLayoutEffect(() => {
    const scope = root.current;
    if (!scope || !('IntersectionObserver' in window)) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const seen = new WeakSet<Element>();
    const running = new Set<Animation>();
    let observer: IntersectionObserver | undefined;

    const setup = () => {
      observer?.disconnect();
      running.forEach(animation => animation.cancel());
      running.clear();
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          const element = entry.target;
          if (!element.getClientRects().length) continue;
          seen.add(element);
          observer?.unobserve(element);
          const kind = element.getAttribute('data-author-motion') || element.getAttribute('data-essence-motion') || element.getAttribute('data-experience-motion');
          const frames: Keyframe[] = kind === 'line'
            ? [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }]
            : kind === 'bead'
              ? [{ opacity: 0 }, { opacity: 1 }]
              : [{ opacity: 0, translate: `0 ${kind === 'photo' ? 16 : 12}px` }, { opacity: 1, translate: '0 0' }];
          const animation = element.animate(frames, { duration: kind === 'line' ? 1000 : 650, delay: Math.min(Number(element.getAttribute('data-delay') || 0), 160), easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
          running.add(animation);
          animation.finished.then(() => { running.delete(animation); animation.cancel(); }).catch(() => running.delete(animation));
        }
      }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
      scope.querySelectorAll(selector).forEach(element => { if (!seen.has(element)) observer?.observe(element); });
    };
    setup();
    preference.addEventListener('change', setup);
    return () => { observer?.disconnect(); running.forEach(animation => animation.cancel()); preference.removeEventListener('change', setup); };
  }, [root, selector]);
}
