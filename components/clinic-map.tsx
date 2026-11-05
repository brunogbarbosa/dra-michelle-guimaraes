import { ArrowUpRight, MapPin, Navigation } from 'lucide-react';
import { site } from '@/data/site';
import { clinicDirectionsUrl, clinicMapEmbedUrl, clinicMapsUrl } from '@/data/clinic';
import styles from './clinic-map.module.css';

export function ClinicMap() {
  if (!site.address) return null;
  return <section className={styles.root} id="como-chegar" aria-labelledby="clinic-map-title">
    <div className={styles.inner}>
      <div className={styles.copy}><p className={styles.eyebrow}><MapPin size={16}/>NOSSO ENDEREÇO</p><h2 id="clinic-map-title">Seu próximo<br/><em>encontro.</em></h2><address>{site.address}</address><div className={styles.actions}><a className={styles.directions} href={clinicDirectionsUrl} target="_blank" rel="noreferrer"><Navigation size={17}/>Como chegar<ArrowUpRight size={18}/></a><a className={styles.open} href={clinicMapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps<ArrowUpRight size={16}/></a></div></div>
      <div className={styles.map}><iframe src={clinicMapEmbedUrl} title="Localização da clínica no Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><a href={clinicMapsUrl} target="_blank" rel="noreferrer">Ver mapa ampliado<ArrowUpRight size={15}/></a></div>
    </div>
  </section>;
}
