# Dra. Michelle Guimarães

Site editorial baseado na estrutura retida do Premium Vendas V4, com hero fotográfico, retratos atualizados, identidade oficial, Resultados e Procedimentos em um único carrossel por área, cursos e agendamento online pelo Simples Agenda.

## Revista de procedimentos

A página pública `/procedimentos` apresenta os 19 procedimentos em formato de revista digital, com índice por área, seletor por nome, investimento, duração, agenda e WhatsApp com mensagem específica do procedimento. O menu, o rodapé e a seção de resultados da página inicial dão acesso à revista. As duas páginas compartilham os dados de `data/site.ts` para manter preços e durações sincronizados.

Cada procedimento tem sua própria âncora na revista, por exemplo `/procedimentos#preenchimento-labial`. O botão **Copiar link** preserva o caminho da página. Todos os procedimentos estão no HTML da revista, sem depender de filtros para abrir um link direto. As âncoras antigas da página inicial continuam funcionando.

A capa combina uma abertura editorial em vinho com o retrato original da doutora no computador e no tablet; no celular, a abertura fica compacta, com foco no título e no acesso ao índice. Os capítulos por área têm numeração e contagem de procedimentos. Cada procedimento ocupa um bloco marfim independente, sem contorno, com título em largura total, descrição, investimento, duração e ações bem separados. Os procedimentos sem fotografias usam uma apresentação compacta, sem grandes caixas vazias ou imagens genéricas. Para inserir fotos depois, acrescente os registros ao grupo correto em `site.results.items`.

As galerias da revista oferecem setas acima das fotos, gesto horizontal, teclado e ampliação, sem avanço automático. As proporções originais dos registros são preservadas. No computador, a galeria e os detalhes ficam lado a lado; em telas menores, os elementos acompanham a ordem de leitura em uma coluna. O índice permanece acessível durante a rolagem, com links por área e seletor por nome.

A seção de resultados da página inicial convida à revista por uma chamada com capa ilustrativa, um link no título e um botão em cada procedimento, que abre sua âncora correspondente na revista.

## Localização

Endereço informado: **Estrada Padre Roser, 42 - Sala 707, Vila da Penha, Rio de Janeiro - RJ, 21210-623**, no Punto Offices. As duas páginas compartilham um bloco de visita à clínica perto do rodapé, com vídeo, endereço, agendamento e mapa interativo. `data/clinic.ts` gera os links do mapa e da rota a partir de `site.address`. O perfil comercial informado pela clínica é **https://share.google/yhZls9hp0hDRG1R2d**, usado nos botões do perfil e das avaliações.

O carrossel `ClinicReviews` apresenta os quatro relatos distintos enviados em 06/11/2026: os textos completos de Kelly Vergueiro e Paloma Ervilha e dois trechos curtos sem nome visível. A autoria desses trechos não foi presumida. Os textos e as cinco estrelas individuais vêm dos anexos e ficam em `data/clinic-reviews.ts`; não são uma integração automática com a API do Google. Não há nota agregada nem contagem de avaliações presumida. O carrossel tem setas, indicadores, navegação por teclado, gesto horizontal e expansão dos relatos longos, sem rotação automática.

O vídeo original `IMG_4278.MP4` foi convertido para H.264/AAC com início rápido (`faststart`), mantendo o conteúdo completo de aproximadamente 51 segundos e a proporção de 480 × 848. `public/videos/visita-clinica.mp4` tem cerca de 6 MB, ante 9,5 MB do original. A capa WebP de aproximadamente 13 KB é um quadro da própria gravação. O player usa `preload="none"`, não reproduz automaticamente e oferece controles nativos após o toque em **Assistir ao vídeo da clínica**. A descrição textual informa o trajeto e os ambientes mostrados. A âncora `#clinica` leva à visita em vídeo; `#como-chegar` continua funcionando e `#avaliacoes` abre o carrossel.

A identidade utiliza vinho `#72192f`, vinho profundo `#420b18`, dourado e marfim quente. Fundos, sombras, degradês e detalhes antes puxados para uva foram ajustados, preservando a composição aprovada do hero. O favicon SVG usa esse mesmo vinho com a marca branca original. A revista reutiliza a imagem de compartilhamento existente.

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
| Botox Light | `#botox-light` |
| Botox Nefertiti | `#botox-nefertiti` |
| Preenchimento labial | `#preenchimento-labial` |
| Preenchimento facial | `#harmonizacao-facial` |
| Perfiloplastia | `#perfiloplastia` |
| Bioestimulador · Hidroxiapatita de cálcio | `#bioestimulador-hidroxiapatita` |
| Bioestimulador · PLLA | `#bioestimulador-plla` |
| Fios de tração (lifting) | `#fios-tracao` |
| Fios lisos | `#fios-lisos` |
| Fios filler | `#fios-filler` |
| Microagulhamento · Drug delivery | `#microagulhamento-drug-delivery` |
| Skinbooster | `#skinbooster` |
| Harmonização glútea | `#harmonizacao-glutea` |
| Intradermoterapia corporal · 5 sessões | `#harmonizacao-corporal` |
| Intradermoterapia corporal · avulso | `#intradermoterapia-corporal-avulsa` |
| Intradermoterapia capilar · 10 sessões | `#intradermoterapia-capilar-10-sessoes` |
| Intradermoterapia capilar · 5 sessões | `#intradermoterapia-capilar-5-sessoes` |
| Intradermoterapia capilar · avulso | `#tratamentos-capilares` |

