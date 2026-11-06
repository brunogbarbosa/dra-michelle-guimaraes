import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowUpRight, Clock3, MessageCircle } from 'lucide-react';
import { site, appointmentUrl } from '@/data/site';
import { procedureAreas, procedurePhotos, procedureWhatsapp, formatProcedurePrice } from '@/data/procedure-journal';
import { JournalPhotoGallery } from '@/components/journal-photo-gallery';
import { JournalNavigation } from '@/components/journal-navigation';
import { ShareLink } from '@/components/share-link';
import { ClinicMap } from '@/components/clinic-map';
import { BrandMark } from '@/components/brand-mark';
import styles from '@/components/procedure-journal.module.css';

const title = 'Revista de procedimentos | Dra. Michelle Guimarães';
const description = 'Conheça os procedimentos faciais, corporais e capilares da Dra. Michelle Guimarães. Fotos, valores, duração e agendamento em um guia completo.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/procedimentos' }, openGraph: { title, description, url: '/procedimentos', type: 'website', locale: 'pt_BR', images: [{ url: '/og.jpg', width: 1200, height: 630 }] }, twitter: { card: 'summary_large_image', title, description, images: ['/og.jpg'] } };

export default function ProceduresPage() {
  return <div className={styles.journal}>
    <a className="skip-link" href="#facial">Pular para os procedimentos</a>
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label="Dra. Michelle Guimarães, voltar ao site"><BrandMark/></Link>
      <div className={styles.headerActions}><Link href="/" className={styles.back} aria-label="Voltar ao site"><ArrowLeft size={16}/><span>Voltar ao site</span></Link><a href={appointmentUrl} target="_blank" rel="noreferrer" className={styles.headerBooking}>Agendar<ArrowUpRight size={18}/></a></div>
    </header>

    <main>
      <section className={styles.cover} aria-labelledby="journal-title">
        <div className={styles.coverCopy}><p className={styles.coverEyebrow}>DRA. MICHELLE GUIMARÃES<span>REVISTA DE PROCEDIMENTOS</span></p><h1 id="journal-title">Seu cuidado,<br/><em>em detalhes.</em></h1><p className={styles.coverDescription}>Um olhar para cada possibilidade. Conheça os procedimentos, explore os registros e descubra o cuidado que faz sentido para você.</p><a className={styles.coverExplore} href="#indice">Explorar a revista<ArrowDown size={18}/></a><div className={styles.coverIndex}><span><strong>{site.procedures.length}</strong>PROCEDIMENTOS</span><span><strong>03</strong>ÁREAS DE CUIDADO</span></div></div>
        <figure className={styles.coverPortrait}><Image src={site.images.about} alt="Dra. Michelle Guimarães" width={570} height={854} sizes="(max-width: 700px) 1px, 40vw" preload/><figcaption><span>Beleza, ciência<br/><em>e naturalidade.</em></span><small>MICHELLE GUIMARÃES<br/>BIOMEDICINA ESTÉTICA</small></figcaption></figure>
      </section>

      <JournalNavigation/>
      {procedureAreas.map((area, areaIndex) => <section key={area.id} id={area.id} className={styles.chapter} aria-labelledby={`journal-${area.id}`}>
        <header className={styles.chapterHeading}><div className={styles.chapterNumber} aria-hidden="true">0{areaIndex + 1}</div><div><p className={styles.chapterEyebrow}>{site.procedures.filter(item => item.category === area.id).length} PROCEDIMENTOS</p><h2 id={`journal-${area.id}`}>{area.title}</h2><p className={styles.chapterSubtitle}>{area.subtitle}</p></div><p className={styles.chapterDescription}>{area.description}</p></header>
        <div className={styles.spreads}>{site.procedures.filter(item => item.category === area.id).map(item => {
          const folio = String(site.procedures.indexOf(item) + 1).padStart(2, '0');
          const [name, variation] = item.name.split(' · ');
          const photos = procedurePhotos(item);
          return <article id={item.id} className={`${styles.spread} ${photos.length ? '' : styles.spreadText}`} key={item.id} aria-labelledby={`title-${item.id}`} data-journal-procedure={item.id}>
            {item.aliases?.map(alias => <span id={alias} key={alias} className={styles.legacyAnchor} aria-hidden="true"/>)}
            <header className={styles.spreadHeading}><div><p>{area.title} <span>·</span> {folio}</p><h3 id={`title-${item.id}`}>{name}</h3>{variation && <p className={styles.variation}>{variation}</p>}</div><span className={styles.folio} aria-hidden="true">{folio}</span></header>
            <div className={styles.spreadBody}><p>{item.description}</p>{item.consultationNote && <p className={styles.consultationNote} role="note">{item.consultationNote}</p>}{item.treatmentAreas && <div className={styles.treatmentAreas} role="group" aria-label="Áreas de tratamento"><p>ÁREAS DE TRATAMENTO</p><ul>{item.treatmentAreas.map(area => <li key={area}>{area}</li>)}</ul></div>}</div>
            {photos.length > 0 && <div className={styles.media}><JournalPhotoGallery photos={photos} name={item.name}/></div>}
            <dl className={styles.facts}><div><dt>INVESTIMENTO</dt><dd className={`${styles.price} ${item.price === null ? styles.priceOnRequest : ''}`}>{item.price === null ? 'Valor sob consulta' : formatProcedurePrice(item.price)}</dd>{item.priceNote && <small>{item.priceNote}</small>}</div><div><dt><Clock3 size={16} strokeWidth={1.2}/>DURAÇÃO</dt><dd>{item.duration}</dd></div></dl>
            <div className={styles.spreadActions}><a className={styles.book} href={appointmentUrl} target="_blank" rel="noreferrer" aria-label={`Agendar ${item.name}`}><span>Agendar</span><ArrowUpRight size={19}/></a><a className={styles.whatsapp} href={procedureWhatsapp(item)} target="_blank" rel="noreferrer" aria-label={`Conversar sobre ${item.name} pelo WhatsApp`}><MessageCircle size={17}/><span>WhatsApp</span></a></div>
            <div className={styles.share}><ShareLink id={item.id} label={item.name}/></div>
          </article>;
        })}</div>
      </section>)}

      <section className={styles.closing} aria-labelledby="journal-closing"><p>O PRÓXIMO CAPÍTULO É SEU</p><h2 id="journal-closing">Um cuidado pensado<br/><em>para a sua história.</em></h2><div><a className={styles.closingBook} href={appointmentUrl} target="_blank" rel="noreferrer">Escolher meu horário<ArrowUpRight size={22}/></a><a className={styles.closingWhatsapp} href={site.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19}/>Falar com a equipe</a></div><p className={styles.closingNote}>Fotografias compartilhadas pela Dra. Michelle Guimarães. Resultados individuais, respeitando as características de cada pessoa.</p></section>
    </main>
    <ClinicMap/>
    <footer className={styles.footer}><Link href="/">Voltar ao site<ArrowLeft size={16}/></Link><span>© {new Date().getFullYear()} Dra. Michelle Guimarães</span><a href={site.instagram} target="_blank" rel="noreferrer">Instagram<ArrowUpRight size={16}/></a></footer>
  </div>;
}
