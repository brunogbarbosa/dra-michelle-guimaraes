'use client';

import Image from 'next/image';
import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { appointmentUrl } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

const metrics = [
  { value: 'Ciência', label: 'DECISÕES COM PROPÓSITO' },
  { value: 'Escuta', label: 'VOCÊ EM PRIMEIRO LUGAR' },
  { value: 'Natural', label: 'RESULTADOS QUE RESPEITAM VOCÊ' },
];

function SmileSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Sua beleza, sua essência">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">SUA BELEZA</textPath>
      </text>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-bottom`} startOffset="50%">SUA ESSÊNCIA</textPath>
      </text>
      <path pathLength="1" d="M48 93c17-23 34-33 53-29 13 3 24 12 31 28-13-8-26-11-39-8-16 3-29 9-45 9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true"/>
    <div className="campaign-organic campaign-organic-two" aria-hidden="true"/>
    <div className="campaign-contour" aria-hidden="true"/>
    <div className="campaign-inner">
      <div className="campaign-copy">
        <p className="campaign-kicker">HARMONIZAÇÃO FACIAL E CORPORAL</p>
        <h1 id="campaign-title" aria-label="Naturalidade em cada detalhe">
          <span className="campaign-title-line"><span>NATURALIDADE</span></span>
          <span className="campaign-title-line"><span>EM CADA</span></span>
          <span className="campaign-title-line"><span>DETALHE</span></span>
        </h1>
        <p className="campaign-subtitle">Ciência, técnica e sensibilidade.<br/>Para valorizar a beleza que já é sua.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR AVALIAÇÃO</span><ArrowRight size={22} strokeWidth={1.2}/></a></div>
      </div>
      <figure className="campaign-portrait">
        <div className="campaign-silhouette"><Image className="campaign-original" src="/images/michelle-hero.webp" alt="Dra. Michelle Guimarães" fill preload sizes="100vw"/></div>
      </figure>
      <SmileSeal/>
      <p className="campaign-editorial">Beleza<br/>com<br/>identidade<span aria-hidden="true"/></p>
      <div className="campaign-metrics" aria-label="Pilares do atendimento">
        {metrics.map(metric=><div className="campaign-metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
      <div className="campaign-signature"><span aria-hidden="true"/><div><p>DRA. MICHELLE GUIMARÃES</p><em>Biomedicina estética.<br className="campaign-signature-break"/> Beleza com naturalidade.</em></div></div>
    </div>
  </section>;
}
