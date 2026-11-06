export type ClinicReview = { id: string; name?: string; quote: string; rating: number; excerpt?: boolean };

// Avaliações transcritas dos registros enviados pela clínica em 06/11/2026.
// Os trechos sem nome visível não recebem autoria presumida.
export const clinicReviews: ClinicReview[] = [
  { id: 'kelly-vergueiro', name: 'Kelly Vergueiro', rating: 5, quote: 'Gostaria de registrar minha experiência na clínica de estética da Dra. Michelle Guimarães. Desde o primeiro contato, fui muito bem atendida, ela é muito educada, organizada e extremamente profissional. Demonstra profundo conhecimento técnico, além de uma escuta atenta e humanizada. Durante a avaliação, todas as minhas dúvidas foram esclarecidas com clareza, e o plano de tratamento foi montado de forma personalizada, respeitando minhas necessidades e expectativas.' },
  { id: 'paloma-ervilha', name: 'Paloma Ervilha', rating: 5, quote: 'Maravilhosa, havia ido em 2 lugares diferentes pra preencher com ácido a minha boca e não tinha ficado satisfeita, somente após a aplicação de ácido com a Doutora Michele que finalmente fiquei satisfeita, ela conseguiu acertar o formato e o ácido ideal pra minha boca 🥰' },
  { id: 'ambiente-acolhedor', rating: 5, excerpt: true, quote: 'Excelente profissional e ambiente acolhedor!!!' },
  { id: 'clareza-nos-procedimentos', rating: 5, excerpt: true, quote: 'Gosto do trabalho e da forma como explica cada procedimento!' },
];
