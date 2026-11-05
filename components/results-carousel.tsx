'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Flower2, Sprout, Sparkles, Expand, Clock3, ChevronDown } from 'lucide-react';
import { site, appointmentUrl, type Procedure, type ClinicalResult } from '@/data/site';
import { ShareLink } from './share-link';
import { ResultViewer } from './result-viewer';

const categories = [
  { id: 'facial', label: 'Facial', description: 'Região frontal, lábios, contorno e perfil. Um olhar individual para cada expressão.', Icon: Sparkles },
  { id: 'corporal', label: 'Corporal', description: 'Um plano de cuidado para o seu corpo, pensado a partir dos seus objetivos.', Icon: Flower2 },
  { id: 'capilar', label: 'Capilar', description: 'Cuidado com o couro cabeludo e os fios, com avaliação individualizada.', Icon: Sprout },
] as const;
type Category = typeof categories[number]['id'];
const money = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

function ProcedureSlide({ item, active, onOpen }: { item: Procedure; active: boolean; onOpen: (items: ClinicalResult[], index: number) => void }) {
  const records = site.results.items.filter(record => record.procedureId === (item.resultGroup ?? item.id));
  const [photoIndex, setPhotoIndex] = useState(0);
  const photo = records[photoIndex];
  return <article className={`result-slide ${photo ? '' : 'result-slide-empty'}`} id={item.id} aria-label={item.name} aria-hidden={!active} inert={!active}>
    {photo ? <div className="result-media">
      <button className="result-photo-button" onClick={() => onOpen(records, photoIndex)} aria-label={`Ampliar ${photo.label}`}>
        <Image className="result-photo-image" src={photo.image} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 700px) 88vw, 46vw" loading={active ? 'eager' : 'lazy'}/>
        <span className="result-expand"><Expand size={19}/><span>Ampliar</span></span>
      </button>
      <div className="result-photo-caption"><span>{photo.orientation === 'single' ? 'REGISTRO REAL' : 'ANTES & DEPOIS'}</span><span>{photoIndex + 1} / {records.length}</span></div>
      {records.length > 1 && <div className="result-thumbnails" aria-label={`Fotos de ${item.name}`}>{records.map((record, index) => <button key={record.image} onClick={() => setPhotoIndex(index)} aria-label={`Ver foto ${index + 1} de ${item.name}`} aria-pressed={index === photoIndex}><Image src={record.image} alt="" width={96} height={96} sizes="72px"/></button>)}</div>}
    </div> : <div className="result-empty-art" aria-hidden="true">{item.category === 'capilar' ? <Sprout size={82} strokeWidth={.8}/> : <Flower2 size={82} strokeWidth={.8}/>}<p>Um cuidado.<br/><em>Todo seu.</em></p></div>}
    <div className="result-treatment"><p className="chapter-tag">{item.category} / CUIDADO INDIVIDUALIZADO</p><h3>{item.name}</h3><p>{item.description}</p>
      {records.length > 0 && <p className="result-records-note">{records.length} {records.length === 1 ? 'registro para conhecer de perto.' : 'registros para conhecer de perto.'}</p>}
      <div className="result-investment"><div><span>INVESTIMENTO</span><strong>{item.price === null ? 'Consulte as condições' : money(item.price)}</strong>{item.priceNote && <small>{item.priceNote}</small>}</div><div className="result-duration"><Clock3 size={19} strokeWidth={1.2}/><span>DURAÇÃO<strong>{item.duration}</strong></span></div></div>
      <a className="chapter-link result-appointment" href={appointmentUrl} target="_blank" rel="noreferrer">Agendar procedimento<ArrowUpRight size={21}/></a><ShareLink id={item.id} label={item.name}/>
    </div>
  </article>;
}

