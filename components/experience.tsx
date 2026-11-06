'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X, Menu } from 'lucide-react';
import { CampaignHero } from './campaign-hero';
import { Chapters } from './chapters';
import { ClinicMap } from './clinic-map';
import { BrandMark } from './brand-mark';
import { site, appointmentUrl } from '@/data/site';
import { useSiteMotion } from './use-site-motion';

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
      <a className="wordmark" href="#inicio" aria-label={`${site.name}, início`}><BrandMark/></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(([name, id]) => <a href={`#${id}`} key={id}>{name}</a>)}<Link href="/procedimentos">Revista de procedimentos</Link></nav>
      <div className="header-actions"><a className="header-booking" href={appointmentUrl} target="_blank" rel="noreferrer">Agendar<ArrowUpRight size={17}/></a><button className="mobile-menu icon-button" ref={trigger} aria-label="Abrir menu" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(true)}><Menu/></button></div>
    </header>
    <dialog id="main-menu" ref={dialog} className="menu-dialog" aria-label="Menu de navegação" onCancel={close} onClose={() => setOpen(false)}>
      <button className="menu-close icon-button" aria-label="Fechar menu" onClick={close}><X/></button>
      <Image className="menu-brand" src={site.brand.logo} alt="Dra. Michelle Guimarães" width={260} height={106}/>
      <nav aria-label="Todas as seções"><Link href="/procedimentos" onClick={close}>Revista de procedimentos<ArrowUpRight/></Link>{[...navigation, ['A doutora', 'sobre'], ['Resultados', 'resultados'], ['A clínica', 'clinica']].map(([name, id]) => <a key={id} href={`#${id}`} onClick={close}>{name}<ArrowUpRight/></a>)}</nav>
      <a className="chapter-link" href={appointmentUrl} target="_blank" rel="noreferrer">Agendar avaliação<ArrowUpRight size={20}/></a>
    </dialog>
  </>;
}

export function Experience() {
  const root = useRef<HTMLDivElement>(null);
  useSiteMotion(root);
  return <div ref={root}>
    <a className="skip-link" href="#manifesto">Pular para o conteúdo</a><Header/>
    <main><CampaignHero/><Chapters/></main>
    <ClinicMap/>
    <footer className="footer"><div className="footer-main">
      <a href="#inicio" className="footer-name"><Image className="footer-logo" src={site.brand.logo} alt="Dra. Michelle Guimarães" width={300} height={123}/></a>
      <div><Link href="/procedimentos">Revista de procedimentos<ArrowUpRight size={14}/></Link>{navigation.map(([name, id]) => <a href={`#${id}`} key={id}>{name}</a>)}</div>
      <div><a href={appointmentUrl} target="_blank" rel="noreferrer">Agendamento online<ArrowUpRight size={14}/></a><a href={site.instagram} target="_blank" rel="noreferrer">Instagram<ArrowUpRight size={14}/></a><a href={site.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp<ArrowUpRight size={14}/></a><a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>{site.phone}</a>{site.address && <p>{site.address}</p>}{site.cro && <p>{site.cro}</p>}<a href="#inicio">Voltar ao início ↑</a></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>BIOMEDICINA ESTÉTICA</span></div></footer>
  </div>;
}
