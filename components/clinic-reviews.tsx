'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote, Star } from 'lucide-react';
import { clinicReviews } from '@/data/clinic-reviews';
import { site } from '@/data/site';
import styles from './clinic-reviews.module.css';

export function ClinicReviews() {
  const rail = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const currentRef = useRef(0);
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const observer = new ResizeObserver(() => element.scrollTo({ left: currentRef.current * element.clientWidth, behavior: 'instant' }));
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame.current); };
  }, []);

  function moveTo(index: number) {
    const element = rail.current;
    if (!element || index < 0 || index >= clinicReviews.length) return;
    currentRef.current = index;
    setCurrent(index);
    element.scrollTo({ left: element.clientWidth * index, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  return <section id="avaliacoes" className={styles.root} aria-labelledby="clinic-reviews-title">
    <div className={styles.inner}>
      <div className={styles.intro}><p className={styles.eyebrow}>AVALIAÇÕES NO GOOGLE</p><h2 id="clinic-reviews-title">Quem vem,<br/><em>sente o cuidado.</em></h2><p className={styles.description}>A escuta, o acolhimento e os detalhes. Conheça a experiência de quem já esteve por aqui.</p><a className={styles.googleLink} href={site.googleBusiness.reviewsUrl} target="_blank" rel="noreferrer">Ver perfil e avaliações no Google<ArrowUpRight size={18}/></a></div>
      <div className={styles.carousel}>
        <div className={styles.rail} ref={rail} tabIndex={0} role="region" aria-roledescription="carrossel" aria-label="Avaliações de pacientes no Google" onKeyDown={event => {
          if (event.target !== event.currentTarget) return;
          if (event.key === 'ArrowRight') { event.preventDefault(); moveTo(current + 1); }
          if (event.key === 'ArrowLeft') { event.preventDefault(); moveTo(current - 1); }
          if (event.key === 'Home') { event.preventDefault(); moveTo(0); }
          if (event.key === 'End') { event.preventDefault(); moveTo(clinicReviews.length - 1); }
        }} onScroll={() => {
          cancelAnimationFrame(frame.current);
          frame.current = requestAnimationFrame(() => {
            if (!rail.current) return;
            const next = Math.min(clinicReviews.length - 1, Math.max(0, Math.round(rail.current.scrollLeft / rail.current.clientWidth)));
            currentRef.current = next;
            setCurrent(next);
          });
        }}>
          {clinicReviews.map((review, index) => <article key={review.id} className={styles.card} data-clinic-review={review.id} role="group" aria-roledescription="avaliação" aria-label={`${index + 1} de ${clinicReviews.length}${review.name ? `, ${review.name}` : ''}`} aria-hidden={current !== index} inert={current !== index}>
            <div className={styles.cardTop}><span className={styles.stars} role="img" aria-label={`${review.rating} de 5 estrelas`}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0}/>)}</span><span className={styles.source}>Google</span></div>
            <div className={styles.reviewBody}><blockquote id={`review-${review.id}`} className={`${styles.quote} ${expanded[review.id] ? styles.expanded : ''}`}>“{review.quote}”</blockquote>{review.quote.length > 240 && <button className={styles.readMore} type="button" aria-expanded={!!expanded[review.id]} aria-controls={`review-${review.id}`} onClick={() => setExpanded(value => ({ ...value, [review.id]: !value[review.id] }))}>{expanded[review.id] ? 'Ler menos' : 'Ler avaliação completa'}</button>}</div>
            <footer className={styles.author}><span className={styles.avatar} aria-hidden="true">{review.name ? review.name.split(' ').slice(0, 2).map(part => part[0]).join('') : <Quote size={20} strokeWidth={1.1}/>}</span><div><p>{review.name || 'Avaliação no Google'}</p><span>{review.excerpt ? 'Trecho de avaliação' : 'Relato publicado no Google'}</span></div><Quote className={styles.quoteIcon} size={32} strokeWidth={.8} aria-hidden="true"/></footer>
          </article>)}
        </div>
        <div className={styles.controls}><div className={styles.pagination} aria-label="Escolher avaliação">{clinicReviews.map((review, index) => <button type="button" key={review.id} onClick={() => moveTo(index)} aria-label={review.name ? `Ver avaliação de ${review.name}` : `Ver avaliação ${index + 1}`} aria-pressed={current === index}><span/></button>)}</div><div className={styles.arrows}><span aria-live="polite">{String(current + 1).padStart(2, '0')} <i>/</i> {String(clinicReviews.length).padStart(2, '0')}</span><button type="button" onClick={() => moveTo(current - 1)} disabled={current === 0} aria-label="Avaliação anterior"><ArrowLeft size={20}/></button><button type="button" onClick={() => moveTo(current + 1)} disabled={current === clinicReviews.length - 1} aria-label="Próxima avaliação"><ArrowRight size={20}/></button></div></div>
      </div>
    </div>
  </section>;
}
