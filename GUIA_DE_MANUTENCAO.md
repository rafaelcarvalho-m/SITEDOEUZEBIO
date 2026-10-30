# Guia de manutenção do site

Este manual foi escrito para quem precisa atualizar o site sem conhecer
programação. Os cadastros de eventos, fotografias e calendário ficam separados
das rotinas que montam as páginas. O projeto continua estático: não usa etapa
de compilação, framework ou pacote npm.

## A. Visão geral

O site tem 22 páginas HTML independentes. Cada página contém seu próprio texto e
estrutura; CSS define a aparência, e JavaScript acrescenta os recursos
interativos. A hospedagem indicada pelo repositório e pelo sitemap é GitHub
Pages.

### Arquivos principais

| Local | Para que serve |
| --- | --- |
| `index.html` | Página inicial: avisos, eventos em destaque, calendário escolar, contatos e Tour 360°. |
| `style.css` | Aparência geral, componentes compartilhados e adaptação a telas menores. |
| `paginas.css` | Estilos compartilhados pelas páginas internas. |
| `comum.js` | Menu móvel, acessibilidade, VLibras, lightbox e botões compartilhados. Também atualiza o ano dos rodapés. |
| `script.js` | Interações que existem somente na Home. |
| `dados/` | Cadastros editáveis usados por eventos, galeria e calendário. |
| `calendario.js` | Exibe o calendário configurado em `dados/calendario.js` na Home e em Referências. |
| `offline.html` e `service-worker.js` | Mostram uma página de conexão indisponível e a guardam no navegador para falhas de rede. |
| `ferramentas/validar-site.js` | Verifica links, imagens, cadastros e arquivos locais sem instalar dependências. |
| `sitemap.xml` e `robots.txt` | Arquivos usados pelos mecanismos de busca. O sitemap contém o endereço público do site. |
| `CHECKPOINT-CONTINUIDADE.md` | Histórico de decisões e alterações; não é carregado pelo site. |

### Pastas de páginas e imagens

- `apoio/`: página de Atendimento Educacional Especializado e fotos de apoio.
- `biblioteca/`: página e fotografias da Biblioteca.
- `ensino-medio/`: Ensino Regular, Ensino Técnico, cursos, áreas e imagens.
- `eventos/`: página, lógica e arquivos de imagem dos eventos.
- `galeria/`: página e lógica da galeria completa.
- `imgs-home-index/`: logotipo e imagens usadas na Home.
- `pdfs-do-site/`: calendário escolar em PDF e outros documentos publicados.
- `projetos/`: páginas de Robótica, RPG e Clubes de Ciências, com suas imagens.
- `referencias/`: fontes consultadas e créditos das imagens.
- `sobrenos/`: página Sobre Nós, estilos e fotografias históricas.

Os arquivos de imagem são referenciados por caminhos relativos à raiz do site
nos cadastros de `dados/`. Nas páginas HTML, imagens próprias ficam junto da
página ou na pasta de imagens indicada no caminho `src`.

## B. Como adicionar um evento escolar

1. Salve a imagem final em `eventos/`. Use um nome simples, sem espaços, por
   exemplo `festa-junina-2027.webp`.
2. Abra `dados/eventos.js` e copie um objeto dentro da lista `items`.
3. Troque os valores pelos dados confirmados. Exemplo de formato:

```js
{
  image: "eventos/festa-junina-2027.webp",
  alt: "Estudantes participam da festa junina da escola",
  caption: "Festa junina",
  titulo: "Festa junina do colégio",
  data: "AAAA-MM-DD",
  categoria: "Evento escolar",
  local: "Colégio Estadual Euzébio da Mota",
  width: 1600,
  height: 1067,
}
```

Substitua `AAAA-MM-DD` pela data real no formato ano-mês-dia; não deixe o texto
de exemplo. Se o evento não tiver data confirmada, remova a linha `data` e não
invente uma. Para uma arte que deve aparecer inteira, use `variant: "poster"`;
para um logotipo, use `variant: "logo"`.

Campos que podem ser preenchidos:

- `image`: caminho do arquivo da imagem desde a raiz do site.
- `alt`: descrição da imagem para leitores de tela.
- `width` e `height`: dimensões originais da imagem, em pixels.
- `caption`: texto curto mostrado sobre a imagem ou no lightbox.
- `titulo` e `descricao`: título e texto do card na página de Eventos.
- `data`: data exata. O site usa esse campo para separar eventos próximos e
  passados.