export function ResultsCarousel() {
  const root = useRef<HTMLElement>(null);
  const rails = useRef<Partial<Record<Category, HTMLDivElement>>>({});
  const frame = useRef(0);
  const [category, setCategory] = useState<Category>('facial');
  const [slide, setSlide] = useState(0);
  const [navigationVersion, setNavigationVersion] = useState(0);
  const pending = useRef<{ id: string; scroll: boolean } | null>(null);
  const [viewer, setViewer] = useState<{ items: ClinicalResult[]; index: number } | null>(null);
  const procedures = site.procedures.filter(item => item.category === category);
  const current = categories.find(item => item.id === category)!;

  useLayoutEffect(() => {
    function readHash() {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      const area = categories.find(item => item.id === id);
      const procedure = site.procedures.find(item => item.id === id);
      if (!area && !procedure && id !== 'procedimentos' && id !== 'resultados') return;
      const selected = area?.id ?? procedure?.category ?? 'facial';
      const list = site.procedures.filter(item => item.category === selected);
      pending.current = { id: procedure?.id ?? selected, scroll: true };
      setCategory(selected);
      setSlide(procedure ? list.findIndex(item => item.id === procedure.id) : 0);
      setNavigationVersion(version => version + 1);
    }
    readHash();
    window.addEventListener('hashchange', readHash);
    window.addEventListener('popstate', readHash);
    return () => { window.removeEventListener('hashchange', readHash); window.removeEventListener('popstate', readHash); cancelAnimationFrame(frame.current); };
  }, []);

  useLayoutEffect(() => {
    if (!pending.current) return;
    const target = pending.current;
    const requested = site.procedures.find(item => item.id === target.id);
    const expectedCategory = requested?.category ?? target.id;
    const expectedSlide = requested ? site.procedures.filter(item => item.category === expectedCategory).findIndex(item => item.id === requested.id) : 0;
    // A hash can arrive before the state update has rendered its panel.
    if (category !== expectedCategory || slide !== expectedSlide) return;
    pending.current = null;
    const rail = rails.current[category];
    const item = rail?.children[slide] as HTMLElement | undefined;
    if (rail && item) rail.scrollTo({ left: item.offsetLeft, behavior: 'instant' });
    if (target.scroll && root.current) {
      const header = document.querySelector('.header')?.getBoundingClientRect().height ?? 86;
      window.scrollTo({ top: window.scrollY + root.current.getBoundingClientRect().top - header - 15, behavior: 'instant' });
    }
  }, [category, slide, navigationVersion]);

  function selectCategory(id: Category) {
    pending.current = { id, scroll: false };
    setCategory(id);
    setSlide(0);
    setNavigationVersion(version => version + 1);
    window.history.pushState(null, '', `#${id}`);
  }

  function moveTo(index: number) {
    const rail = rails.current[category];
    const item = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !item) return;
    setSlide(index);
    rail.scrollTo({ left: item.offsetLeft, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  function syncScroll(id: Category) {
    if (id !== category) return;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rail = rails.current[id];
      if (!rail) return;
      const nearest = Array.from(rail.children).reduce((best, child, index, children) => Math.abs((child as HTMLElement).offsetLeft - rail.scrollLeft) < Math.abs((children[best] as HTMLElement).offsetLeft - rail.scrollLeft) ? index : best, 0);
      setSlide(nearest);
    });
  }

  function tabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % categories.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = categories.length - 1;
    else return;
    event.preventDefault();
    selectCategory(categories[next].id);
    document.getElementById(`tab-${categories[next].id}`)?.focus({ preventScroll: true });
  }

  return <section ref={root} id="resultados" className="gallery-chapter results-carousel" aria-labelledby="results-title">
    <span id="procedimentos" className="results-anchor" aria-hidden="true"/>
    <div className="gallery-top"><p className="chapter-tag">03 / RESULTADOS & PROCEDIMENTOS</p><span>UM OLHAR PARA CADA DETALHE</span></div>
    <div className="gallery-heading" data-reveal><h2 id="results-title">Resultados reais.<br/><em>Beleza singular.</em></h2><p>Explore as áreas de cuidado e conheça os registros. Cada plano respeita a sua identidade.</p></div>
    <div className="results-tabs" role="tablist" aria-label="Áreas dos resultados">{categories.map(({ id, label, Icon }, index) => <button type="button" role="tab" id={`tab-${id}`} key={id} aria-selected={category === id} aria-controls={id} tabIndex={category === id ? 0 : -1} onClick={() => selectCategory(id)} onKeyDown={event => tabKey(event, index)}><Icon size={23} strokeWidth={1.1}/><span>{label}</span><small>0{index + 1}</small></button>)}</div>
    <div className="results-area-intro"><p>{current.description}</p><ShareLink id={category} label={current.label}/></div>
    <div className="results-navigation">
      <label className="results-picker"><span>ESCOLHA SEU PROCEDIMENTO</span><div><select aria-label={`Escolher procedimento ${current.label.toLowerCase()}`} value={procedures[slide]?.id ?? procedures[0].id} onChange={event => moveTo(procedures.findIndex(item => item.id === event.target.value))}>{procedures.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select><ChevronDown size={18} aria-hidden="true"/></div></label>
      <p aria-live="polite">{String(slide + 1).padStart(2, '0')} <span>/ {String(procedures.length).padStart(2, '0')}</span></p>
      <div className="results-arrows"><button className="viewer-icon" disabled={slide === 0} aria-label="Procedimento anterior" onClick={() => moveTo(slide - 1)}><ArrowLeft size={22}/></button><button className="viewer-icon" disabled={slide === procedures.length - 1} aria-label="Próximo procedimento" onClick={() => moveTo(slide + 1)}><ArrowRight size={22}/></button></div>
    </div>
    {categories.map(({ id, label }) => <section id={id} key={id} role="tabpanel" aria-labelledby={`tab-${id}`} hidden={category !== id} className="results-panel">
      <div ref={element => { if (element) rails.current[id] = element; }} className="result-rail" role="region" aria-roledescription="carrossel" aria-label={`Procedimentos da área ${label.toLowerCase()}`} tabIndex={0} onScroll={() => syncScroll(id)} onKeyDown={event => {
        if (event.target !== event.currentTarget) return;
        if (event.key === 'ArrowRight') { event.preventDefault(); moveTo(Math.min(procedures.length - 1, slide + 1)); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); moveTo(Math.max(0, slide - 1)); }
      }}>{site.procedures.filter(item => item.category === id).map((item, index) => <ProcedureSlide item={item} active={id === category && index === slide} key={item.id} onOpen={(items, photoIndex) => setViewer({ items, index: photoIndex })}/>)}</div>
    </section>)}
    <Link className="results-journal" href="/procedimentos"><div><span>A SUA REVISTA DE CUIDADO</span><p>Todos os procedimentos.<br/><em>Cada detalhe, no seu tempo.</em></p></div><span className="results-journal-link">Explorar a revista<ArrowUpRight size={27} strokeWidth={1}/></span></Link>
    <div className="gallery-end"><p>Fotografias compartilhadas pela Dra. {site.name}.<br/>Resultados individuais. Cada pessoa tem características próprias.</p><a className="chapter-link" href={appointmentUrl} target="_blank" rel="noreferrer">O seu primeiro passo<ArrowUpRight size={21}/></a></div>
    {viewer && <ResultViewer items={viewer.items} initialIndex={viewer.index} onClose={() => setViewer(null)}/>}
  </section>;
}
