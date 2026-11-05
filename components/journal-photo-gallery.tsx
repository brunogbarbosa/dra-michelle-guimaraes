'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import type { ClinicalResult } from '@/data/site';
import { ResultViewer } from './result-viewer';
import styles from './procedure-journal.module.css';

export function JournalPhotoGallery({ photos, name }: { photos: ClinicalResult[]; name: string }) {
  const rail = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const [current, setCurrent] = useState(0);
  const [viewing, setViewing] = useState(false);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  if (!photos.length) return <div className={styles.emptyMedia} data-empty-photo role="img" aria-label={`Espaço reservado para as fotografias de ${name}`}/>;
  const photo = photos[current];
  const moveTo = (index: number) => {
    const element = rail.current;
    if (!element || index < 0 || index >= photos.length) return;
    setCurrent(index);
    element.scrollTo({ left: element.clientWidth * index, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  return <div className={styles.gallery} aria-label={`Fotografias de ${name}`}>
    <div className={styles.galleryTop}><span>{photo.kind === 'illustration' ? 'IMAGEM ILUSTRATIVA' : photo.orientation === 'single' ? 'REGISTROS REAIS' : 'ANTES & DEPOIS'}</span><div><span aria-live="polite">{String(current + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span>{photos.length > 1 && <><button type="button" disabled={current === 0} onClick={() => moveTo(current - 1)} aria-label={`Foto anterior de ${name}`}><ArrowLeft size={19}/></button><button type="button" disabled={current === photos.length - 1} onClick={() => moveTo(current + 1)} aria-label={`Próxima foto de ${name}`}><ArrowRight size={19}/></button></>}</div></div>
    <div className={styles.galleryStage} style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
      <div className={styles.photoRail} ref={rail} tabIndex={0} role="region" aria-roledescription="carrossel" aria-label={`Galeria de ${name}`} onKeyDown={event => {
        if (event.target !== event.currentTarget) return;
        if (event.key === 'ArrowRight') { event.preventDefault(); moveTo(Math.min(current + 1, photos.length - 1)); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); moveTo(Math.max(current - 1, 0)); }
      }} onScroll={() => {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => { if (rail.current) setCurrent(Math.min(photos.length - 1, Math.max(0, Math.round(rail.current.scrollLeft / rail.current.clientWidth)))); });
      }}>
        {photos.map((item, index) => <figure key={item.image} aria-hidden={index !== current} inert={index !== current}>
          <button type="button" onClick={() => setViewing(true)} aria-label={`Ampliar foto ${index + 1} de ${name}`}><Image src={item.image} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 700px) 88vw, 43vw" loading="lazy"/><span className={styles.expand}><Expand size={17}/>Ampliar</span></button>
        </figure>)}
      </div>
    </div>
    <p className={styles.photoCaption}>{photo.label}</p>
    {viewing && <ResultViewer items={photos} initialIndex={current} onClose={() => setViewing(false)}/>}
  </div>;
}
