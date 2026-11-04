'use client';

import Image from 'next/image';
import { useId, useRef } from 'react';
import { useSiteMotion } from './use-site-motion';
import { ArrowUpRight, Heart, Leaf, UserRound } from 'lucide-react';
import { site } from '@/data/site';

const pillars = [
  { title: 'Identidade', copy: 'Seus traços, sua história e seus desejos são o ponto de partida.', Icon: UserRound },
  { title: 'Naturalidade', copy: 'Escolhas que valorizam sua expressão, sem fórmulas prontas.', Icon: Leaf },
  { title: 'Cuidado', copy: 'Uma experiência conduzida com escuta, segurança e atenção.', Icon: Heart },
];

export function EssenceChapter() {
  const root = useRef<HTMLElement>(null);
  const uid = useId().replace(/:/g, '');

  useSiteMotion(root, '[data-essence-motion]');

  return <section id="manifesto" className="essence-editorial" ref={root} aria-labelledby="essence-title">
    <div className="essence-stage">
      <div className="essence-wash" aria-hidden="true"/>
      <svg className="essence-thread essence-thread-desktop" viewBox="0 0 1440 740" fill="none" aria-hidden="true">
        <defs><radialGradient id={`${uid}-pearl`} cx="30%" cy="25%"><stop stopColor="#f8eeee"/><stop offset=".5" stopColor="#bc8d96"/><stop offset="1" stopColor="#775059"/></radialGradient></defs>
        <path d="M280 790 C720 810 660 530 855 350 S1180 255 1490 360" pathLength="1" data-essence-motion="line"/>
        <circle cx="753" cy="474" r="10" fill={`url(#${uid}-pearl)`} data-essence-motion="bead" data-delay="600"/>
      </svg>
      <svg className="essence-thread essence-thread-mobile" viewBox="0 0 400 900" fill="none" aria-hidden="true">
        <defs><radialGradient id={`${uid}-pearl-mobile`} cx="30%" cy="25%"><stop stopColor="#f8eeee"/><stop offset=".5" stopColor="#bc8d96"/><stop offset="1" stopColor="#775059"/></radialGradient></defs>
        <path d="M-30 625 C110 638 170 799 410 793" pathLength="1" data-essence-motion="line"/>
        <circle cx="82" cy="669" r="5.5" fill={`url(#${uid}-pearl-mobile)`} data-essence-motion="bead" data-delay="600"/>
      </svg>
      <div className="essence-editorial-top">
        <p>01 / A ESSÊNCIA</p><span aria-hidden="true"/><p>A BELEZA COMEÇA<br/>NO QUE É SEU.</p>
      </div>
      <div className="essence-editorial-copy">
        <p className="essence-editorial-prelude" data-essence-motion="fade">A sua identidade é o ponto de partida.</p>
        <h2 id="essence-title" aria-label="Sua essência. Em primeiro lugar.">
          <span className="essence-title-mask"><span data-essence-motion="title">Sua essência.</span></span>
          <span className="essence-title-mask"><em data-essence-motion="title" data-delay="140">Em primeiro</em></span>
          <span className="essence-title-mask"><span data-essence-motion="title" data-delay="280">lugar.</span></span>
        </h2>
        <p className="essence-editorial-description" data-essence-motion="fade" data-delay="350">Cuidar da sua beleza é olhar para você por inteiro: sua expressão, seus desejos e tudo o que faz de você única.</p>
        <a className="essence-editorial-cta" href="#sobre" data-essence-motion="fade" data-delay="450"><span>Conheça o olhar por trás do cuidado</span><span className="essence-arrow"><ArrowUpRight size={24} strokeWidth={1.3}/></span></a>
      </div>
      <figure className="essence-smile" data-essence-motion="photo">
        <Image src={site.images.essence} alt="Dra. Michelle Guimarães com conjunto vinho, segurando o celular." fill sizes="(max-width:700px) 100vw, 50vw"/>
      </figure>
      <p className="essence-margin-note">TRAÇOS REAIS<br/>HISTÓRIAS ÚNICAS<span aria-hidden="true"/></p>
    </div>
    <div className="essence-values">
      <p className="essence-values-label"><span/>OS PILARES DO NOSSO CUIDADO<span/></p>
      <div className="essence-values-grid">
        {pillars.map(({ title, copy, Icon }, i) => <article className="essence-value" key={title} data-essence-motion="fade" data-delay={i * 140}>
          <span className="essence-value-index">0{i + 1}</span>
          <span className="essence-value-icon" aria-hidden="true"><Icon size={30} strokeWidth={1.3}/></span>
          <div><h3>{title}</h3><p>{copy}</p></div>
        </article>)}
      </div>
    </div>
  </section>;
}
