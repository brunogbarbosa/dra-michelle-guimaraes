'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { site, appointmentUrl } from '@/data/site';
import { EssenceChapter } from './essence-chapter';
import { AuthorChapter } from './author-chapter';
import { ExperienceStatement } from './experience-statement';
import { CoursesChapter } from './care-catalog';
import { LocationChapter } from './location-chapter';
import { ResultsCarousel } from './results-carousel';

function Tag({ children }: { children: React.ReactNode }) { return <p className="chapter-tag">{children}</p>; }

export function Chapters() {
  return <>
    <EssenceChapter/>
    <AuthorChapter/>
    {site.results.enabled && <ResultsCarousel/>}
    <ExperienceStatement/>
    <section id="experiencia" className="ritual-chapter"><div className="ritual-intro"><Tag>O seu tempo / Sua experiência</Tag><h2>Cada encontro.<br/>Um novo<br/><em>cuidado.</em></h2><p>E ele começa com você.</p></div><div className="ritual-list">{[
      ['Escuta', 'Um momento para compartilhar o que você procura, perguntar e se sentir à vontade.'],
      ['Avaliação', 'Sua anatomia, suas necessidades e seus desejos orientam cada escolha.'],
      ['Plano', 'A estratégia é personalizada e cada etapa tem um propósito claro.'],
      ['Acompanhamento', 'O cuidado continua depois do procedimento, com orientações e espaço para dúvidas.'],
    ].map(([title, copy], index) => <article key={title} data-reveal><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={22} strokeWidth={1}/></article>)}</div></section>
    <RealTestimonials/>
    <CoursesChapter/>
    <LocationChapter/>
    <section className="social-chapter"><Tag>Mais perto, todos os dias.</Tag><a href={site.instagram} target="_blank" rel="noreferrer"><span>Acompanhe<br/><em>o nosso olhar.</em></span><ArrowUpRight strokeWidth={.7}/></a><div><span>{site.instagramHandle}</span><span>INSTAGRAM</span></div></section>
    <section id="contato" className="closing-chapter"><Tag>O próximo passo é seu.</Tag><h2 data-reveal>Sua beleza<br/>começa com<br/><em>uma conversa.</em></h2><div className="closing-bottom"><p>Reserve um tempo para você.<br/>Escolha seu horário na agenda online.</p><a className="chapter-link" href={appointmentUrl} target="_blank" rel="noreferrer">Agendar consulta<ArrowUpRight size={22}/></a><span>{site.instagramHandle}</span></div></section>
  </>;
}

function RealTestimonials() {
  const [index, setIndex] = useState(0);
  if (!site.testimonials.length) return null;
  return <section className="voices-chapter"><Tag>Palavras de quem viveu</Tag><blockquote>“{site.testimonials[index].quote}”</blockquote><p>{site.testimonials[index].name}</p><button className="chapter-link" onClick={() => setIndex((index + 1) % site.testimonials.length)}>Próximo relato<ArrowRight/></button></section>;
}
