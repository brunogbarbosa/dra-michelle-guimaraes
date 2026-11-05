import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock3, MessageCircle } from 'lucide-react';
import { site, appointmentUrl } from '@/data/site';
import { procedureAreas, procedurePhotos, procedureWhatsapp, formatProcedurePrice } from '@/data/procedure-journal';
import { JournalPhotoGallery } from '@/components/journal-photo-gallery';
import { JournalNavigation } from '@/components/journal-navigation';
import { ShareLink } from '@/components/share-link';
import { ClinicMap } from '@/components/clinic-map';
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
        <div><p className={styles.coverEyebrow}>REVISTA DE PROCEDIMENTOS</p><h1 id="journal-title">Conheça os<br/><em>procedimentos.</em></h1></div>
        <p className={styles.coverDescription}>Um guia para escolher com calma. Explore as fotos, consulte os valores e encontre o cuidado que faz sentido para você.</p>
      </section>

      <JournalNavigation/>
      {procedureAreas.map(area => <section key={area.id} id={area.id} className={styles.chapter} aria-labelledby={`journal-${area.id}`}>
        <header className={styles.chapterHeading}><div><h2 id={`journal-${area.id}`}>{area.title}</h2><span>{site.procedures.filter(item => item.category === area.id).length} procedimentos</span></div><p>{area.description}</p></header>
        <div className={styles.spreads}>{site.procedures.filter(item => item.category === area.id).map(item => {
          const folio = String(site.procedures.indexOf(item) + 1).padStart(2, '0');
          const [name, variation] = item.name.split(' · ');
          const photos = procedurePhotos(item);
          return <article id={item.id} className={styles.spread} key={item.id} aria-labelledby={`title-${item.id}`} data-journal-procedure={item.id}>
            <header className={styles.spreadHeading}><p>{area.title} <span>·</span> {folio}</p><h3 id={`title-${item.id}`}>{name}</h3>{variation && <p className={styles.variation}>{variation}</p>}</header>
            <div className={styles.spreadBody}><p>{item.description}</p>{item.consultationNote && <p className={styles.consultationNote} role="note">{item.consultationNote}</p>}</div>
            <div className={styles.media}><JournalPhotoGallery photos={photos} name={item.name}/></div>
            <dl className={styles.facts}><div><dt>INVESTIMENTO</dt><dd className={styles.price}>{item.price === null ? 'Sob consulta' : formatProcedurePrice(item.price)}</dd>{item.priceNote && <small>{item.priceNote}</small>}</div><div><dt><Clock3 size={16} strokeWidth={1.2}/>DURAÇÃO</dt><dd>{item.duration}</dd></div></dl>
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
