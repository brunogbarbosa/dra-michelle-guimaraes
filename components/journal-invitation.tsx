import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { site } from '@/data/site';
import styles from './journal-invitation.module.css';

export function JournalInvitation() {
  return <aside className={styles.root} aria-labelledby="results-journal-title">
    <div className={styles.art} aria-hidden="true"><div className={styles.backCover}/><div className={styles.cover}><Image src={site.brand.logo} alt="" width={200} height={77}/><span>REVISTA DE PROCEDIMENTOS</span><p>Seu cuidado,<br/><em>em detalhes.</em></p><small>FACIAL · CORPORAL · CAPILAR</small></div></div>
    <div className={styles.copy}><p className={styles.eyebrow}><BookOpen size={17}/>CONHEÇA TODAS AS POSSIBILIDADES</p><h3 id="results-journal-title">Gostou de um resultado?<br/><em>Conheça o cuidado por trás dele.</em></h3><p className={styles.description}>Explore as fotos, os valores e a duração de cada procedimento na nossa revista.</p><Link className={styles.button} href="/procedimentos">Explorar revista completa<ArrowUpRight size={22}/></Link><p className={styles.note}>{site.procedures.length} procedimentos. Um guia para escolher com calma.</p></div>
  </aside>;
}
