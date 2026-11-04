# Preparação das logos oficiais

Foram usados os arquivos de marca fornecidos pelo solicitante. As duas versões coloridas passaram pelo recurso integrado de edição de imagem para remover o fundo claro. A sublogo branca já possuía transparência e foi somente otimizada.

Arquivos finais:

- `public/brand/logo.webp`: logo principal transparente.
- `public/brand/sublogo.webp`: sublogo colorida transparente.
- `public/brand/sublogo-white.webp`: sublogo branca transparente fornecida.
- `app/icon.png`: favicon otimizado a partir da marca branca sobre a cor vinho.

## Prompt da logo principal

> Edit target: the provided official logo of Dra. Michelle Guimarães. Remove ONLY the pale solid background and make it genuinely transparent. Preserve the exact original existing logo: thin plum MG monogram interlocked with gold G and small gold diamond, the exact handwritten signature 'Dra. Michelle Guimarães', and the gold spaced subtitle 'BIOMEDICINA ESTÉTICA'. Do not redesign, restyle, reletter, add or remove any elements, or change original colors. Keep full logo, sharp fine lines. Crop canvas to logo bounds with 5% transparent padding. This is faithful background extraction of an existing brand asset, not a new logo design.

## Prompt da sublogo

> Use case background-extraction. Edit this existing official circular brand seal. Remove only the pale solid background to true transparency. Preserve EXACTLY the existing plum-and-gold monogram MG, small diamond, circular arcs, circular text 'DRA. MICHELLE GUIMARÃES' and 'BIOMEDICINA ESTÉTICA', original positions, fine lines, original colors. No redesign, no new text, no changes to lettering, no shadows. Trim to full circular logo with 5% transparent padding.

As saídas foram inspecionadas, recortadas nas margens transparentes e convertidas para WebP sem perdas. Os retratos e os resultados clínicos não passaram por geração de imagem.
