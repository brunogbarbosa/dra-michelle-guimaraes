import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3, MessageCircle, MoveUpRight } from 'lucide-react';
import { site, appointmentUrl } from '@/data/site';
import { procedureAreas, procedurePhotos, procedureWhatsapp, formatProcedurePrice } from '@/data/procedure-journal';
import { JournalPhotoGallery } from '@/components/journal-photo-gallery';
import { JournalNavigation } from '@/components/journal-navigation';
import { ShareLink } from '@/components/share-link';
import styles from '@/components/procedure-journal.module.css';

const title = 'Revista de procedimentos | Dra. Michelle Guimarães';
const description = 'Conheça os procedimentos faciais, corporais e capilares da Dra. Michelle Guimarães. Fotos, valores, duração e agendamento em um guia completo.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/procedimentos' }, openGraph: { title, description, url: '/procedimentos', type: 'website', locale: 'pt_BR', images: [{ url: '/og.jpg', width: 1200, height: 630 }] }, twitter: { card: 'summary_large_image', title, description, images: ['/og.jpg'] } };

export default function ProceduresPage() {
  return <div className={styles.journal}>
    <a className="skip-link" href="#facial">Pular para os procedimentos</a>
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label="Dra. Michelle Guimarães, voltar ao site"><span className={styles.mark}><Image src={site.brand.logo} alt="MG" width={1000} height={382} preload/></span><span>Dra. Michelle Guimarães<small>BIOMEDICINA ESTÉTICA</small></span></Link>
      <div className={styles.headerActions}><Link href="/" className={styles.back} aria-label="Voltar ao site"><ArrowLeft size={16}/><span>Voltar ao site</span></Link><a href={appointmentUrl} target="_blank" rel="noreferrer" className={styles.headerBooking}>Agendar<ArrowUpRight size={18}/></a></div>
    </header>

    <main>
      <section className={styles.cover} aria-labelledby="journal-title">
        <div className={styles.coverEyebrow}><span>REVISTA DE PROCEDIMENTOS</span><span>BELEZA, CIÊNCIA E NATURALIDADE</span></div>
        <div className={styles.coverGrid}><div><p className={styles.intro}>Um guia para conhecer suas possibilidades.</p><h1 id="journal-title">Seu cuidado,<br/><em>em cada detalhe.</em></h1><p className={styles.coverDescription}>Conheça os procedimentos, explore os registros e encontre o próximo passo do seu cuidado. Cada escolha começa com um olhar individual para você.</p><a href="#facial" className={styles.coverStart}>Abra o seu guia<ArrowRight size={21}/></a></div>
          <aside className={styles.coverIndex} aria-label="As três áreas de cuidado"><p>NESTA EDIÇÃO</p>{procedureAreas.map((area, index) => <a key={area.id} href={`#${area.id}`}><span>0{index + 1}</span><div>{area.title}<small>{site.procedures.filter(item => item.category === area.id).length} procedimentos</small></div><MoveUpRight size={22} strokeWidth={1}/></a>)}<p className={styles.coverSignature}>Escolhas que respeitam<br/><em>a sua essência.</em></p></aside>
        </div>
        <div className={styles.coverBottom}><span>{site.procedures.length} PROCEDIMENTOS / 3 ÁREAS DE CUIDADO</span><span>POR DRA. MICHELLE GUIMARÃES</span></div>
      </section>

      <JournalNavigation/>
      {procedureAreas.map((area, areaIndex) => <section key={area.id} id={area.id} className={styles.chapter} aria-labelledby={`journal-${area.id}`}>
        <header className={styles.chapterHeading}><div className={styles.chapterHeadingInner}><span className={styles.chapterNumber}>0{areaIndex + 1}</span><div><p>O SEU GUIA / {area.subtitle}</p><h2 id={`journal-${area.id}`}>{area.title}<em>.</em></h2></div><p className={styles.chapterDescription}>{area.description}</p></div></header>
        <div className={styles.spreads}>{site.procedures.filter(item => item.category === area.id).map((item, index) => {
          const folio = String(site.procedures.indexOf(item) + 1).padStart(2, '0');
          const [name, variation] = item.name.split(' · ');
          const photos = procedurePhotos(item);
          return <article id={item.id} className={`${styles.spread} ${index % 2 ? styles.reverse : ''}`} key={item.id} aria-labelledby={`title-${item.id}`} data-journal-procedure={item.id}>
            <header className={styles.spreadHeading}><p><span>{folio}</span>ESTÉTICA {area.title.toUpperCase()}</p><h3 id={`title-${item.id}`}>{name}{variation && <em>{variation}</em>}</h3></header>
            <div className={styles.media}><JournalPhotoGallery photos={photos} name={item.name}/></div>
            <div className={styles.spreadBody}><p>{item.description}</p><div className={styles.careNote}><span/>A sua individualidade orienta cada escolha.</div></div>
            <dl className={styles.facts}><div><dt>INVESTIMENTO</dt><dd className={styles.price}>{item.price === null ? 'Sob consulta' : formatProcedurePrice(item.price)}</dd>{item.priceNote && <small>{item.priceNote}</small>}</div><div><dt><Clock3 size={16} strokeWidth={1.2}/>DURAÇÃO</dt><dd>{item.duration}</dd></div></dl>
            <div className={styles.spreadActions}><a className={styles.book} href={appointmentUrl} target="_blank" rel="noreferrer"><span>Agendar este procedimento</span><ArrowUpRight size={21}/></a><a className={styles.whatsapp} href={procedureWhatsapp(item)} target="_blank" rel="noreferrer"><MessageCircle size={19}/><span>Conversar pelo WhatsApp</span><ArrowUpRight size={17}/></a><ShareLink id={item.id} label={item.name}/></div>
            <footer className={styles.folio}><span>DRA. MICHELLE GUIMARÃES / {area.title.toUpperCase()}</span><span>{folio}</span><a href="#indice">Voltar ao índice<ArrowUpRight size={14}/></a></footer>
          </article>;
        })}</div>
      </section>)}

      <section className={styles.closing} aria-labelledby="journal-closing"><p>O PRÓXIMO CAPÍTULO É SEU</p><h2 id="journal-closing">Um cuidado pensado<br/><em>para a sua história.</em></h2><div><a className={styles.closingBook} href={appointmentUrl} target="_blank" rel="noreferrer">Escolher meu horário<ArrowUpRight size={22}/></a><a className={styles.closingWhatsapp} href={site.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19}/>Falar com a equipe</a></div><p className={styles.closingNote}>Fotografias compartilhadas pela Dra. Michelle Guimarães. Resultados individuais, respeitando as características de cada pessoa.</p></section>
    </main>
    <footer className={styles.footer}><Link href="/">Voltar ao site<ArrowLeft size={16}/></Link><span>© {new Date().getFullYear()} Dra. Michelle Guimarães</span><a href={site.instagram} target="_blank" rel="noreferrer">Instagram<ArrowUpRight size={16}/></a></footer>
  </div>;
}