- `ano`: use somente quando o ano for conhecido, mas não houver dia e mês.
- `categoria` e `local`: dados opcionais para filtros e detalhes.
- `objectPosition`: ajuste opcional do recorte, como `"center 35%"`.
- `variant`: `"poster"` ou `"logo"` para exibir a arte inteira.

A ordem dos eventos define a ordem dos cards. Até quatro primeiros podem aparecer
na Home. A lista `siteEventCategories`, no mesmo arquivo, controla quais
categorias aparecem nos filtros mesmo quando ainda não há evento daquela
categoria. Para uma categoria nova, inclua o mesmo nome nos dois lugares.

Para remover ou substituir uma imagem, remova ou edite o registro em
`dados/eventos.js`. Antes de apagar um arquivo, pesquise seu nome no projeto:
ele pode ser usado em outra página.

## C. Como atualizar a agenda e o calendário escolar

### O que existe hoje

A seção “Agenda escolar” da Home exibe o calendário anual oficial em PDF; não há
uma agenda independente de provas, reuniões ou atividades semanais. Eventos
divulgados como cards são mantidos em `dados/eventos.js`.

O PDF ativo e seus dados estão separados:

- arquivo publicado: `pdfs-do-site/calendario-escolar2026.pdf`;
- ano, nome do arquivo, link oficial e identificação da resolução:
  `dados/calendario.js`;
- exibição na Home e atualização da referência oficial:
  `calendario.js`.

### Troca anual do PDF

1. Obtenha o calendário aprovado para o Colégio, junto à equipe responsável ou
   ao Núcleo Regional de Educação. Não monte datas manualmente.
2. Salve o PDF em `pdfs-do-site/`, com nome claro, como
   `calendario-escolar2027.pdf`.
3. Em `dados/calendario.js`, atualize `year`, `pdfFile`, `officialUrl` e
   `officialNote`. `officialUrl` deve apontar para a fonte oficial correta;
   `officialNote` identifica a resolução correspondente.
4. Mantenha o PDF anterior no projeto se ele ainda for útil como registro
   histórico. O site passará a exibir o arquivo configurado.
5. Execute `node ferramentas/validar-site.js` e confira a Home e a seção
   Calendário Escolar em `referencias/referencias.html` antes de publicar.

