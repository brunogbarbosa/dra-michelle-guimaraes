# Dra. Michelle Guimarães

Site editorial baseado na estrutura retida do Premium Vendas V4, com hero fotográfico, retratos atualizados, identidade oficial, Resultados e Procedimentos em um único carrossel por área, cursos e agendamento online pelo Simples Agenda.

## Revista de procedimentos

A página pública `/procedimentos` apresenta os 19 procedimentos em formato de revista digital, com índice por área, seletor por nome, investimento, duração, agenda e WhatsApp com mensagem específica do procedimento. O menu, o rodapé e a seção de resultados da página inicial dão acesso à revista. As duas páginas compartilham os dados de `data/site.ts` para manter preços e durações sincronizados.

Cada procedimento tem sua própria âncora na revista, por exemplo `/procedimentos#preenchimento-labial`. O botão **Copiar link** preserva o caminho da página. Todos os procedimentos estão no HTML da revista, sem depender de filtros para abrir um link direto. As âncoras antigas da página inicial continuam funcionando.

As galerias oferecem setas acima das fotos, miniaturas, gesto horizontal, teclado e ampliação, sem avanço automático. As proporções originais dos registros são preservadas. Os sete procedimentos faciais sem fotografias têm espaços vazios reservados; nenhum registro genérico foi atribuído a eles. Para inserir fotos depois, acrescente os registros ao grupo correto em `site.results.items`.

A identidade utiliza vinho `#72192f`, vinho profundo, dourado e marfim quente. Fundos, sombras, degradês e detalhes antes puxados para uva foram ajustados, preservando a composição aprovada do hero. O favicon SVG usa esse mesmo vinho com a marca branca original. A revista reutiliza a imagem de compartilhamento existente.

## Desenvolvimento

Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

## Validação

```sh
npm run typecheck
npm run build
```

## Vercel