Mantenha os IDs estáveis ao atualizar nomes ou preços, para preservar os links enviados aos pacientes. Quando um procedimento for reorganizado, `aliases` e `findProcedure` mantêm os endereços anteriores: `#fios-sustentacao` abre `#fios-tracao`, `#fios-parafusos` abre `#fios-filler` e os três antigos links glúteos abrem `#harmonizacao-glutea`. A revista também contém âncoras antigas no HTML para funcionar sem JavaScript. Novos links copiados usam o ID atual.

As âncoras de área selecionam automaticamente a aba do carrossel. As âncoras de procedimento selecionam a aba e o slide correspondentes, inclusive no primeiro acesso e ao usar voltar/avançar no navegador. O seletor por nome e as setas ficam acima das fotografias; também há navegação por teclado e gesto horizontal nativo. O carrossel não avança sozinho.

## Organização dos registros

O catálogo contém os procedimentos e atualizações enviados pela clínica, sem recalcular pacotes ou presumir preços por sessão. As variantes capilares e de intradermoterapia corporal permanecem separadas. A harmonização glútea foi unificada; os fios são apresentados sem quantidade. Os links antigos continuam funcionando.

Os registros labiais, de perfil, capilares e de intradermoterapia corporal foram preservados. As fotografias glúteas foram retiradas das galerias conforme solicitado. As fotografias HEIC foram convertidas para WebP. O retrato da essência foi substituído por `IMG_3694.JPG`, em composição vertical sem moldura.

Na atualização de Botox de 05/11/2026, Full Face passou a R$ 1.399,99, Light a R$ 899,99 e Nefertiti foi incluído por R$ 1.299,99. A duração do Nefertiti permanece conforme avaliação, pois não foi informada. As cinco fotografias antigas de Botox foram retiradas das galerias. O reenvio das fotos completou os cinco comparativos de Full Face e os cinco de Light, mantendo a ordem dos anexos. A galeria Full Face corresponde aos arquivos `FULL-FACE (5), (1), (2), (3), (4)`; Light corresponde a `BOTOX LIGHT (4), (5), (1), (2), (3)`. Os anexos 11–14 foram associados ao Nefertiti conforme confirmação explícita do usuário. O anexo 11 é identificado como imagem ilustrativa, sem comparação; os outros três mantêm os comparativos originais. Todas as imagens preservam o enquadramento completo, sem retoques ou molduras.

Os três tipos de Botox trazem o aviso de que a Dra. Michelle também realiza outras modalidades, com indicação e valores sob consulta. A informação fica junto da descrição na página inicial e na revista, inclusive ao abrir uma âncora direta. O aviso é mantido em `consultationNote`; outras modalidades não foram cadastradas com preços presumidos.

Na rodada seguinte, os preenchimentos labial e facial passaram a exibir **R$ 999,99 por ml**. A galeria labial preserva os quatro comparativos e acrescenta três fotos individuais. A galeria facial preserva os cinco registros e recebe `IMG_4260.JPEG`, além de aviso de avaliação e das onze áreas de tratamento em `treatmentAreas`.

A perfiloplastia reúne nariz, lábios e queixo por **R$ 2.699,99**, com os anexos `IMG_4262`, `IMG_4261` e `IMG_4263`. Os bioestimuladores mantêm seus valores e ficam sem fotos. Os fios lisos permanecem por **R$ 399,99**, os fios filler por **R$ 499,99** (valor confirmado), sem indicação de unidades ou par. Fios de tração (lifting) ficam com **Valor sob consulta** e **Necessita de avaliação**; sua galeria contém `IMG_4273`, `IMG_4274`, `IMG_4276` e `IMG_4275`, conforme confirmação do usuário. O primeiro é um registro de três etapas (antes, pós imediato e 15 dias) e não habilita o comparador de duas imagens.

A **Harmonização glútea** ocupa um único item, sem preço fixo e sem fotografias. O texto informa a necessidade de avaliação e as possibilidades de preenchimento, bioestimulador e cuidado com a parte muscular. Durações não informadas para os procedimentos novos ou reorganizados aparecem conforme avaliação. As duas páginas reutilizam esses mesmos dados.

