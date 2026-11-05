import { site, type Procedure } from './site';

export const procedureAreas = [
  { id: 'facial', title: 'Facial', subtitle: 'Expressão, proporção e identidade.', description: 'Um olhar atento para a pele, os contornos e os detalhes que tornam cada rosto único.' },
  { id: 'corporal', title: 'Corporal', subtitle: 'Cuidado que acompanha você.', description: 'Conheça as opções de cuidado corporal e as modalidades disponíveis para o seu planejamento.' },
  { id: 'capilar', title: 'Capilar', subtitle: 'Atenção desde a raiz.', description: 'Protocolos para o couro cabeludo e os fios, com diferentes possibilidades de acompanhamento.' },
] as const;

export const procedurePhotos = (procedure: Procedure) => site.results.items.filter(photo => photo.procedureId === (procedure.resultGroup ?? procedure.id));
export const procedureWhatsapp = (procedure: Procedure) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Olá, Dra. Michelle! Vi a revista de procedimentos e gostaria de saber mais sobre ${procedure.name}.`)}`;
export const formatProcedurePrice = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
