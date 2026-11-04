export type Procedure = { id: string; category: 'facial' | 'corporal' | 'capilar'; name: string; description: string; image?: string; price: number | null; priceNote?: string };
export type Course = { id: string; name: string; description: string; image?: string; price: number | null };
export type Testimonial = { quote: string; name: string };
export type ClinicalResult = { image: string; label: string; alt: string; orientation: string; beforeShare: number; comparisonRatio: number; width: number; height: number; procedureId: string };

export const site = {
  name: 'Michelle Guimarães',
  monogram: 'MG',
  headline: 'A beleza de continuar sendo você.',
  cro: '',
  bio: 'Biomédica esteta e tricologista, Dra. Michelle Guimarães une ciência, técnica e sensibilidade para valorizar a beleza de cada pessoa sem apagar o que a torna única.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Harmonização corporal', 'Tratamentos capilares'],
  phone: '+55 21 99536-4790',
  whatsapp: '5521995364790',
  whatsappUrl: 'https://wa.me/5521995364790?text=Ol%C3%A1%2C%20Dra.%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  bookingUrl: 'http://clinicamichelleguimaraes.simplesagenda.com.br',
  coursesUrl: 'https://wa.me/5521995364790?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos%20da%20Dra.%20Michelle.',
  googleBusiness: { profileUrl: '', embedUrl: '', reviewsUrl: '' },
  address: '',
  professionalPhilosophy: 'Beleza, ciência e naturalidade.',
  instagram: 'https://www.instagram.com/dramichelle.guimaraes/',
  instagramHandle: '@dramichelle.guimaraes',
  philosophy: ['SUA BELEZA.', 'SUA ESSÊNCIA.', 'SEU TEMPO.'],
  colors: { paper: '#fbf4f5', ink: '#2c2427', taupe: '#9c707d', champagne: '#c6a24c', dark: '#722a50', wine: '#33232c', muted: '#77676d' },
  brand: { logo: '/brand/logo.webp', seal: '/brand/sublogo-white.webp' },
  images: { hero: '/images/michelle-retrato-2026.webp', essence: '/images/michelle-editorial-2026.webp', about: '/images/michelle-sobre-2026.webp', beauty: '/images/michelle-ciencia-2026.webp' },
  procedures: [
    { id: 'botox', category: 'facial', name: 'Toxina botulínica', description: 'Um olhar individual para as linhas de expressão, com planejamento que considera a sua anatomia e a naturalidade dos movimentos.', price: null },
    { id: 'preenchimento-labial', category: 'facial', name: 'Preenchimento labial', description: 'Contorno, proporção e volume em equilíbrio com o seu rosto. Cada escolha começa pela avaliação dos seus lábios.', image: '/images/resultado-labios-01.webp', price: null },
    { id: 'harmonizacao-facial', category: 'facial', name: 'Harmonização facial', description: 'Um plano que considera o rosto como um todo, valorizando seus traços e respeitando a sua identidade.', image: '/images/resultado-harmonizacao.webp', price: null },
    { id: 'harmonizacao-corporal', category: 'corporal', name: 'Harmonização corporal', description: 'Cuidado personalizado a partir das características do seu corpo, dos seus objetivos e da avaliação profissional.', price: null },
    { id: 'tratamentos-capilares', category: 'capilar', name: 'Tratamentos capilares', description: 'Atenção ao couro cabeludo e aos fios, com avaliação individualizada para orientar o seu plano de cuidado.', price: null },
  ] as Procedure[],
  courses: [] as Course[],
  courseImage: '',
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-harmonizacao.webp', label: 'Expressão preservada, traços valorizados', alt: 'Antes e depois de harmonização facial realizado pela Dra. Michelle Guimarães.', orientation: 'horizontal', beforeShare: 647 / 1284, comparisonRatio: 647 / 1315, width: 1284, height: 1315, procedureId: 'harmonizacao-facial' },
    { image: '/images/resultado-frontal.webp', label: 'Região frontal / registro 01', alt: 'Registro de antes e depois da região frontal, compartilhado pela Dra. Michelle Guimarães.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1284 / 658, width: 1284, height: 1316, procedureId: 'botox' },
    { image: '/images/resultado-testa.webp', label: 'Região frontal / registro 02', alt: 'Registro de antes e depois da testa, compartilhado pela Dra. Michelle Guimarães.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1284 / 647, width: 1284, height: 1295, procedureId: 'botox' },
    { image: '/images/resultado-perfil.webp', label: 'Perfil com mais equilíbrio', alt: 'Antes e depois de harmonização de perfil realizado pela Dra. Michelle Guimarães.', orientation: 'horizontal', beforeShare: .525, comparisonRatio: 642 / 1231, width: 1284, height: 1231, procedureId: 'harmonizacao-facial' },
    { image: '/images/resultado-facial.webp', label: 'Contorno e expressão', alt: 'Antes e depois de harmonização facial realizado pela Dra. Michelle Guimarães.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 642 / 1252, width: 1284, height: 1252, procedureId: 'harmonizacao-facial' },
    { image: '/images/resultado-labios-01.webp', label: 'Volume com delicadeza', alt: 'Resultado real de preenchimento labial realizado pela Dra. Michelle Guimarães.', orientation: 'single', beforeShare: .5, comparisonRatio: 1, width: 1284, height: 1323, procedureId: 'preenchimento-labial' },
    { image: '/images/resultado-labios-02.webp', label: 'Contorno que respeita você', alt: 'Resultado real de preenchimento labial realizado pela Dra. Michelle Guimarães.', orientation: 'single', beforeShare: .5, comparisonRatio: 1, width: 1284, height: 1355, procedureId: 'preenchimento-labial' },
    { image: '/images/resultado-labios-03.webp', label: 'Definição e naturalidade', alt: 'Resultado real de preenchimento labial realizado pela Dra. Michelle Guimarães.', orientation: 'single', beforeShare: .5, comparisonRatio: 1, width: 1284, height: 1323, procedureId: 'preenchimento-labial' },
    { image: '/images/resultado-labios-04.webp', label: 'Beleza nos detalhes', alt: 'Resultado real de preenchimento labial realizado pela Dra. Michelle Guimarães.', orientation: 'single', beforeShare: .5, comparisonRatio: 1, width: 1284, height: 1298, procedureId: 'preenchimento-labial' },
  ] },
  seo: { title: 'Dra. Michelle Guimarães | Biomedicina Estética', description: 'Harmonização facial e corporal, tratamentos capilares e cuidado individualizado com a Dra. Michelle Guimarães. Agende sua avaliação.', url: '' },
};
export const appointmentUrl = site.bookingUrl;
