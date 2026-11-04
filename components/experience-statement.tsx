'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { site } from '@/data/site';
import styles from './experience-statement.module.css';

export function ExperienceStatement() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = root.current;
    if (!section) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    const setup = () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      section.classList.remove(styles.motionReady, styles.motionArmed, styles.motionVisible);

      if (media.matches || !('IntersectionObserver' in window)) return;

      section.classList.add(styles.motionReady);
      void section.offsetWidth;
      frame = window.requestAnimationFrame(() => {
        section.classList.add(styles.motionArmed);
        observer = new IntersectionObserver(([entry]) => {
          if (!entry?.isIntersecting) return;
          section.classList.add(styles.motionVisible);
          observer?.disconnect();
        }, { threshold: .1, rootMargin: '0px 0px -8% 0px' });
        observer.observe(section);
      });
    };

    setup();
    media.addEventListener('change', setup);

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      media.removeEventListener('change', setup);
    };
  }, []);

  return <section ref={root} className={styles.root} aria-labelledby="experience-statement-title">
    <svg className={styles.thread} viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M 552 934 C 557 687 678 552 836 475 C 1116 338 1287 119 1648 -18" pathLength="1" vectorEffect="non-scaling-stroke" data-experience-motion="line" />
    </svg>

    <header className={styles.topline} data-experience-motion="fade">
      <p>04 / SUA EXPERIÊNCIA</p>
      <span aria-hidden="true" />
    </header>

    <div className={styles.heading}>
      <h2 id="experience-statement-title" aria-label="Naturalidade sem excessos.">
        <span className={styles.titleMask}><span data-experience-motion="title">Naturalidade</span></span>
        <span className={styles.titleMask}><em data-experience-motion="title">sem excessos.</em></span>
      </h2>
      <p className={styles.subtitle} data-experience-motion="fade">BELEZA COM IDENTIDADE. SEMPRE.</p>
    </div>

    <figure className={styles.photo} data-experience-motion="photo">
      <Image
        src={site.images.beauty}
        alt="Dra. Michelle Guimarães em retrato profissional com produto utilizado na estética."
        fill
        sizes="(max-width: 700px) 94vw, (max-width: 1100px) 50vw, 45vw"
      />
      <span className={styles.photoWash} aria-hidden="true" />
      <p className={styles.photoCopy} data-experience-motion="photo-copy">SUA BELEZA.<br />SUA HISTÓRIA.<br />SUA ESSÊNCIA.<span aria-hidden="true" /></p>
      <Image className={styles.seal} src={site.brand.seal} alt="Marca da Dra. Michelle Guimarães" width={126} height={126}/>
    </figure>

    <blockquote className={styles.quote} data-experience-motion="quote">
      <span className={styles.quoteMark} aria-hidden="true">“</span>
      <div>
        <p>Beleza, ciência<br />e naturalidade.</p>
        <footer><span aria-hidden="true" /><cite>MICHELLE GUIMARÃES</cite></footer>
      </div>
    </blockquote>

    <a className={styles.cta} href="#experiencia" data-experience-motion="cta">
      <span>CONHEÇA O MEU MÉTODO</span>
      <ArrowUpRight size={25} strokeWidth={1.4} aria-hidden="true" />
    </a>
  </section>;
}
