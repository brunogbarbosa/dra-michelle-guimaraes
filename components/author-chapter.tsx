'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useId, useRef } from 'react';
import { useSiteMotion } from './use-site-motion';
import { site } from '@/data/site';
import styles from './author-chapter.module.css';

const biography = site.bio;

export function AuthorChapter() {
  const root = useRef<HTMLElement>(null);
  const uid = useId().replace(/:/g, '');

  useSiteMotion(root, '[data-author-motion]');

  return <section id="sobre" ref={root} className={styles.root} aria-labelledby="author-title">
    <header className={styles.topline} data-author-motion="fade">
      <p>02 / POR TRÁS DO CUIDADO</p>
      <span aria-hidden="true" />
      <p>A BELEZA TAMBÉM ESTÁ NAS PESSOAS.</p>
    </header>

    <div className={styles.stage}>
      <div className={styles.copy}>
        <h2 id="author-title" aria-label="Cuidar é preservar sua essência.">
          <span className={styles.titleMask}><span data-author-motion="title">Cuidar é</span></span>
          <span className={styles.titleMask}><span data-author-motion="title">preservar</span></span>
          <span className={styles.titleMask}><em data-author-motion="title">sua essência.</em></span>
        </h2>
        <p className={styles.subcopy} data-author-motion="subcopy">Cada detalhe começa<br />na escuta.</p>
      </div>

      <figure className={styles.photo} data-author-motion="photo">
        <Image
          src={site.images.about}
          alt="Retrato profissional atualizado da Dra. Michelle Guimarães com conjunto vinho."
          fill
          sizes="(max-width: 700px) 51vw, (max-width: 1100px) 56vw, 54vw"
        />
      </figure>

      <article className={styles.card} data-author-motion="card">
        <p className={styles.cardLabel}>DRA. MICHELLE GUIMARÃES</p>
        <p className={styles.cardCopy}>{biography}</p>
        <a className={styles.cta} href={site.instagram} target="_blank" rel="noreferrer">
          <span>Conheça meu olhar</span>
          <span className={styles.ctaCircle} aria-hidden="true"><ArrowUpRight size={24} strokeWidth={1.25} /></span>
        </a>
      </article>

      <aside className={styles.sideNote} aria-label="Mais que tratamentos, pessoas.">
        <span>MAIS QUE PROCEDIMENTOS, PESSOAS.</span>
        <i aria-hidden="true" />
        <b aria-hidden="true" />
      </aside>

      <svg className={`${styles.thread} ${styles.threadDesktop}`} viewBox="0 0 1600 110" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id={`${uid}-author-pearl`} cx="30%" cy="25%">
            <stop stopColor="#fbf0e2" />
            <stop offset=".5" stopColor="#bd8b76" />
            <stop offset="1" stopColor="#7a4b43" />
          </radialGradient>
        </defs>
        <path d="M -30 30 C 260 84 540 91 800 58 C 1065 25 1320 91 1630 27" pathLength="1" vectorEffect="non-scaling-stroke" data-author-motion="line" />
        <circle cx="800" cy="58" r="8" fill={`url(#${uid}-author-pearl)`} data-author-motion="bead" />
      </svg>

      <svg className={`${styles.thread} ${styles.threadMobile}`} viewBox="0 0 430 546" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id={`${uid}-author-pearl-mobile`} cx="30%" cy="25%">
            <stop stopColor="#fbf0e2" />
            <stop offset=".5" stopColor="#bd8b76" />
            <stop offset="1" stopColor="#7a4b43" />
          </radialGradient>
        </defs>
        <path d="M -20 475 C 55 498 90 529 150 538 C 236 551 335 543 450 518" pathLength="1" vectorEffect="non-scaling-stroke" data-author-motion="line" />
        <circle cx="99" cy="524" r="6.5" fill={`url(#${uid}-author-pearl-mobile)`} data-author-motion="bead" />
      </svg>
    </div>

    <footer className={styles.closing}>
      <p className={styles.closingEyebrow} data-author-motion="final"><span />NOSSA FILOSOFIA DE CUIDADO<span /></p>
      <div className={styles.closingRow}>
        <p className={styles.closingStatement}>
          <span data-author-motion="final">Naturalidade em cada escolha.</span>
          <em data-author-motion="final">Cuidado em cada encontro.</em>
        </p>
        <div className={styles.closingSeal}><Image className="official-seal" src="/brand/sublogo.webp" alt="Marca oficial da Dra. Michelle Guimarães" width={96} height={96}/></div>
      </div>
      <p className={styles.closingNote} data-author-motion="final">Escuta, presença e intenção em cada detalhe.</p>
    </footer>
  </section>;
}