Na verificação de 30/10/2026, a [página oficial de Calendário Escolar da
SEED](https://www.educacao.pr.gov.br/Pagina/Calendario-Escolar) listava 2026
como o calendário mais recente. A [Instrução Normativa n.º 005/2026
DPGE/SEED](https://www.documentador.pr.gov.br/documentador/pub.do?action=d&emPg=true&uuid=%40gtf-escriba-seed%40d983f0e2-af6e-45f6-bb9d-0031c7cc8e07)
estabelece critérios para 2027 e cita a Resolução GS/SEED n.º 5.118/2026, mas o
projeto contém somente o PDF escolar de 2026. Antes de trocar o ano, confirme o
arquivo aprovado para esta escola e a fonte que deve ser citada. A norma geral
da SEED não substitui a confirmação do calendário da instituição.

## D. Como adicionar ou substituir imagens da Galeria

1. Salve a prévia otimizada e a versão ampliada na pasta correspondente à
   página ou projeto. A galeria atual usa imagens WebP e mantém os arquivos
   junto das demais imagens do projeto.
2. Abra `dados/galeria.js` e copie um objeto da lista `items`.
3. Atualize `preview`, `image`, `alt`, `caption`, `width` e `height`.
4. Confira o caminho de cada arquivo com `node ferramentas/validar-site.js`.

`preview` é o arquivo usado nas grades; `image` é aberto no lightbox da página
completa. O mesmo cadastro alimenta a Home e a página Galeria; os primeiros
itens também determinam a prévia da Home. Não altere `galeria/galeria.js` para
inserir uma foto: ele monta os cards a partir do cadastro.

Imagens de páginas específicas que não fazem parte da Galeria compartilhada
continuam referenciadas diretamente no HTML daquela página. Nesses casos,
troque o `src` no HTML e mantenha o texto alternativo `alt` atualizado.

## E. Como modificar textos, contatos e informações

- Home, agenda, contatos, avisos e Tour 360°: `index.html`.
- História, etapas de ensino e informações da escola: `sobrenos/sobrenos.html`.
- Cursos e áreas: páginas correspondentes em `ensino-medio/`.
- Robótica, RPG e clubes: páginas correspondentes em `projetos/`.
- AEE: `apoio/apoio.html`.
- Biblioteca: `biblioteca/biblioteca.html`.
- Privacidade e acessibilidade: `privacidade.html` e `acessibilidade.html`.
- Fontes e data de consulta das fontes: `referencias/referencias.html`.
- Telefone, e-mail, links do formulário e Google Maps: revise `index.html` e
  `acessibilidade.html`; esses serviços têm endereços externos próprios.
- Facebook: o link aparece nos rodapés que oferecem redes sociais. Se a página
  oficial mudar, pesquise `euzebiodamotapr` e atualize os links correspondentes.
- Ano do copyright: é preenchido automaticamente por `comum.js`; não é preciso
  trocar o ano em cada página.

Horários, disciplinas, turmas, nomes de professores e informações de cursos
estão no HTML da página que apresenta cada assunto. O projeto não possui um
cadastro central de turmas ou docentes.

## F. Como atualizar outras informações recorrentes

- **Avisos e informações da Home:** edite o trecho correspondente em
  `index.html`. Não há painel de notícias ou avisos separado.
- **Períodos de prova, férias e reuniões:** se estiverem no calendário anual,
  use o PDF oficial da escola. Para um evento que merece um card próprio, use
  `dados/eventos.js`.
- **Professores, cursos, turmas e disciplinas:** atualize a página HTML onde a
  informação aparece e procure outras referências com `rg` antes de concluir.
- **Documentos para baixar:** salve o arquivo em `pdfs-do-site/`, atualize o
  link na página correspondente e teste se o arquivo abre.
- **Referências legais e institucionais:** atualize os links e as datas de
  consulta em `referencias/referencias.html` depois de conferir a fonte atual.
- **Ano de copyright:** automático; o texto base fica no `span`
  `data-current-year` e a atualização é feita no começo de `comum.js`.
- **Novas páginas e mecanismo de busca:** atualize `sitemap.xml` e, quando o
  domínio mudar, também a linha `Sitemap:` de `robots.txt` e os metadados da
  página.

Não existe formulário próprio: a Pesquisa de opinião direciona para um
formulário externo do Google. O mapa e o Tour 360° também são iframes do Google;
o VLibras é carregado do serviço oficial. Mudanças nesses serviços dependem das
contas e links administrados fora deste repositório.

## G. Como verificar e publicar alterações

### Verificação local

O projeto não tem compilação nem pacote npm. Com o Node.js instalado, rode na
raiz:

```text
node ferramentas/validar-site.js
```

O verificador não instala nada nem modifica arquivos. Ele confere links locais,
âncoras, referências CSS, imagens e PDFs usados nos cadastros de Eventos,
Galeria e Calendário. Para conferir a sintaxe de um JavaScript editado, rode:

```text
node --check dados/eventos.js
```

Troque o caminho pelo arquivo alterado. Depois, abra a página no navegador e
confira a versão desktop e uma tela estreita de celular. Os iframes, fontes,
ícones, VLibras e o formulário dependem de serviços externos e podem não
funcionar sem internet.

### Página exibida quando a conexão falhar

`offline.html` é diferente de `404.html`: a página 404 avisa que o endereço
não existe; a página offline avisa que o navegador não conseguiu se conectar.
O arquivo `service-worker.js` guarda no navegador as páginas de reserva, os
estilos e a logo usados nelas. Quando um servidor responde com erro 404, o
service worker entrega a página 404 do projeto. Quando a navegação falha por
falta de conexão, mostra a página offline. A tela offline tem CSS próprio e
não depende de fontes ou bibliotecas externas.

A 404 personalizada depende de um servidor que entregue `404.html` ou de uma
visita anterior que tenha instalado o service worker. Abrir `index.html`
diretamente como arquivo (`file://`) e digitar um endereço inexistente no
navegador não testa essa função, pois nesse modo não há servidor para devolver
uma página 404. O GitHub Pages usa o `404.html` que está na raiz publicada.

O navegador só consegue guardar essa página depois que a pessoa visitar o site
com internet em um endereço HTTPS (como o GitHub Pages) ou em `localhost`.
Depois da primeira visita, pode levar alguns segundos para o navegador terminar
de preparar a cópia; abrir o site uma vez e navegar para outra página ajuda a
confirmar a instalação. O recurso oferece uma página de aviso, mas não salva o
site inteiro para navegação sem internet.

Se o texto ou o visual das páginas de reserva, CSS ou logo mudar, aumente o
sufixo de versão de `OFFLINE_CACHE` em `service-worker.js` (atualmente `v3`, por
exemplo, para `v4`). Isso faz o navegador guardar as cópias atualizadas. Não
remova o service worker nem mova `offline.html`, `404.html`, os estilos ou a
logo sem atualizar os caminhos correspondentes.

### Publicação

O repositório tem remoto GitHub e os arquivos `robots.txt` e `sitemap.xml`
apontam para GitHub Pages. Não há workflow de publicação em `.github/` nem
configuração de build neste projeto. Antes da primeira publicação por uma nova
pessoa, confirme em **Settings → Pages** qual branch e pasta estão configuradas.
Se o Pages estiver configurado para publicar a raiz da branch `main`, a
publicação ocorre depois de enviar as alterações para essa branch; não existe
um comando de deploy próprio neste repositório.

Procedimento recomendado:

1. Faça as alterações e rode o verificador.
2. Revise as mudanças para garantir que só os arquivos pretendidos foram
   alterados.
3. Abra as páginas modificadas no navegador e confira links, imagens e celular.
4. Envie as alterações ao GitHub conforme o fluxo de trabalho da equipe.
5. Depois que o Pages atualizar, abra o endereço público e confira a Home e as
   páginas alteradas.

## H. Problemas comuns

- **Imagem não aparece:** confira letras maiúsculas/minúsculas e o caminho
  completo desde a raiz em `dados/eventos.js` ou `dados/galeria.js`. Rode o
  verificador; ele informa o arquivo ausente.
- **Evento não aparece na Home:** confirme que o registro está dentro de
  `items`, que não há erro de vírgula e que o evento está entre os quatro
  primeiros se deve aparecer na vitrine inicial.
- **Filtro de categoria não aparece:** preencha `categoria` no evento e
  confirme se a opção deve existir em `siteEventCategories` em
  `dados/eventos.js`.
- **Calendário mostra o PDF antigo:** confira `year`, `pdfFile` e `officialUrl`
  em `dados/calendario.js`; confirme que o PDF existe em `pdfs-do-site/` e
  atualize a página sem cache.
- **Link abre página não encontrada:** confira o caminho relativo à pasta do
  HTML e rode `node ferramentas/validar-site.js`.
- **Alteração não aparece após publicar:** confira se o envio terminou, atualize
  sem cache e veja se os endereços dos arquivos têm a versão nova. Não remova os
  parâmetros `?v=` usados para renovar o cache.
- **Fonte, ícone, mapa ou VLibras não carrega:** verifique a conexão e a
  disponibilidade do serviço externo. Não são arquivos hospedados junto do
  site.

## I. Cuidados importantes

- Edite dados em `dados/`, não nos renderizadores `eventos/eventos.js`,
  `eventos/eventos-page.js`, `galeria/galeria.js` ou `calendario.js`, a menos que
  seja necessário mudar o comportamento.
- Os arquivos em `comum.js`, `style.css` e `paginas.css` afetam muitas páginas.
  Faça mudanças pequenas e confira páginas diferentes antes de publicar.
- Não apague uma imagem só porque ela deixou de aparecer em uma página. Primeiro
  procure seu nome no projeto: ela pode estar sendo usada em outro lugar.
- Não substitua o PDF por datas copiadas de um calendário genérico. Use o
  calendário aprovado para a escola e mantenha a referência oficial.
- O layout, os textos e as listas de professores/cursos ainda são páginas HTML
  próprias. Atualizações nesses conteúdos exigem editar o HTML correspondente.
- Os dados editáveis estão em arquivos `.js` simples para funcionarem também
  quando o projeto é aberto sem servidor local. Copie um registro existente e
  troque somente os valores, preservando aspas, vírgulas e chaves.

### Rotina periódica sugerida

- **Antes do início de cada ano letivo:** obter e trocar o PDF aprovado em
  `pdfs-do-site/`, atualizar `dados/calendario.js`, revisar links e referências.
- **Quando houver atividade a divulgar:** atualizar `dados/eventos.js` e incluir
  as imagens em `eventos/`.
- **Após atividades com novas fotos:** atualizar `dados/galeria.js` e confirmar
  que prévia e imagem ampliada existem.
- **Quando houver mudança institucional:** rever contatos, horários, cursos,
  quadro de professores, avisos e redes sociais nas páginas indicadas acima.
- **Depois de mudanças:** rodar `node ferramentas/validar-site.js`, conferir a
  página no navegador e revisar o sitemap se uma página foi criada ou removida.

## Recomendações futuras (não implementadas)

- Se a mesma informação institucional continuar mudando em muitas páginas,
  considerar um pequeno processo de geração de HTML a partir de modelos. Isso
  exigiria uma etapa de publicação nova, por isso não foi introduzida agora.
- Manter uma cópia de segurança dos PDFs anuais aprovados e dos arquivos
  originais de fotografias fora da pasta publicada.
- Confirmar periodicamente os links externos, especialmente formulário, Google
  Maps, Facebook, fontes oficiais e VLibras.
