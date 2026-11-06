import { ArrowUpRight, CalendarDays, MapPin, Navigation } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';
import { clinicDirectionsUrl, clinicMapEmbedUrl, clinicMapsUrl } from '@/data/clinic';
import { ClinicReviews } from './clinic-reviews';
import { ClinicVideo } from './clinic-video';
import styles from './clinic-map.module.css';

export function ClinicMap() {
  if (!site.address) return null;
  return <><ClinicReviews/><section className={styles.root} id="clinica" aria-labelledby="clinic-map-title">
    <div className={styles.inner} id="como-chegar">
      <div className={styles.visit}>
        <div className={styles.copy}><p className={styles.eyebrow}><MapPin size={16}/>SUA VISITA / VILA DA PENHA</p><h2 id="clinic-map-title">Da chegada<br/><em>ao seu cuidado.</em></h2><p className={styles.introduction} id="clinic-video-description">Conheça o acesso ao espaço e o ambiente que espera por você. Dê o play e venha fazer uma visita à clínica.</p><div className={styles.address}><span>PUNTO OFFICES · SALA 707</span><address>{site.address}</address></div><div className={styles.actions}><a className={styles.directions} href={clinicDirectionsUrl} target="_blank" rel="noreferrer"><Navigation size={17}/>Traçar minha rota<ArrowUpRight size={18}/></a><a className={styles.open} href={appointmentUrl} target="_blank" rel="noreferrer"><CalendarDays size={17}/>Agendar minha visita<ArrowUpRight size={16}/></a></div><details className={styles.videoDescription}><summary>O que você encontra no vídeo</summary><p>O acesso pelo elevador, o caminho pelo corredor, a entrada da sala e os ambientes de recepção e atendimento da clínica.</p></details></div>
        <ClinicVideo/>
      </div>
      <div className={styles.mapRow}><div className={styles.mapHeading}><p className={styles.eyebrow}>ENCONTRE A CLÍNICA</p><h3>Um caminho<br/><em>até você.</em></h3><p>Estrada Padre Roser, 42<br/>Sala 707 · Vila da Penha<br/>Rio de Janeiro — RJ</p><a className={styles.open} href={site.googleBusiness.profileUrl || clinicMapsUrl} target="_blank" rel="noreferrer">Ver perfil no Google<ArrowUpRight size={16}/></a></div><div className={styles.map}><iframe src={clinicMapEmbedUrl} title="Localização da clínica no Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><a href={clinicMapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps<ArrowUpRight size={15}/></a></div></div>
    </div>
  </section></>;
}
