'use client';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Sparkles, Flower2, Sprout, GraduationCap } from 'lucide-react';
import { site, appointmentUrl, type Procedure } from '@/data/site';
import { ShareLink } from './share-link';

const categories = [
  { id: 'facial', name: 'Facial', title: 'Seus traços.', accent: 'Sua identidade.', description: 'Precisão e sensibilidade para valorizar o que torna o seu rosto único.', Icon: Sparkles },
  { id: 'corporal', name: 'Corporal', title: 'Seu corpo.', accent: 'Seu equilíbrio.', description: 'Um cuidado que acompanha seus objetivos e respeita a sua individualidade.', Icon: Flower2 },
  { id: 'capilar', name: 'Capilar', title: 'Cuidado da raiz', accent: 'à sua confiança.', description: 'Um olhar atento para a saúde e a beleza do couro cabeludo e dos fios.', Icon: Sprout },
] as const;

const money = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

function ProcedureCard({ item, index }: { item: Procedure; index: number }) {
  return <article id={item.id} className={`procedure-card ${!item.image ? 'procedure-card-text' : ''}`} data-reveal>
    {item.image && <figure className="procedure-image"><Image src={item.image} alt={`Registro real de ${item.name.toLowerCase()} da Dra. Michelle Guimarães`} fill sizes="(max-width: 700px) 88vw, 40vw"/><figcaption>REGISTRO REAL / DRA. MICHELLE GUIMARÃES</figcaption></figure>}
    <div className="procedure-copy">
      <div className="procedure-top"><span>{String(index + 1).padStart(2, '0')} / {item.category.toUpperCase()}</span><ShareLink id={item.id} label={item.name}/></div>
      <h4><a href={`#${item.id}`}>{item.name}</a></h4>
      <p>{item.description}</p>
      <div className="procedure-bottom"><div><small>INVESTIMENTO</small><strong>{item.price === null ? 'Consulte as condições' : money(item.price)}</strong>{item.priceNote && <span>{item.priceNote}</span>}</div><a href={appointmentUrl} target="_blank" rel="noreferrer" aria-label={`Agendar avaliação para ${item.name}`} className="procedure-book"><span>Agendar</span><ArrowUpRight size={20}/></a></div>
    </div>
  </article>;
}

export function CareCatalog() {
  return <section id="procedimentos" className="care-catalog" aria-labelledby="catalog-title">
    <header className="catalog-intro"><div><p className="chapter-tag">03 / UM CUIDADO QUE É SÓ SEU</p><h2 id="catalog-title">Beleza em todas<br/><em>as suas formas.</em></h2></div><p>Conheça as possibilidades de cuidado. O melhor caminho começa com uma avaliação individual.</p></header>
    <nav className="care-index" aria-label="Áreas de cuidado e cursos">{[...categories.map(({ id, name, Icon }) => ({ id, name, Icon })), { id: 'cursos', name: 'Cursos', Icon: GraduationCap }].map(({ id, name, Icon }, index) => <a key={id} href={`#${id}`}><span>0{index + 1}</span><Icon strokeWidth={1.1} size={27}/><strong>{name}</strong><ArrowDown size={18}/></a>)}</nav>
    {categories.map(({ id, name, title, accent, description, Icon }) => <section className={`care-category care-${id}`} id={id} key={id} aria-labelledby={`${id}-title`}>
      <div className="category-heading"><span className="category-icon"><Icon size={34} strokeWidth={1}/></span><div><p className="chapter-tag">{name} / CUIDADO INDIVIDUALIZADO</p><h3 id={`${id}-title`}>{title}<br/><em>{accent}</em></h3></div><p>{description}</p><ShareLink id={id} label={name}/></div>
      <div className="procedure-grid">{site.procedures.filter(item => item.category === id).map((item, index) => <ProcedureCard key={item.id} item={item} index={index}/>)}</div>
    </section>)}
  </section>;
}

export function CoursesChapter() {
  return <section id="cursos" className="courses-chapter" aria-labelledby="courses-title">
    <div className="courses-art">{site.courseImage ? <Image src={site.courseImage} alt="Curso ministrado pela Dra. Michelle Guimarães" fill sizes="(max-width: 700px) 100vw, 45vw"/> : <><div className="course-orbit" aria-hidden="true"/><Image className="course-brand" src={site.brand.seal} alt="Marca oficial da Dra. Michelle Guimarães" width={240} height={240}/><p>CIÊNCIA QUE SE COMPARTILHA.<br/><em>Conhecimento que transforma.</em></p><GraduationCap className="course-symbol" size={50} strokeWidth={.8}/></>}</div>
    <div className="courses-copy"><p className="chapter-tag">FORMAÇÃO / COM DRA. MICHELLE GUIMARÃES</p><h2 id="courses-title">O próximo passo<br/><em>na sua trajetória.</em></h2><p>Cursos ministrados pela Dra. Michelle para profissionais que desejam ampliar seus conhecimentos na estética.</p><p>Converse com a equipe para conhecer os temas, os formatos e as próximas oportunidades de formação.</p><div className="courses-actions"><a className="chapter-link" href={site.coursesUrl} target="_blank" rel="noreferrer">Quero conhecer os cursos<ArrowUpRight size={20}/></a><ShareLink id="cursos" label="Cursos"/></div></div>
    {site.courses.length > 0 && <div className="course-list">{site.courses.map(course => <article id={course.id} key={course.id}><h3>{course.name}</h3><p>{course.description}</p>{course.image && <Image src={course.image} alt={course.name} width={700} height={500}/>}<span>{course.price !== null ? money(course.price) : 'Consulte as condições'}</span><ShareLink id={course.id} label={course.name}/><a href={site.coursesUrl} target="_blank" rel="noreferrer">Informações e inscrição<ArrowUpRight size={18}/></a></article>)}</div>}
  </section>;
}
