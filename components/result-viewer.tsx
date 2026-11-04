'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import type { ClinicalResult } from '@/data/site';

export function ResultViewer({ items, initialIndex, onClose }: { items: ClinicalResult[]; initialIndex: number; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(initialIndex);
  const [compare, setCompare] = useState(false);
  const [value, setValue] = useState(50);
  const item = items[index];
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; opener?.focus({ preventScroll: true }); };
  }, []);

  function move(delta: number) { setIndex(current => (current + delta + items.length) % items.length); setCompare(false); setValue(50); }
  function halfStyle(before: boolean) {
    const share = before ? item.beforeShare : 1 - item.beforeShare;
    return { backgroundImage: `url(${item.image})`, backgroundSize: item.orientation === 'vertical' ? `100% ${100 / share}%` : `${100 / share}% 100%`, ...(before ? { clipPath: `inset(0 ${100 - value}% 0 0)` } : {}) };
  }

  return <dialog ref={dialog} className="result-dialog" aria-labelledby="viewer-title" onCancel={event => { event.preventDefault(); onClose(); }} onKeyDown={event => {
    if ((event.target as HTMLElement).tagName === 'INPUT') return;
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
  }}>
    <div className="viewer-top"><div><p className="chapter-tag">UM OLHAR MAIS PRÓXIMO</p><h3 id="viewer-title">{item.label}</h3></div><button className="viewer-icon" onClick={onClose} aria-label="Fechar resultado"><X/></button></div>
    <div className="viewer-stage">{compare && item.orientation !== 'single'
      ? <div className={`comparison ${item.orientation === 'vertical' ? 'vertical' : ''}`} style={{ aspectRatio: item.comparisonRatio }}>
        <div className="compare-half after" style={halfStyle(false)}/><div className="compare-half before" style={halfStyle(true)}/>
        <div className="comparison-line" style={{ left: `${value}%` }}><span>↔</span></div><span className="compare-label left">Antes</span><span className="compare-label right">Depois</span>
      </div>
      : <Image src={item.image} alt={item.alt} fill sizes="90vw" loading="eager"/>}</div>
    {compare && <label className="viewer-range">Deslize para comparar<input type="range" min={0} max={100} value={value} onChange={event => setValue(+event.target.value)} aria-label="Proporção entre antes e depois"/></label>}
    <div className="viewer-bottom"><button className="viewer-icon" aria-label="Resultado anterior" onClick={() => move(-1)} disabled={items.length < 2}><ArrowLeft/></button><span aria-live="polite">{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>{item.orientation !== 'single' && <button className="viewer-mode" aria-pressed={compare} onClick={() => { setCompare(current => !current); setValue(50); }}>{compare ? 'Ver foto original' : 'Comparar antes e depois'}</button>}<button className="viewer-icon" aria-label="Próximo resultado" onClick={() => move(1)} disabled={items.length < 2}><ArrowRight/></button></div>
    {compare && <p className="viewer-note">Recortes do registro original. Enquadramentos podem variar.</p>}
  </dialog>;
}
