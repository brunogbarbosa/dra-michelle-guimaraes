import { ArrowUpRight, MapPin, CalendarDays } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';

export function LocationChapter() {
  const { profileUrl, embedUrl, reviewsUrl } = site.googleBusiness;
  return <section id="clinica" className="location-chapter" aria-labelledby="location-title">
    <div><p className="chapter-tag">SUA VISITA / UM TEMPO PARA VOCÊ</p><h2 id="location-title">Seu cuidado<br/><em>tem um encontro.</em></h2><p>Escolha seu horário na agenda online. Para informações sobre a clínica e como chegar, fale com a nossa equipe.</p><a className="chapter-link" href={appointmentUrl} target="_blank" rel="noreferrer"><CalendarDays size={20}/>Agendar meu horário<ArrowUpRight size={20}/></a></div>
    <div className="location-details"><MapPin size={36} strokeWidth={1}/><h3>Dra. Michelle Guimarães</h3><span>BIOMEDICINA ESTÉTICA</span>{site.address && <p>{site.address}</p>}
      {profileUrl ? <a href={profileUrl} target="_blank" rel="noreferrer">Conheça a clínica no Google<ArrowUpRight size={18}/></a> : <a href={site.whatsappUrl} target="_blank" rel="noreferrer">Informações e como chegar<ArrowUpRight size={18}/></a>}
      {reviewsUrl && <a href={reviewsUrl} target="_blank" rel="noreferrer">Veja as avaliações no Google<ArrowUpRight size={18}/></a>}
      {embedUrl && <iframe src={embedUrl} title="Localização da clínica no Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>}
    </div>
  </section>;
}
