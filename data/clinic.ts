import { site } from './site';

const address = encodeURIComponent(site.address);
export const clinicMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
export const clinicDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
export const clinicMapEmbedUrl = site.googleBusiness.embedUrl || `https://www.google.com/maps?q=${address}&z=17&hl=pt-BR&output=embed`;
