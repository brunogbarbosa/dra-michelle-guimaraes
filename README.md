# Dra. Michelle Guimarães

Site editorial baseado na estrutura retida do Premium Vendas V4, com hero fotográfico, retratos atualizados, identidade oficial, catálogo por área, cursos, galeria comparativa e agendamento online pelo Simples Agenda.

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

O agendamento usa `http://clinicamichelleguimaraes.simplesagenda.com.br`, conforme informado. WhatsApp continua disponível para dúvidas e cursos. Não há cadastro local de pacientes nem formulário que armazene dados.

Fontes locais com licenças em `public/fonts`. Favicon baseado na marca oficial. A imagem de compartilhamento existente foi atualizada para o retrato novo e otimizada para 1200 × 630 px.

## Links para compartilhar

Acrescente a âncora à URL pública do site. O botão **Copiar link** gera a URL completa no domínio em que o site estiver aberto.

| Área ou procedimento | Âncora |
| --- | --- |
| Facial | `#facial` |
| Corporal | `#corporal` |
| Capilar | `#capilar` |
| Cursos | `#cursos` |
| Toxina botulínica | `#botox` |
| Preenchimento labial | `#preenchimento-labial` |
| Harmonização facial | `#harmonizacao-facial` |
| Harmonização corporal | `#harmonizacao-corporal` |
| Tratamentos capilares | `#tratamentos-capilares` |

Mantenha os IDs estáveis ao atualizar nomes ou preços, para preservar os links enviados aos pacientes.

## Próximo envio de conteúdo

- Catálogo completo de procedimentos, descrições aprovadas, valores e fotos correspondentes. Em `site.procedures`, use `price` como número em reais e `image` com caminho público. `price: null` mostra **Consulte as condições**. Fotos não enviadas não são substituídas por fotos de outro procedimento.
- Cursos, valores, formatos, datas e fotografias de aulas ou entrega de certificados. Preencha `site.courses` e `site.courseImage`. Enquanto não houver esse material, a seção usa composição de marca e contato para informações, sem inventar cursos ou certificados.
- Link oficial do Google Meu Negócio, endereço e número de registro profissional. `site.googleBusiness` está preparado para `profileUrl`, `reviewsUrl` e `embedUrl` (URL de incorporação oficial do Google Maps). O usuário informou que enviará o link depois; nenhum perfil de terceiros foi associado.
- Domínio e acesso/configuração DNS, somente na etapa final. Depois da conexão, preencha `site.seo.url` com a URL HTTPS definitiva.

Esta entrega monta a base funcional. Os preços e demais dados não fornecidos permanecem sem valores fictícios.
