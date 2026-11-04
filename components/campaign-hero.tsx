'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

export function CampaignHero() {
  const motionRef = useCampaignMotion();

  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true" />
    <div className="campaign-organic campaign-organic-two" aria-hidden="true" />
    <div className="campaign-contour" aria-hidden="true" />
    <figure className="campaign-portrait">
      <div className="campaign-silhouette">
        <Image className="campaign-original" src={site.images.hero} alt="Retrato atualizado da Dra. Michelle Guimarães" fill preload sizes="(max-width: 700px) 100vw, 65vw" />
      </div>
    </figure>
    <div className="campaign-inner">
      <div className="campaign-topline"><span>BELEZA, CIÊNCIA E NATURALIDADE</span><span>BIOMEDICINA ESTÉTICA</span></div>
      <div className="campaign-copy">
        <p className="campaign-kicker">DRA. MICHELLE GUIMARÃES</p>
        <h1 id="campaign-title" aria-label={site.headline}>
          <span className="campaign-title-line"><span>A beleza de</span></span>
          <span className="campaign-title-line"><span>continuar</span></span>
          <span className="campaign-title-line"><span>sendo você.</span></span>
        </h1>
        <p className="campaign-subtitle">Um olhar preciso para valorizar seus traços, preservar sua essência e revelar a sua melhor versão.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR MINHA AVALIAÇÃO</span><ArrowUpRight size={22} strokeWidth={1.4} /></a></div>
      </div>
      <div className="campaign-seal" aria-hidden="true"><Image src={site.brand.seal} alt="" width={118} height={118}/></div>
      <p className="campaign-editorial">O extraordinário<br /><em>é ser você.</em></p>
      <div className="campaign-metrics" aria-label="Filosofia de atendimento"><span>01 / ESCUTA</span><span>02 / INTENÇÃO</span><span>03 / NATURALIDADE</span></div>
      <div className="campaign-signature"><span aria-hidden="true" /> <p>DESÇA PARA DESCOBRIR</p></div>
    </div>
  </section>;
}
