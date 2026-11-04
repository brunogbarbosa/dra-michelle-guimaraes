'use client';

import Image from 'next/image';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { site } from '@/data/site';
import { ShareLink } from './share-link';

const money = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export function CoursesChapter() {
  return <section id="cursos" className="courses-chapter" aria-labelledby="courses-title">
    <div className="courses-art">{site.courseImage ? <Image src={site.courseImage} alt="Curso ministrado pela Dra. Michelle Guimarães" fill sizes="(max-width: 700px) 100vw, 45vw"/> : <><div className="course-orbit" aria-hidden="true"/><Image className="course-brand" src={site.brand.seal} alt="Marca oficial da Dra. Michelle Guimarães" width={240} height={240}/><p>CIÊNCIA QUE SE COMPARTILHA.<br/><em>Conhecimento que transforma.</em></p><GraduationCap className="course-symbol" size={50} strokeWidth={.8}/></>}</div>
    <div className="courses-copy"><p className="chapter-tag">FORMAÇÃO / COM DRA. MICHELLE GUIMARÃES</p><h2 id="courses-title">O próximo passo<br/><em>na sua trajetória.</em></h2><p>Cursos ministrados pela Dra. Michelle para profissionais que desejam ampliar seus conhecimentos na estética.</p><p>Converse com a equipe para conhecer os temas, os formatos e as próximas oportunidades de formação.</p><div className="courses-actions"><a className="chapter-link" href={site.coursesUrl} target="_blank" rel="noreferrer">Quero conhecer os cursos<ArrowUpRight size={20}/></a><ShareLink id="cursos" label="Cursos"/></div></div>
    {site.courses.length > 0 && <div className="course-list">{site.courses.map(course => <article id={course.id} key={course.id}><h3>{course.name}</h3><p>{course.description}</p>{course.image && <Image src={course.image} alt={course.name} width={700} height={500}/>}<span>{course.price !== null ? money(course.price) : 'Consulte as condições'}</span><ShareLink id={course.id} label={course.name}/><a href={site.coursesUrl} target="_blank" rel="noreferrer">Informações e inscrição<ArrowUpRight size={18}/></a></article>)}</div>}
  </section>;
}
