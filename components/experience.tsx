'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X, Menu } from 'lucide-react';
import { CampaignHero } from './campaign-hero';
import { Chapters } from './chapters';
import { site, appointmentUrl } from '@/data/site';

const navigation = [['Facial', 'facial'], ['Corporal', 'corporal'], ['Capilar', 'capilar'], ['Cursos', 'cursos']];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (open) { dialog.current?.showModal(); document.body.style.overflow = 'hidden'; }
    else { dialog.current?.close(); document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  const close = () => { setOpen(false); trigger.current?.focus(); };

  return <>
    <header className={scrolled ? 'header scrolled' : 'header'}>
      <a className="wordmark" href="#inicio" aria-label={`${site.name}, início`}><Image className="brand-logo" src={site.brand.logo} alt="Dra. Michelle Guimarães — Biomedicina Estética" width={240} height={98} preload/></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(([name, id]) => <a href={`#${id}`} key={id}>{name}</a>)}</nav>
      <div className="header-actions"><a className="header-booking" href={appointmentUrl} target="_blank" rel="noreferrer">Agendar<ArrowUpRight size={17}/></a><button className="mobile-menu icon-button" ref={trigger} aria-label="Abrir menu" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(true)}><Menu/></button></div>
    </header>
    <dialog id="main-menu" ref={dialog} className="menu-dialog" aria-label="Menu de navegação" onCancel={close} onClose={() => setOpen(false)}>
      <button className="menu-close icon-button" aria-label="Fechar menu" onClick={close}><X/></button>
      <Image className="menu-brand" src={site.brand.logo} alt="Dra. Michelle Guimarães" width={260} height={106}/>
      <nav aria-label="Todas as seções">{[...navigation, ['A doutora', 'sobre'], ['Resultados', 'resultados'], ['A clínica', 'clinica']].map(([name, id]) => <a key={id} href={`#${id}`} onClick={close}>{name}<ArrowUpRight/></a>)}</nav>
      <a className="chapter-link" href={appointmentUrl} target="_blank" rel="noreferrer">Agendar avaliação<ArrowUpRight size={20}/></a>
    </dialog>
  </>;
}

export function Experience() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animations.push(entry.target.animate([{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 850, easing: 'cubic-bezier(.2,.7,.2,1)' }));
      observer.unobserve(entry.target);
    }), { threshold: .08 });
    root.current?.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    const stop = () => { if (media.matches) { animations.forEach(a => a.cancel()); observer.disconnect(); } };
    media.addEventListener('change', stop);
    return () => { observer.disconnect(); animations.forEach(a => a.cancel()); media.removeEventListener('change', stop); };
  }, []);
  return <div ref={root}>
    <a className="skip-link" href="#manifesto">Pular para o conteúdo</a><Header/>
    <main><CampaignHero/><Chapters/></main>
    <footer className="footer"><div className="footer-main">
      <a href="#inicio" className="footer-name"><Image className="footer-logo" src={site.brand.logo} alt="Dra. Michelle Guimarães" width={300} height={123}/></a>
      <div>{navigation.map(([name, id]) => <a href={`#${id}`} key={id}>{name}</a>)}</div>
      <div><a href={appointmentUrl} target="_blank" rel="noreferrer">Agendamento online<ArrowUpRight size={14}/></a><a href={site.instagram} target="_blank" rel="noreferrer">Instagram<ArrowUpRight size={14}/></a><a href={site.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp<ArrowUpRight size={14}/></a><a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>{site.phone}</a>{site.address && <p>{site.address}</p>}{site.cro && <p>{site.cro}</p>}<a href="#inicio">Voltar ao início ↑</a></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>BIOMEDICINA ESTÉTICA</span></div></footer>
  </div>;
}
