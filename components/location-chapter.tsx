import { ArrowUpRight, MapPin, CalendarDays } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';
import { clinicMapsUrl } from '@/data/clinic';

export function LocationChapter() {
  const { profileUrl, reviewsUrl } = site.googleBusiness;
  return <section id="clinica" className="location-chapter" aria-labelledby="location-title">
    <div><p className="chapter-tag">SUA VISITA / UM TEMPO PARA VOCÊ</p><h2 id="location-title">Seu cuidado<br/><em>tem um encontro.</em></h2><p>Esperamos você na Vila da Penha, no Rio de Janeiro. Escolha seu horário na agenda online e reserve um tempo para o seu cuidado.</p><a className="chapter-link" href={appointmentUrl} target="_blank" rel="noreferrer"><CalendarDays size={20}/>Agendar meu horário<ArrowUpRight size={20}/></a></div>
    <div className="location-details"><MapPin size={36} strokeWidth={1}/><h3>Dra. Michelle Guimarães</h3><span>BIOMEDICINA ESTÉTICA</span>{site.address && <p>{site.address}</p>}
      {site.address || profileUrl ? <a href={profileUrl || clinicMapsUrl} target="_blank" rel="noreferrer">Ver localização no Google Maps<ArrowUpRight size={18}/></a> : <a href={site.whatsappUrl} target="_blank" rel="noreferrer">Informações e como chegar<ArrowUpRight size={18}/></a>}
      {reviewsUrl && <a href={reviewsUrl} target="_blank" rel="noreferrer">Veja as avaliações no Google<ArrowUpRight size={18}/></a>}
    </div>
  </section>;
}