Importe este repositório na Vercel. O framework é **Next.js**, o diretório raiz é **./**, e os comandos padrão de instalação e build são suficientes. Não há variáveis de ambiente obrigatórias. A URL de produção é usada automaticamente nos metadados quando disponibilizada pela Vercel.

## Conteúdo

Dados e links em `data/site.ts`. Os quatro retratos e as logos foram atualizados com os materiais fornecidos em 04/11/2026. As logos têm fundo transparente. A versão branca preserva a arte fornecida; as versões coloridas tiveram o fundo removido pelo recurso de edição de imagem. As fotografias reais foram otimizadas para WebP, sem retoques no rosto ou nos resultados clínicos.

O hero reúne agendamento pelo Simples Agenda e WhatsApp **(21) 97116-9009**. O agendamento usa `http://clinicamichelleguimaraes.simplesagenda.com.br`, conforme informado. Não há cadastro local de pacientes nem formulário que armazene dados.

Fontes locais com licenças em `public/fonts`. Favicon baseado na marca oficial. A imagem de compartilhamento existente foi atualizada para o retrato novo e otimizada para 1200 × 630 px.

## Links para compartilhar

Acrescente a âncora à URL pública do site. O botão **Copiar link** gera a URL completa no domínio em que o site estiver aberto.

| Área ou procedimento | Âncora |
| --- | --- |
| Facial | `#facial` |
| Corporal | `#corporal` |
| Capilar | `#capilar` |
| Cursos | `#cursos` |
| Botox Full Face | `#botox` |
| Botox light | `#botox-light` |
| Preenchimento labial | `#preenchimento-labial` |
| Preenchimento facial | `#harmonizacao-facial` |
| Bioestimulador · Hidroxiapatita de cálcio | `#bioestimulador-hidroxiapatita` |
| Bioestimulador · PLLA | `#bioestimulador-plla` |
| Fios de sustentação · par | `#fios-sustentacao` |
| Fios lisos · 10 unidades | `#fios-lisos` |
| Fios parafusos · par | `#fios-parafusos` |
| Microagulhamento · Drug delivery | `#microagulhamento-drug-delivery` |
| Skinbooster | `#skinbooster` |
| Glúteo com AH · 10 ml | `#gluteo-ah-10ml` |
| Glúteo com AH · 20 ml | `#gluteo-ah-20ml` |
| Glúteo com AH · 30 ml | `#gluteo-ah-30ml` |
| Intradermoterapia corporal · 5 sessões | `#harmonizacao-corporal` |
| Intradermoterapia corporal · avulso | `#intradermoterapia-corporal-avulsa` |
| Intradermoterapia capilar · 10 sessões | `#intradermoterapia-capilar-10-sessoes` |
| Intradermoterapia capilar · 5 sessões | `#intradermoterapia-capilar-5-sessoes` |
| Intradermoterapia capilar · avulso | `#tratamentos-capilares` |

Mantenha os IDs estáveis ao atualizar nomes ou preços, para preservar os links enviados aos pacientes.

As âncoras de área selecionam automaticamente a aba do carrossel. As âncoras de procedimento selecionam a aba e o slide correspondentes, inclusive no primeiro acesso e ao usar voltar/avançar no navegador. O seletor por nome e as setas ficam acima das fotografias; também há navegação por teclado e gesto horizontal nativo. O carrossel não avança sozinho.

## Organização dos registros

O catálogo contém os 19 procedimentos da tabela enviada, com os valores e durações transcritos sem recalcular pacotes ou presumir preços por sessão. As variantes de quantidade e número de sessões permanecem separadas. Os IDs antigos foram preservados para manter links já enviados.

Foram acrescentados 16 registros clínicos: quatro comparativos labiais (substituindo os lábios isolados), dois de perfil, dois de região frontal/mento, um da região dos olhos, dois capilares e cinco corporais. Os cinco comparativos faciais anteriores foram mantidos. As fotografias HEIC foram convertidas para WebP. O retrato da essência foi substituído por `IMG_3694.JPG`, em composição vertical sem moldura.

Os registros são associados por `procedureId` em `site.results.items`. O campo `resultGroup` de um procedimento permite compartilhar a galeria entre suas variantes, sem atribuir uma dosagem ou número de sessões à fotografia. Fotos corporais avulsas permanecem como registros individuais, sem montar pares de antes/depois sem confirmação. As dimensões reais ficam em `width` e `height`.

Cada procedimento reúne suas fotos em miniaturas, com ampliação e comparação quando o original é um antes/depois. As imagens são exibidas na proporção do arquivo, sem molduras, cantos arredondados ou faixas laterais adicionadas. As fotografias clínicas não foram retocadas.

Os arquivos WebP já são redimensionados e comprimidos antes da publicação e são servidos diretamente, sem uma segunda conversão pelo otimizador do Next.js. Isso também evita atrasos de carregamento observados na validação local da galeria.

## Movimento

O hero mantém a composição original do Premium Vendas V4: retrato como fundo amplo à direita, título monumental à esquerda, arcos, assinatura e navegação sobre a composição. O enquadramento usa `cover` alinhado ao topo para preservar a cabeça; a fotografia não recebe filtro de escurecimento nem máscara superior. O degradê lateral permite ler o texto sem escurecer o rosto. No desktop, a navegação é transparente no topo e lisa após a rolagem. No celular, a fotografia se estende por trás do nav, que permanece transparente ao rolar, com logo e ícone dourados. Não há sombra, degradê próprio ou desfoque no nav.

Os retratos da essência, apresentação e experiência preservam a proporção original com `object-fit: contain`. Essas seções acompanham a altura das imagens para evitar cortes em telas largas ou baixas.

As entradas de seção usam `use-site-motion.ts`: duração curta, uma execução por elemento e suporte à preferência de movimento reduzido, inclusive quando ela muda com a página aberta. O hero usa uma entrada finita, sem deslocar o retrato com o ponteiro ou a rolagem e sem reiniciar ao voltar ao topo. Não há loops de animação contínuos.

## Domínio público

Endereço oficial: **https://www.michelleguimaraes.com.br**. O domínio sem `www` redireciona permanentemente (308) para esse endereço. Ambos estão vinculados ao projeto `dramichelleguimaraes` na Vercel, com DNS mantido na GoDaddy. `site.seo.url` define o endereço oficial nos metadados e no link canônico.

Apontamentos configurados: `A @ → 216.198.79.1` e `CNAME www → 0be111eac848932c.vercel-dns-017.com.`. Os dois TXT em `_vercel` confirmam a titularidade do domínio e de `www` para este projeto. Os demais registros DNS foram preservados.

## Próximo envio de conteúdo

- Novas fotografias dos procedimentos que ainda não têm registros próprios e aprovação das descrições. Em `site.procedures`, `price` é um número em reais e `duration` é a duração exibida na agenda. Cadastre fotos em `site.results.items` com o grupo correto e as dimensões reais do arquivo.
- Cursos, valores, formatos, datas e fotografias de aulas ou entrega de certificados. Preencha `site.courses` e `site.courseImage`. Enquanto não houver esse material, a seção usa composição de marca e contato para informações, sem inventar cursos ou certificados.
- Link oficial do Google Meu Negócio, endereço e número de registro profissional. `site.googleBusiness` está preparado para `profileUrl`, `reviewsUrl` e `embedUrl` (URL de incorporação oficial do Google Maps). O usuário informou que enviará o link depois; nenhum perfil de terceiros foi associado.

Cursos permanecem com a composição existente, conforme solicitado nesta rodada. O Google Meu Negócio aguarda os dados do próximo envio.
