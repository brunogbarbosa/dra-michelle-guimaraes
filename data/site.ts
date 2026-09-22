export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Michelle Guimarães',
  monogram: 'MG',
  headline: 'Naturalidade em cada detalhe.',
  cro: '',
  bio: 'Biomédica esteta e tricologista, Dra. Michelle Guimarães une ciência, técnica e sensibilidade para valorizar a beleza de cada pessoa sem apagar o que a torna única.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Harmonização corporal', 'Tratamentos capilares'],
  phone: '+55 21 99536-4790',
  whatsapp: '5521995364790',
  whatsappUrl: 'https://wa.me/5521995364790?text=Ol%C3%A1%2C%20Dra.%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: '',
  professionalPhilosophy: 'Beleza, ciência e naturalidade.',
  instagram: 'https://www.instagram.com/dramichelle.guimaraes/',
  instagramHandle: '@dramichelle.guimaraes',
  philosophy: ['SUA BELEZA.', 'SUA ESSÊNCIA.', 'SEU TEMPO.'],
  colors: { paper: '#f8f1e9', ink: '#2b1d1f', taupe: '#9d705f', champagne: '#c9a466', dark: '#5c1228', wine: '#360813', muted: '#74605c' },
  images: { hero: '/images/michelle-hero.webp', essence: '/images/michelle-essencia.webp', about: '/images/michelle-sobre.webp', beauty: '/images/michelle-experiencia-next.webp' },
  procedures: [
    { name: 'Harmonização facial', description: 'Planejamento individualizado para valorizar proporções e preservar expressões.', image: '/images/resultado-harmonizacao.webp' },
    { name: 'Harmonização corporal', description: 'Protocolos personalizados para contorno, equilíbrio e confiança.', image: '/images/resultado-facial.webp' },
    { name: 'Tratamentos capilares', description: 'Cuidado do couro cabeludo e dos fios a partir de uma avaliação atenta.', image: '/images/resultado-frontal.webp' },
  ] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-harmonizacao.webp', label: 'Expressão preservada, traços valorizados', alt: 'Antes e depois de harmonização facial realizado pela Dra. Michelle Guimarães.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1284 / 658 },
    { image: '/images/resultado-frontal.webp', label: 'Suavidade no olhar', alt: 'Antes e depois de tratamento estético na região frontal realizado pela Dra. Michelle Guimarães.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1284 / 658 },
    { image: '/images/resultado-testa.webp', label: 'Naturalidade em movimento', alt: 'Antes e depois de tratamento estético da testa realizado pela Dra. Michelle Guimarães.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1284 / 647 },
    { image: '/images/resultado-perfil.webp', label: 'Perfil com mais equilíbrio', alt: 'Antes e depois de harmonização de perfil realizado pela Dra. Michelle Guimarães.', orientation: 'horizontal', beforeShare: .525, comparisonRatio: 642 / 1231 },
    { image: '/images/resultado-facial.webp', label: 'Contorno e expressão', alt: 'Antes e depois de harmonização facial realizado pela Dra. Michelle Guimarães.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 642 / 1252 },
    { image: '/images/resultado-labios-01.webp', label: 'Volume com delicadeza', alt: 'Resultado real de preenchimento labial realizado pela Dra. Michelle Guimarães.', orientation: 'single', beforeShare: .5, comparisonRatio: 1 },
    { image: '/images/resultado-labios-02.webp', label: 'Contorno que respeita você', alt: 'Resultado real de preenchimento labial realizado pela Dra. Michelle Guimarães.', orientation: 'single', beforeShare: .5, comparisonRatio: 1 },
    { image: '/images/resultado-labios-03.webp', label: 'Definição e naturalidade', alt: 'Resultado real de preenchimento labial realizado pela Dra. Michelle Guimarães.', orientation: 'single', beforeShare: .5, comparisonRatio: 1 },
    { image: '/images/resultado-labios-04.webp', label: 'Beleza nos detalhes', alt: 'Resultado real de preenchimento labial realizado pela Dra. Michelle Guimarães.', orientation: 'single', beforeShare: .5, comparisonRatio: 1 },
  ] },
  seo: { title: 'Dra. Michelle Guimarães | Biomedicina Estética', description: 'Harmonização facial e corporal, tratamentos capilares e cuidado individualizado com a Dra. Michelle Guimarães. Agende sua avaliação.', url: '' },
};
export const appointmentUrl = site.whatsappUrl || site.instagram;