Na correção de galerias de 06/11/2026, as três fotos labiais sem a marca foram retiradas da exibição (`labial-comparativo-01`, `02` e `03`). Preenchimento labial fica com quatro registros, todos com a logo. A antiga foto 1 de Preenchimento facial (`resultado-harmonizacao`) passou para Botox Full Face, conforme esclarecimento do usuário; as antigas fotos 3 e 4 de Light também passaram para Full Face. As antigas fotos 2, 3 e 4 de Nefertiti passaram para Light. Full Face fica com oito registros, Light com seis, Nefertiti com apenas a ilustração do pescoço e Preenchimento facial com cinco. A alteração vale para a página inicial e para a revista, pela fonte de dados compartilhada.

Os arquivos das imagens mantêm os nomes existentes, inclusive quando a classificação foi corrigida. O vínculo em `procedureId` e os textos alternativos indicam o procedimento atual. Os arquivos fotográficos, as proporções, os preços e as durações foram preservados.

Os registros são associados por `procedureId` em `site.results.items`. O campo `resultGroup` de um procedimento permite compartilhar a galeria entre suas variantes, sem atribuir uma dosagem ou número de sessões à fotografia. Fotos corporais avulsas permanecem como registros individuais, sem montar pares de antes/depois sem confirmação. As dimensões reais ficam em `width` e `height`.

Cada procedimento reúne suas fotos em miniaturas, com ampliação e comparação quando o original é um antes/depois. As imagens são exibidas na proporção do arquivo, sem molduras, cantos arredondados ou faixas laterais adicionadas. As fotografias clínicas não foram retocadas.

Os arquivos WebP já são redimensionados e comprimidos antes da publicação e são servidos diretamente, sem uma segunda conversão pelo otimizador do Next.js. Isso também evita atrasos de carregamento observados na validação local da galeria.

## Movimento

O hero mantém a composição original do Premium Vendas V4: retrato como fundo amplo à direita, título monumental à esquerda, arcos, assinatura e navegação sobre a composição. O enquadramento usa `cover` alinhado ao topo para preservar a cabeça; a fotografia não recebe filtro de escurecimento nem máscara superior. O degradê lateral permite ler o texto sem escurecer o rosto. No desktop, a navegação é transparente no topo e lisa após a rolagem. No celular, permanece transparente ao rolar. A fotografia se estende por trás do nav também no tablet, sem o antigo recuo de 86 px. Não há contorno, sombra, degradê próprio ou desfoque no nav.

Os cabeçalhos das duas páginas usam somente o MG oficial em dourado, com o mesmo desenho e tamanho em todas as telas. `BrandMark` aplica a cor sobre a transparência do monograma já existente em `public/brand/logo.webp`, sem redesenhar a marca nem modificar o arquivo. Os retratos e os registros clínicos foram preservados nesta atualização visual.

Os retratos da essência, apresentação e experiência preservam a proporção original com `object-fit: contain`. Essas seções acompanham a altura das imagens para evitar cortes em telas largas ou baixas.

As entradas de seção usam `use-site-motion.ts`: duração curta, uma execução por elemento e suporte à preferência de movimento reduzido, inclusive quando ela muda com a página aberta. O hero usa uma entrada finita, sem deslocar o retrato com o ponteiro ou a rolagem e sem reiniciar ao voltar ao topo. Não há loops de animação contínuos.

## Domínio público

Endereço oficial: **https://www.michelleguimaraes.com.br**. O domínio sem `www` redireciona permanentemente (308) para esse endereço. Ambos estão vinculados ao projeto `dramichelleguimaraes` na Vercel, com DNS mantido na GoDaddy. `site.seo.url` define o endereço oficial nos metadados e no link canônico.

Apontamentos configurados: `A @ → 216.198.79.1` e `CNAME www → 0be111eac848932c.vercel-dns-017.com.`. Os dois TXT em `_vercel` confirmam a titularidade do domínio e de `www` para este projeto. Os demais registros DNS foram preservados.

## Próximo envio de conteúdo

- Novas fotografias dos procedimentos que ainda não têm registros próprios e aprovação das descrições. Em `site.procedures`, `price` é um número em reais e `duration` é a duração exibida na agenda. Cadastre fotos em `site.results.items` com o grupo correto e as dimensões reais do arquivo.
- Cursos, valores, formatos, datas e fotografias de aulas ou entrega de certificados. Preencha `site.courses` e `site.courseImage`. Enquanto não houver esse material, a seção usa composição de marca e contato para informações, sem inventar cursos ou certificados.
- Número de registro profissional e, se disponível, URL oficial de incorporação do Google Maps em `site.googleBusiness.embedUrl`. O perfil comercial e as avaliações já receberam o link enviado em 06/11/2026. Novos depoimentos podem ser acrescentados em `data/clinic-reviews.ts`.

Cursos permanecem com a composição existente, conforme solicitado.
