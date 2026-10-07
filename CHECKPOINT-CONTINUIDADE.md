# Checkpoint de continuidade — Site do Colégio Estadual Euzébio da Mota

Data do checkpoint: 31 de agosto de 2026  
Projeto: `SITEDOEUZEBIO`  
Diretório absoluto: `C:\Users\rafae\OneDrive\Desktop\SITEDOEUZEBIO`

## 1. Objetivo principal

O projeto é um site institucional estático do Colégio Estadual Euzébio da Mota, construído principalmente com HTML, CSS e JavaScript. O trabalho desta conversa concentrou-se em revisar visualmente as páginas novas, padronizar banners e rodapés, corrigir espaçamentos, definir temas laranja/verde por página, remover textos que o usuário não queria mais e criar a nova página da Biblioteca.

O objetivo visual estabelecido é manter todas as páginas coerentes com o `index.html`, sobretudo em:

- largura e distribuição dos footers;
- estrutura dos banners internos;
- alinhamento e posição dos títulos;
- espaçamento entre seções e footer;
- cores de destaque consistentes;
- comportamento responsivo;
- ausência de blocos “Última atualização”.

Estado atual: as últimas solicitações foram implementadas. Não existe uma tarefa ativa incompleta. O último ajuste concluído foi substituir a paleta azul da Biblioteca pelo laranja institucional, aproximar sua tipografia, superfícies e cards do padrão visual das demais páginas e aplicar o mesmo tema à chamada da Biblioteca na home.

## 2. Contexto importante

### Estrutura e tecnologia

- Site estático, sem framework ou etapa de build identificada.
- CSS global principal: `style.css`.
- CSS compartilhado pelas páginas internas novas: `paginas.css`, que importa `style.css`.
- CSS de Ensino Técnico: `ensino-medio/ensinomedio.css`, que também importa `../style.css`.
- CSS de Referências: `referencias/referencias.css`.
- CSS exclusivo da Biblioteca: `biblioteca/biblioteca.css`, que importa `../style.css`.
- JavaScript compartilhado: `comum.js`.
- Fontes: Archivo Black e Montserrat.
- Ícones: Font Awesome.

### Preferências visuais definidas pelo usuário

- O footer das páginas novas deve ter a mesma largura e estrutura do footer do `index.html`.
- Privacidade, Referências e Acessibilidade são exceções: preservar a logo e ajustar apenas a distribuição/espaçamento dos outros elementos.
- As páginas detalhadas com somente o título no banner devem usar `top: 60%` e centralização óptica.
- Administração, Alimentos, Exatas, Humanas, Desenvolvimento de Sistemas, Gabriele e Marlene seguem atualmente o padrão de título único centralizado.
- Alimentos e Humanas usam tema laranja.
- Gabriele e Marlene usam tema azul, inclusive no footer e nos hovers dos cards.
- A Biblioteca usa o tema laranja institucional. Não reintroduzir a antiga paleta azul.
- O hero da Biblioteca não deve exibir o texto vertical “Colégio Estadual / Euzébio da Mota” nem a linha vertical decorativa que existiam na primeira versão.
- Os rótulos de `.detail-facts` como “Área”, “Modalidade”, “Duração e turno” e “Matrícula” são elementos `<dt>`, não `<h2>`.
- Não deve existir texto “Última atualização” em nenhuma página.
- Remover elementos diretamente do HTML, sem deixar blocos vazios ou margens residuais.

### Worktree e segurança

O repositório já estava amplamente modificado antes e durante esta conversa. Há muitos arquivos modificados/adicionados e muitas imagens originais marcadas como removidas. Essas alterações pertencem ao usuário e não devem ser revertidas.

Regras importantes:

- Não usar `git reset --hard`, `git checkout --` ou qualquer restauração ampla.
- Não restaurar as imagens JPG/PNG marcadas como removidas sem pedido explícito.
- Não descartar arquivos adicionados ou mudanças não relacionadas.
- Antes de editar, executar `git status --short` e inspecionar o trecho atual do arquivo.
- Usar `apply_patch` para alterações manuais.

## 3. O que já foi feito

### 3.1 Página Desenvolvimento de Sistemas

Arquivo: `ensino-medio/desenvolvimento-de-sistemas.html`

- O banner contém apenas o título `Desenvolvimento de Sistemas`.
- O título usa `detail-hero-content-centered`.
- O `<body>` contém:

  ```html
  class="detail-page systems-detail-page title-only-detail-page"
  ```

- A posição vertical é controlada pelo padrão compartilhado `top: 60%`.
- A seção de próximos passos usa `detail-path-spaced`.
- O bloco de última atualização não existe.
- O footer foi padronizado com o do index, incluindo Referências e Redes sociais.

### 3.2 Página Administração

Arquivo: `ensino-medio/administracao.html`

- Removidos do banner:
  - “Ensino Técnico”;
  - “Gestão, liderança e visão estratégica para compreender o funcionamento das organizações”.
- Mantido apenas o título `Administração`.
- Título centralizado e posicionado em `top: 60%`.
- Aplicada compensação óptica responsiva para a direita.
- O `<body>` contém:

  ```html
  class="detail-page administration-detail-page title-only-detail-page"
  ```

- Removido “Última atualização: 26 de agosto de 2026”.
- A seção “Próximos passos / Como saber mais” recebeu `detail-path-spaced`.
- Footer padronizado com o index.

### 3.3 Página Alimentos

Arquivo: `ensino-medio/alimentos.html`

- Tema verde removido; a página usa o tema laranja padrão.
- Removidos do banner:
  - “Ensino Técnico”;
  - “Conhecimento aplicado à produção, à conservação, à segurança e à qualidade dos alimentos.”
- Mantido apenas o título `Alimentos`.
- Título centralizado com compensação óptica.
- O `<body>` contém:

  ```html
  class="detail-page food-detail-page title-only-detail-page"
  ```

- Removido o bloco de última atualização.
- A seção “Próximos passos / Como saber mais” recebeu `detail-path-spaced`, corrigindo o `padding-top: 0` anterior.
- Footer padronizado com o index.

### 3.4 Ensino Regular

Arquivo: `ensino-medio/ensinoregular.html`

- Removido “Ensino Médio” acima do título do banner.
- O link “Sobre” do header foi renomeado para “Ensino Regular”, mantendo `href="#sobre"`.
- Removido o bloco de última atualização.
- O espaço/faixa entre os cards de cursos e o footer foi eliminado.
- O footer encosta visualmente na seção final.

Estilos relevantes em `paginas.css`:

```css
.regular-areas.section {
  padding-bottom: 64px;
}
```

Existe ainda um seletor `.regular-page .site-updated` sem uso, pois o elemento foi removido. Ele não cria espaço, mas pode ser limpo futuramente.

### 3.5 Ensino Técnico

Arquivos:

- `ensino-medio/ensinotecnico.html`
- `ensino-medio/ensinomedio.css`

Alterações:

- Removido “Conheça o curso” dos três cards:
  - Desenvolvimento de Sistemas;
  - Administração;
  - Alimentos.
- Removido o bloco de última atualização.
- Corrigido o espaço entre a seção Cursos e o footer.
- Reduzido o `padding-bottom` da seção:

  ```css
  .technical-courses.section {
    padding-bottom: 64px;
  }
  ```

- O footer agora encosta visualmente na seção de cursos.
- Existe ainda um seletor `.technical-page .site-updated` sem uso; não causa espaço.

### 3.6 Página Exatas

Arquivo: `ensino-medio/exatas.html`

- Removidos do banner “Ensino Regular” e a descrição auxiliar.
- Mantido somente `Exatas`.
- Título centralizado, em `top: 60%`, com compensação óptica.
- O `<body>` usa `detail-page title-only-detail-page`.
- Removido o bloco de última atualização.
- A seção final recebeu `detail-path-spaced`.
- Footer padronizado com o index.
- Verificação visual em desktop concluída com sucesso.

### 3.7 Página Humanas

Arquivo: `ensino-medio/humanas.html`

- Removidos do banner “Ensino Regular” e a descrição auxiliar.
- Mantido somente `Humanas`.
- Título centralizado, em `top: 60%`, com compensação óptica.
- Tema verde removido; tudo usa o laranja padrão.
- O `<body>` atual é:

  ```html
  class="detail-page title-only-detail-page"
  ```

- Removido o bloco de última atualização.
- A seção final recebeu `detail-path-spaced`.
- Footer padronizado com o index.

### 3.8 Páginas Gabriele e Marlene

Arquivos:

- `projetos/clube-gabrielle.html`
- `projetos/clube-marlene.html`

Ambas usam:

```html
class="detail-page detail-blue title-only-detail-page"
```

Alterações compartilhadas:

- Removidos o eyebrow “Clube de Ciências” e a descrição auxiliar dos banners.
- Mantidos somente os títulos `Professora Gabriele` e `Professora Marlene`.
- Títulos centralizados, em `top: 60%`, com compensação óptica.
- Removidos os blocos de última atualização.
- Seções de participação receberam `detail-path-spaced`.
- Footers padronizados com o index.
- Tema azul aplicado a:
  - títulos e palavras em destaque;
  - eyebrows internos;
  - rótulos de `.detail-facts`;
  - ícones, números, bordas e botões;
  - hover da navegação;
  - hover dos cards;
  - foco de acessibilidade;
  - títulos e links do footer;
  - hover/active do botão de retorno ao topo do footer.

Estilos exclusivos ficam em `paginas.css`, sob o comentário:

```css
/* Tema azul exclusivo dos clubes das professoras Gabriele e Marlene. */
```

Seletores principais:

```css
.detail-blue .eyebrow,
.detail-blue .detail-facts dt

.detail-blue .nav-links a:hover
.detail-blue :focus-visible
.detail-blue .subject-card:hover
.detail-blue .footer-main h3
.detail-blue .footer-main a:hover
.detail-blue .footer-top:hover
.detail-blue .footer-top:active
```

A página da Marlene foi renderizada integralmente em desktop após a alteração. Não havia laranja residual visível. As duas imagens de hero usadas por Gabriele e Marlene existem no disco.

### 3.9 Cards de disciplinas

Arquivo: `paginas.css`

A seção de disciplinas foi compactada globalmente:

- quatro colunas no desktop;
- duas colunas em telas menores, inclusive celular, para evitar uma lista vertical muito alta;
- cards com altura e padding reduzidos;
- seção com padding vertical menor;
- headings com margem inferior reduzida.

Hover padrão dos cards:

- fundo laranja;
- texto branco;
- número/ícone em cor escura;
- sombra e deslocamento para cima.

Nas páginas `detail-blue` (Gabriele e Marlene), o hover é sobrescrito para azul.

### 3.10 Rótulos de informações rápidas

Arquivo: `paginas.css`

O seletor global abaixo deixa “Área”, “Modalidade”, “Duração e turno”, “Matrícula” etc. em laranja:

```css
.detail-facts dt {
  color: var(--warm);
}
```

Gabriele e Marlene sobrescrevem esses rótulos para `var(--club-blue)`.

### 3.11 Footers

O footer base vem de `style.css`:

```css
.footer-main {
  width: min(1180px, calc(100% - 48px));
  grid-template-columns: 1.1fr 1.25fr 1fr 1fr 1.4fr;
  gap: 35px;
}
```

Páginas novas que receberam a mesma estrutura de cinco colunas do index:

- Desenvolvimento de Sistemas;
- Administração;
- Alimentos;
- Exatas;
- Humanas;
- Clube Gabriele;
- Clube Marlene.

Foram adicionados os blocos `footer-reference` e “Redes sociais” onde faltavam.

Exceções:

- Privacidade e Acessibilidade usam uma grade especial em `paginas.css`.
- Referências usa grade equivalente em `referencias/referencias.css`.
- A logo não foi redimensionada nem reposicionada nesses três casos.
- O separador após a logo foi reduzido de `0.35fr` para `0.12fr`.
- Em desktop, a grade especial usa:

  ```css
  grid-template-columns: 1.1fr 0.12fr 1.25fr 1fr 1.4fr;
  column-gap: 42px;
  ```

- O primeiro bloco textual começa na coluna 3; os seguintes nas colunas 4 e 5.
- Em telas até 620 px, o botão de retorno fica na linha 5.

### 3.12 Privacidade

Arquivos:

- `privacidade.html`
- `paginas.css`

Todo o fundo da área principal está branco, inclusive as faixas laterais:

```css
.privacy-page main,
.privacy-page .internal-main {
  background: var(--white);
}
```

O header de título e o footer continuam escuros, seguindo o padrão das páginas legais. O bloco de última atualização foi removido.

### 3.13 Remoção global de “Última atualização”

Todos os blocos de “Última atualização” foram removidos diretamente do HTML. Uma busca final por `Última atualização` não retornou ocorrências.

Arquivos dos quais esses blocos foram removidos durante esta conversa:

- `index.html`;
- `acessibilidade.html`;
- `privacidade.html`;
- `referencias/referencias.html`;
- `sobrenos/sobrenos.html`;
- `ensino-medio/ensinotecnico.html`;
- `ensino-medio/ensinoregular.html`;
- `ensino-medio/administracao.html`;
- `ensino-medio/alimentos.html`;
- `ensino-medio/exatas.html`;
- `ensino-medio/humanas.html`;
- `projetos/clube-de-ciencias.html`;
- `projetos/clube-gabrielle.html`;
- `projetos/clube-marlene.html`;
- `projetos/rpg.html`;
- `projetos/robotica.html`.

As frases “Recursos consultados em 26 de agosto de 2026”, “Fontes consultadas...” e “Documentos e serviços consultados...” de Referências foram preservadas, pois são datas de consulta das fontes, não avisos de atualização.

### 3.14 Biblioteca

Arquivos criados:

- `biblioteca/biblioteca.html`;
- `biblioteca/biblioteca.css`;
- cinco imagens WebP em `biblioteca/imgs-biblioteca/`.

A página contém:

- hero fotográfico com navegação própria, título, texto e link para o conteúdo;
- apresentação da Biblioteca;
- bloco visual “Aprender também é explorar”;
- três cards sobre acervo, estudo e descoberta;
- galeria com quatro fotografias e lightbox fornecido por `comum.js`;
- orientações de convivência e cuidado;
- footer de cinco colunas igual ao padrão do `index.html`.

Decisões visuais finais:

- a página usa o laranja institucional (`var(--warm)`, `var(--warm-light)` e `var(--warm-soft)`) em títulos, ícones, links, hovers e footer;
- fundos escuros usam `var(--ink)`, seguindo o verde-acinzentado das outras páginas;
- títulos internos usam Montserrat em peso 800, com a mesma linguagem tipográfica das páginas existentes;
- cards têm fundo branco, borda, sombra, `border-radius` e hover laranja com texto branco;
- a galeria usa a superfície clara `#eef0ec` com um radial laranja discreto;
- a paleta azul da primeira versão foi completamente removida do CSS;
- o hero não contém mais o texto vertical “Colégio Estadual / Euzébio da Mota” nem a linha vertical decorativa.

Imagens finais, todas em WebP com exatamente `600 × 399`:

- `biblioteca-acervo.webp`;
- `biblioteca-atendimento.webp`;
- `biblioteca-espaco-de-leitura.webp`;
- `biblioteca-globo.webp`;
- `biblioteca-livros.webp`.

Tratamento das imagens:

- as cinco fotografias originais tinham `4912 × 3264` em JPG;
- foram recortadas, redimensionadas e exportadas com o GIMP 3.2.4;
- `_DSC3945.JPG` tinha corrupção visual na faixa inferior; apenas a área íntegra foi aproveitada em `biblioteca-atendimento.webp`;
- `biblioteca-espaco-de-leitura.webp` foi escolhida como hero;
- os cinco JPGs originais foram removidos após validação direta das dimensões no GIMP;
- a pasta final contém apenas os cinco WebPs organizados com nomes descritivos.

Integração com a home:

- `index.html` recebeu uma seção `.home-library` imediatamente após o Tour 360° e antes de Contato;
- a seção usa `biblioteca-espaco-de-leitura.webp`, título, texto e botão para `biblioteca/biblioteca.html`;
- os estilos ficam em `style.css`;
- o bloco usa imagem à esquerda e painel `var(--ink)` à direita no desktop;
- ícone, eyebrow e trecho destacado do título usam laranja;
- no celular, imagem e conteúdo são empilhados;
- o container usa `border-radius: var(--radius)`, `box-shadow: var(--shadow)` e overflow oculto.

Validações executadas:

- página da Biblioteca renderizada integralmente em desktop de 1440 px;
- hero da Biblioteca validado em viewport real de 390 px por meio de iframe de diagnóstico;
- chamada da Biblioteca na home validada em desktop e em viewport real de 390 px;
- referências locais de HTML e CSS verificadas;
- todos os arquivos novos e alterados passaram pelo Prettier 3.6.2;
- `git diff --check` não encontrou erros de whitespace, somente avisos esperados de LF/CRLF.

## 4. Estado atual

Não há implementação em andamento. O último pedido concluído foi:

> Mudar as cores da Biblioteca e da chamada criada no `index.html` para o laranja já utilizado nas outras páginas e aproximar a página do estilo visual existente.

Resultado atual:

- a Biblioteca usa somente a paleta laranja institucional como destaque;
- não restam nomes de variáveis ou valores da antiga paleta azul em `biblioteca.css` ou no bloco `.home-library` de `style.css`;
- títulos internos, cards, superfícies e fundos escuros foram alinhados ao estilo das demais páginas;
- a chamada da Biblioteca aparece abaixo do Tour 360° na home e seu botão abre `biblioteca/biblioteca.html`;
- o hero da Biblioteca permanece sem o texto lateral e sem a linha vertical removidos a pedido do usuário;
- as versões desktop e celular foram renderizadas e revisadas;
- `git diff --check` não encontrou erros de whitespace, apenas avisos esperados de conversão LF para CRLF;
- os avisos do Chrome/Edge sobre criptografia, registro e geolocalização do Windows ocorreram durante screenshots headless, mas não são erros do site.

Capturas temporárias de validação foram gravadas em `C:\Users\rafae\AppData\Local\Temp`. Elas não fazem parte do projeto.

## 5. Arquivos e código envolvidos

### CSS principal

- `style.css`: estilos globais, footer base, navegação, botões, cards genéricos e responsividade global. Já estava modificado no worktree; preservar alterações existentes.
- `paginas.css`: estilos das páginas internas detalhadas, temas, disciplinas, footers legais, Privacidade e Ensino Regular. É o arquivo central dos últimos ajustes.
- `ensino-medio/ensinomedio.css`: página de Ensino Técnico; contém a correção do espaço final e o layout dos cards técnicos.
- `referencias/referencias.css`: layout da página Referências e grade especial do footer.
- `projetos/projetos.css`: estilos das páginas RPG, Robótica e Clube de Ciências; foi consultado, mas o tema dos clubes novos está em `paginas.css`.
- `sobrenos/sobrenos.css`: estilos da página Sobre Nós; já contém outras alterações do projeto.
- `biblioteca/biblioteca.css`: estilos exclusivos da Biblioteca, incluindo hero, apresentação, cards, galeria, orientações e responsividade. Importa `../style.css`.

### Páginas principais trabalhadas

- `index.html`: referência estrutural do footer e página principal.
- `ensino-medio/ensinotecnico.html`: listagem dos cursos técnicos.
- `ensino-medio/ensinoregular.html`: apresentação do Ensino Regular e cards Exatas/Humanas.
- `ensino-medio/desenvolvimento-de-sistemas.html`: curso detalhado.
- `ensino-medio/administracao.html`: curso detalhado.
- `ensino-medio/alimentos.html`: curso detalhado.
- `ensino-medio/exatas.html`: área detalhada.
- `ensino-medio/humanas.html`: área detalhada.
- `projetos/clube-gabriele.html`: clube detalhado com tema azul.
- `projetos/clube-marlene.html`: clube detalhado com tema azul.
- `privacidade.html`: página legal com fundo principal branco.
- `acessibilidade.html`: página legal com footer especial.
- `referencias/referencias.html`: referências e créditos.
- `biblioteca/biblioteca.html`: nova página da Biblioteca com tema laranja e galeria ampliável.

### Classes e seletores essenciais

- `.detail-page`: base das páginas detalhadas.
- `.title-only-detail-page`: posiciona banners de título único em `top: 60%` e aplica compensação óptica.
- `.detail-blue`: tema azul atualmente exclusivo de Gabriele e Marlene.
- `.detail-hero-content-centered`: centralização horizontal do conteúdo do banner.
- `.detail-path-spaced`: adiciona espaço antes das seções finais.
- `.detail-facts`: caixa de informações rápidas.
- `.detail-facts dt`: rótulos Área/Modalidade/etc.
- `.detail-subjects`, `.subject-grid`, `.subject-card`: seção e cards de disciplinas/estrutura.
- `.technical-courses.section`: seção final do Ensino Técnico.
- `.regular-areas.section`: seção final do Ensino Regular.
- `.footer-main`: grade e largura do footer.
- `.footer-reference`: coluna de referências.
- `.footer-top`: botão de retorno ao topo.
- `.library-page`: escopo da página da Biblioteca e de suas variáveis de tema.
- `.library-hero`, `.library-hero-content`: hero fotográfico da Biblioteca.
- `.library-card-grid`, `.library-card`: cards de conteúdo com hover laranja.
- `.library-gallery`, `.library-gallery-item`: galeria de fotografias com lightbox.
- `.library-guidance`: seção escura de orientações.
- `.home-library`: chamada da Biblioteca inserida na home abaixo do Tour 360°.

Código central de centralização atual:

```css
.title-only-detail-page .detail-hero-content {
  top: 60%;
}

.title-only-detail-page .detail-hero-content h1 {
  transform: translateX(clamp(8px, 2.4vw, 34px));
}
```

A compensação existe porque Archivo Black com `letter-spacing: -0.06em` parecia aproximadamente 34 px à esquerda mesmo com a caixa matematicamente centralizada.

## 6. Regras e restrições

1. Preservar o worktree sujo e todas as mudanças do usuário.
2. Não restaurar imagens originais removidas nem desfazer a troca para arquivos otimizados sem autorização.
3. Não alterar a logo nos footers de Privacidade, Referências e Acessibilidade.
4. Manter o footer das demais páginas novas igual ao index: cinco colunas no desktop e mesma largura global.
5. Manter Privacidade com todo o fundo do `<main>` branco.
6. Manter Alimentos e Humanas em laranja.
7. Manter Gabriele e Marlene em azul, inclusive cards, hovers e footer.
8. Não reintroduzir blocos “Última atualização”.
9. Não confundir `<dt>` de `.detail-facts` com `<h2>`.
10. Ao centralizar títulos de banners detalhados, usar o padrão compartilhado e não criar offsets isolados sem verificar visualmente.
11. Não remover datas de consulta das fontes na página Referências, salvo solicitação explícita.
12. Usar `apply_patch` para edições manuais e `rg` para buscas.
13. Validar alterações relevantes com `git diff --check` e, quando forem visuais, renderizar em desktop e celular.
14. Manter a Biblioteca no tema laranja institucional e não restaurar sua antiga paleta azul.
15. Manter o hero da Biblioteca sem texto vertical lateral e sem linha vertical decorativa.
16. Não restaurar os JPGs originais da Biblioteca sem solicitação explícita; os WebPs de `600 × 399` são os arquivos finais em uso.
17. Manter a chamada `.home-library` abaixo do Tour 360° e antes da seção Contato, salvo novo pedido do usuário.

## 7. Pendências e próximos passos

Não existe pendência funcional solicitada pelo usuário. Os próximos passos dependem do próximo pedido.

### Primeira ação ao retomar

1. Abrir este checkpoint.
2. Executar `git status --short` no diretório do projeto para confirmar que o estado não mudou.
3. Ler a nova solicitação do usuário e alterar somente os arquivos necessários, preservando todo o trabalho existente.

### Auditorias opcionais recomendadas, se o usuário pedir revisão geral

1. Fazer regressão responsiva em 390 px, 800 px e 1440 px para todas as páginas com `.title-only-detail-page`.
2. Verificar especialmente `Desenvolvimento de Sistemas` em celular. Uma captura antiga, anterior à padronização final, mostrou quebra agressiva da palavra “Desenvolvimento” e possível recorte lateral. Isso não foi solicitado nem corrigido definitivamente.
3. Testar visualmente o estado `:hover` dos cards de Gabriele e Marlene com automação de navegador; a regra CSS foi verificada, mas a captura final não simulou o ponteiro sobre os cards.
4. Remover CSS sem uso relacionado a `.site-updated`, `.detail-updated`, `.project-updated`, `.about-updated` e `.references-updated`, somente se houver autorização para limpeza. Esses seletores não criam espaço atualmente.
5. Verificar links sociais `href="#"`, que continuam como placeholders.
6. Revisar os textos temporários/Lorem ipsum dos clubes quando o conteúdo oficial estiver disponível.

## 8. Informações que não podem ser perdidas

- O usuário percebe desalinhamento óptico mesmo quando `text-align: center` estava correto; por isso existe o `translateX(clamp(8px, 2.4vw, 34px))`.
- O padrão vertical desejado para os banners detalhados de título único é `top: 60%`.
- A classe `detail-blue` aparece atualmente somente em Gabriele e Marlene. Os overrides azuis foram escritos usando essa classe.
- O hover padrão de `.subject-card` é laranja; `.detail-blue .subject-card:hover` é obrigatoriamente azul.
- No hover dos cards, o texto fica branco e o número/ícone continua escuro, conforme solicitação anterior.
- A seção de disciplinas usa quatro colunas no desktop e duas em telas menores para caber melhor após clicar no link do header.
- A ausência de “Última atualização” foi verificada com busca global no HTML.
- Ensino Técnico e Ensino Regular não têm mais a faixa de atualização entre a seção final e o footer.
- `Referências`, `Privacidade` e `Acessibilidade` não usam exatamente a mesma composição de conteúdo do index; elas usam uma grade especial para distribuir os blocos sem mexer na logo.
- O espaçador dessas grades especiais é `0.12fr`, após ter sido reduzido a pedido do usuário.
- O fundo branco de Privacidade deve ser aplicado ao `main` inteiro e ao `.internal-main`; aplicar apenas ao container deixa faixas laterais acinzentadas.
- As imagens de hero de Gabriele e Marlene foram confirmadas no disco.
- A Biblioteca é acessada por `biblioteca/biblioteca.html` e usa `biblioteca/biblioteca.css`.
- A chamada da Biblioteca na home está entre o Tour 360° e Contato; o botão deve continuar apontando para `biblioteca/biblioteca.html`.
- A identidade visual final da Biblioteca é laranja, com fundos `var(--ink)` e superfícies claras alinhadas ao restante do site.
- O azul visto nas fotografias pertence ao ambiente físico fotografado; não existe mais paleta azul no CSS da Biblioteca.
- As cinco imagens finais da Biblioteca são WebP `600 × 399`; os JPGs originais foram removidos após validação no GIMP.
- `biblioteca-atendimento.webp` usa somente a parte íntegra da fotografia original, pois a faixa inferior do JPG estava corrompida.
- O hero da Biblioteca não deve recuperar o texto lateral nem a linha vertical removidos pelo usuário.
- Warnings de LF/CRLF são recorrentes no PowerShell/Git e não indicam falha de CSS ou HTML.

## INSTRUÇÃO PARA A IA QUE RECEBER ESTE DOCUMENTO

Este documento representa o estado do trabalho no momento em que a conversa anterior foi encerrada. Considere todas as informações, decisões, regras, arquivos e pendências descritas aqui como contexto de continuidade. Não reinicie o projeto nem refaça etapas já concluídas sem necessidade. Continue a partir do ponto indicado em “Estado atual” e “Pendências e próximos passos”. Caso novas informações fornecidas pelo usuário entrem em conflito com este documento, priorize sempre as instruções mais recentes do usuário.

## 9. Atualizacao — qualidade e responsividade das imagens

Data: 8 de setembro de 2026

### O que foi feito

- Identificada a causa do desfoque: imagens de 600 px estavam sendo ampliadas em monitores Full HD e TVs.
- Recuperadas fotos originais em alta resolucao do historico do projeto e exportadas para WebP otimizado.
- Criadas versoes de ate 3200 x 2126 para banners/herois e de 1600 px para conteudos e galerias.
- Adicionados srcset em imagens principais para o navegador escolher uma versao leve no celular e nitida em telas grandes.
- Atualizados os fundos responsivos dos herois da Home, Ensino, Projetos, RPG, Robotica, Sobre Nos e Biblioteca.
- Criadas versoes de maior resolucao para as cinco imagens da Biblioteca.
- Home e Biblioteca foram conferidas em 1920 x 1080; a Home tambem em 3840 x 2160.
- A verificacao confirmou que as referencias locais de imagens, CSS e links apontam para arquivos existentes.

### Pendencias

- Fazer uma revisao visual completa de todas as paginas em celular, Full HD e TV, caso necessario.
- Se novas fotos originais da Biblioteca forem disponibilizadas, avaliar a substituicao das versoes restauradas atuais.
- Capturas temporarias ficam em C:\\Users\\rafae\\AppData\\Local\\Temp e nao fazem parte do projeto.
- Verificar a velocidade do site (pois a animação de scrollar esta travando muito)

## 10. Atualização — desempenho da rolagem

Data: 9 de setembro de 2026

### O que foi feito

- Investigada a pendência de travamentos durante a rolagem, com medição automatizada no Edge/Chromium em 1920 × 1080 e 390 × 844.
- Identificado que, em Full HD, três fundos da home mudavam diretamente de aproximadamente 1000 px para 3200 px. Cards também tinham intervalos grandes entre as opções de 600 px e 3200 px, elevando o uso de memória após a melhoria de nitidez.
- Criadas versões intermediárias WebP de 1600 × 1063/1064 para conteúdo e de 1920 × 1276 para Full HD. Os WebPs de 3200 × 2126 foram preservados para telas 4K.
- Atualizados `srcset`, `sizes` e o preload da home para o navegador escolher a menor imagem adequada à área ocupada.
- Em `style.css`, os fundos de 1920 px são usados entre 1600 e 2559 px; os fundos de 3200 px passam a ser usados somente a partir de 2560 px.
- Em larguras intermediárias, a partir de 1200 px, os fundos usam as novas versões de 1600 px.
- A mesma separação 1920/3200 foi aplicada aos heróis de Clube de Ciências, RPG e Robótica em `projetos/projetos.css`.
- O desfoque compartilhado das superfícies de vidro foi reduzido de 30 px/145% para 14 px/125%, preservando o efeito com menor custo de composição.
- A animação `.reveal` foi reduzida de 0,7 s/24 px para 0,5 s/18 px e passou a usar `translate3d`.
- Em `comum.js`, entradas visíveis e efeitos de ponteiro/tilt passaram a ser agrupados com `requestAnimationFrame`, limitando atualizações ao ritmo de renderização do navegador.

### Validação

- Na medição Full HD da home, a rolagem ficou em 60 fps, sem quadros acima de 33 ms e com pior quadro de 16,8 ms. Antes do ajuste, havia quadro de 49,9 ms.
- O navegador confirmou o uso dos três fundos de 1920 × 1276 em Full HD e das versões menores no celular.
- Capturas do topo da home foram revisadas em 1920 × 1080 e 390 × 844.
- Todas as referências locais de HTML e CSS apontam para arquivos existentes.
- `node --check comum.js` e `git diff --check` passaram; permanecem apenas os avisos esperados de LF/CRLF.

### Observação futura

- Os dois mapas do Google e o visualizador local de PDF continuam como iframes com `loading="lazy"`. Em máquinas mais fracas, o carregamento desses componentes externos pode causar uma pausa isolada ao chegar perto deles. Alterar para carregamento somente após clique é uma opção futura, mas muda a experiência visual e não foi aplicado nesta etapa.

## 11. Atualização — menu móvel e grafia de Gabriele

Data: 9 de setembro de 2026

### O que foi feito

- Corrigida a ordem de empilhamento do cabeçalho compartilhado em `style.css`.
- A regra base de `.topbar` passou a usar `position: relative` e `z-index: 20`.
- Com isso, quando o menu responsivo é aberto, o painel de navegação permanece visualmente acima do título do hero, inclusive na home sobre “Colégio Estadual Euzébio da Mota”.
- A declaração duplicada de `position: relative` que existia mais abaixo em `style.css` foi removida, mantendo a configuração da `.topbar` centralizada em uma única regra.

### Validação

- O menu aberto foi testado no Edge/Chromium com viewport real de `390 × 844`.
- O teste confirmou que o menu sobrepõe a região do título na camada correta e recebe a interação nessa área.
- A página permaneceu sem overflow horizontal: largura do documento e do viewport iguais a `390 px`.
- `node --check comum.js` e `git diff --check` passaram; permanecem somente os avisos esperados de LF/CRLF.

### Grafia de Gabriele

- A correção de “Gabrielle” para “Gabriele” já estava concluída no código do site e não precisou ser refeita.
- O arquivo atual é `projetos/clube-gabriele.html`.
- Links internos, textos, classe de página, URL canônica e `sitemap.xml` usam “Gabriele”.
- Uma busca nos arquivos HTML, CSS, JavaScript e XML não encontrou ocorrências restantes de “Gabrielle”.

### Estado atual

- O ajuste solicitado está concluído e não há implementação ativa pendente desta etapa.

## 12. Atualização — consistência visual e conteúdo definitivo

Data: 10 de setembro de 2026

### O que foi feito

- Revisadas visualmente as 20 páginas do site em desktop (`1440 × 1000`) e celular (`390 × 844`), preservando as variações de cor intencionais.
- Corrigidos os títulos longos das páginas de Desenvolvimento de Sistemas, Administração e dos clubes para impedir cortes e quebras no meio de palavras em telas pequenas.
- Removidos textos `Lorem ipsum`, avisos de conteúdo temporário e painéis de “em atualização” em Sobre Nós, Humanas, Alimentos, RPG, Robótica, Gabriele e Marlene; informações variáveis agora orientam a consulta à equipe do colégio sem inventar dados.
- Substituída a imagem de computadores da página de Alimentos por uma composição editorial temática em WebP. A página de Referências identifica explicitamente a geração por IA e informa que a imagem não representa as instalações do colégio.
- Alimentos e Humanas receberam cartões de formação completos, alinhados ao padrão visual das demais páginas.
- Referências recebeu hero escuro, título em Archivo Black e hierarquia tipográfica compatível com o restante do site, sem alterar a composição especial do rodapé.
- Reduzidos os espaços verticais excessivos nas seções de iniciativas e encerramento de Sobre Nós.
- A página 404 recebeu chamada principal e rodapé completo.
- Parágrafos e itens de referências deixam de usar texto justificado em telas estreitas, evitando espaçamentos irregulares entre palavras.

### Validação

- Todas as páginas foram recapturadas após as alterações; os títulos longos também passaram por uma segunda captura móvel específica.
- Todas as referências locais de `href` e `src` apontam para arquivos existentes.
- `Prettier` e `git diff --check` passaram; permanecem apenas os avisos esperados de LF/CRLF.
- A busca global não encontrou `Lorem ipsum`, “Conteúdo temporário”, “Conteúdo em construção” nem avisos de conteúdo “em atualização” nos arquivos HTML.

### Estado atual

- A revisão de consistência solicitada está concluída.

## 13. Atualização — recorte do emblema do Clube de Ciências

Data: 10 de setembro de 2026

### O que foi feito

- O fundo azul-quadrado da imagem interna do Clube de Ciências foi removido com edição assistida por IA.
- O novo recorte transparente foi salvo em WebP com `840 × 840` e aproximadamente 71 KB; o JPEG original foi preservado.
- A moldura e a sombra retangulares foram removidas apenas dessa imagem, mantendo o emblema integrado ao fundo creme da página.
- O carregamento deixou de ser adiado porque a imagem aparece próxima ao início do conteúdo.
- As dimensões responsivas foram confirmadas em `420 × 420` no desktop e `340 × 340` no celular, sem corte ou deformação.

### Estado atual

- A substituição da imagem e a validação responsiva estão concluídas.

## 14. Atualização — compactação, âncoras e sequência dos headers

Data: 10 de setembro de 2026

### O que foi feito

- Os blocos de Sobre Nós foram compactados para que a navegação por âncoras não deixe o conteúdo principal cortado ou excessivamente afastado após um clique no header.
- As imagens da seção Iniciativas receberam mais distância em relação aos cards de texto, preservando uma separação visual clara no desktop e no celular.
- A mesma revisão de altura, espaçamento e âncoras foi aplicada às páginas do Ensino Técnico e do Ensino Regular.
- As páginas internas de Administração, Alimentos, Desenvolvimento de Sistemas, Exatas e Humanas receberam uma classe comum para manter os ajustes restritos às páginas de ensino.
- Em Desenvolvimento de Sistemas, a seção Disciplinas foi deliberadamente ampliada em vez de compactada, com cards e respiros maiores em todos os tamanhos de tela.
- A sequência dos links nos headers das páginas internas foi corrigida para acompanhar a ordem real do conteúdo: Informações aparece antes de Disciplinas ou Formação.
- Os headers das páginas de entrada do Ensino Técnico e do Ensino Regular também foram conferidos e já estavam na sequência correta.

### Validação

- Sobre Nós, Ensino Técnico, Ensino Regular e as cinco páginas internas foram revisados em `1440 × 1000` e `390 × 844`.
- Não foram encontrados cortes, sobreposições ou overflow horizontal nas capturas finais.
- Os arquivos alterados passaram pelo Prettier sem mudanças adicionais.

### Estado atual

- A compactação, a exceção ampliada de Disciplinas e a sequência dos headers estão concluídas em todas as páginas solicitadas.

## 15. Atualização — compactação da Home, Apoio e Biblioteca

Data: 10 de setembro de 2026

### O que foi feito

- A Home recebeu o mesmo padrão de compactação aplicado às páginas de ensino, com redução dos respiros das seções, banners, cards, Apoio, Biblioteca e contato.
- As seções da Home, Apoio e Biblioteca receberam margens de rolagem uniformes para que os títulos não fiquem cortados ao navegar pelo header.
- A página Apoio teve o hero reduzido e o conjunto formado por título, descrição e botão centralizado, seguindo a métrica visual dos outros heróis do site.
- Os cards, blocos de conteúdo, galerias e chamadas de Apoio e Biblioteca foram compactados em desktop, celular, Full HD e telas maiores.
- Na Home, a especificidade das regras de Apoio e Biblioteca foi corrigida para impedir que o padding geral das seções aumente novamente esses dois componentes.
- O retângulo de Apoio foi reduzido, incluindo ícone, respiros e cards internos; a Biblioteca voltou a usar `padding: 0`, deixando o conteúdo centralizado verticalmente sem faixas vazias.
- A ordem dos headers foi conferida com a ordem real das seções e já estava correta nas três páginas.
- Os links de Facebook dos rodapés de Apoio e Biblioteca passaram a usar o mesmo endereço real utilizado na Home.

### Conteúdo ainda não informado

- O site ainda não possui um endereço oficial de Instagram; os quatro acessos de Instagram dessas páginas continuam sem destino real.
- A página Apoio não informa horários, disponibilidade, responsáveis ou critérios operacionais confirmados e orienta o contato com a equipe pedagógica.
- A página Biblioteca não informa horários de funcionamento, catálogo, regras de empréstimo/devolução ou contato específico da equipe.
- Os textos de carregamento da previsão do tempo na Home são estados temporários substituídos pelo JavaScript, e não conteúdo editorial pendente.

### Validação

- As três páginas foram revisadas em `1440 × 1000` e `390 × 844`.
- Todas as âncoras do header existem, seguem a ordem do documento e abrem com `28 px` de margem superior.
- Nenhuma das páginas apresentou overflow horizontal.
- Após o refinamento final da Home, o bloco de Apoio caiu de `640 px` para `567 px` no desktop e de `1111 px` para `952 px` no celular; o bloco da Biblioteca caiu de `772 px` para `626 px` e de `866 px` para `752 px`, respectivamente.

### Estado atual

- A compactação, o posicionamento e a revisão dos headers estão concluídos; permanecem pendentes somente os dados institucionais que não podem ser preenchidos sem confirmação da escola.

## 16. Atualização — projetos dos Clubes de Ciências

Data: 16 de setembro de 2026

### Clube de Ciências geral

- Os cards da página `projetos/clube-de-ciencias.html` foram mantidos no formato original: foto, título, ícone e acesso direto às páginas de Gabriele e Marlene.
- A logo azul específica da professora Gabriele foi retirada da página geral e mantida somente em `projetos/clube-gabriele.html`.
- A página geral mantém o tema laranja institucional.

### Página da professora Gabriele

- A página `projetos/clube-gabriele.html` mantém sua identidade azul.
- O texto original da proposta foi preservado.
- Foi criada uma seção própria, separada por `<hr>`, com a logo azul maior à esquerda e texto provisório em Lorem ipsum à direita.
- Essa seção usa fundo branco padrão, sem círculo, borda ou fundo azul atrás da logo, e se reorganiza verticalmente no celular.

### Página da professora Marlene

- A página `projetos/clube-marlene.html` passou a usar laranja institucional em todos os elementos antes azuis: acentos, títulos, navegação, hover dos cards, cards de percurso, etapas, chamada final, rodapé, foco e controles.
- A página mantém a classe compartilhada `detail-blue` para preservar a estrutura, mas possui variáveis laranja específicas em `.marlene-page`; a página de Gabriele continua azul.
- O tema do navegador da página foi atualizado para `#c95a16`.
- A galeria foi reduzida a quatro cards representativos: Horta em pneus, Canteiro de cultivo, Estrutura de observação e Estufa.
- O card de Mudas em desenvolvimento foi removido, e o Canteiro de cultivo passou a usar `marlene-canteiro-02-600x399.webp`.
- A foto original `_DSC3829.JPG` foi preservada e exportada para WebP responsivo da Estufa em 600, 1600, 1920 e 3200 px.
- As imagens dos quatro cards são clicáveis e usam o lightbox compartilhado de `comum.js`, com ampliação, legenda, navegação e restauração de foco.
- Os botões `Saiba mais` usam `<details>` acessível, com texto provisório em Lorem ipsum, seta animada no hover e indicação de fechamento quando abertos.
- Os cards usam três colunas no desktop, duas em telas intermediárias e uma no celular. A galeria e a seção de cards usam fundo branco padrão.

### Ajustes adicionais desta continuidade

- A imagem temática gerada por IA da página de Alimentos foi removida, assim como suas referências em `referencias/referencias.html`; o WebP correspondente foi excluído.
- A página `404.html` teve CSS, logo, favicon e links corrigidos para funcionar quando a rota inexistente for exibida em subpastas publicadas.
- Os JPGs originais das fotos de Marlene foram preservados na pasta `projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene`; as versões WebP são derivadas para uso no site.

### Validação

- Caminhos das imagens usadas pela galeria foram conferidos no disco.
- `git diff --check` passou; os avisos de LF/CRLF continuam sendo os avisos esperados do PowerShell/Git.
- Não foram alteradas as identidades azuis específicas de Gabriele nem os demais clubes do projeto.

## 17. Atualização — laranja mais vivo no Clube de Ciências geral

Data: 16 de setembro de 2026

### O que foi feito

- O laranja da página geral `projetos/clube-de-ciencias.html` foi intensificado para ficar mais vivo e próximo da presença visual da página da Marlene.
- As variáveis próprias da página passaram a usar `#e9681b` como laranja principal e `#ff9a5c` como laranja claro para destaques, hovers e ícones.
- Divisor, sombra dos cards e estados de hover do botão de retorno ao topo também receberam o novo tom mais luminoso.
- A alteração ficou restrita ao escopo `.science-page`; as páginas de Gabriele e Marlene não tiveram suas variáveis alteradas nesta etapa.

### Validação

- `git diff --check` foi executado após a alteração.

## 18. Atualização — mural de eventos na Home

Data: 21 de setembro de 2026

### O que foi feito

- Inserida a seção `#eventos` como a primeira seção da Home, imediatamente após o hero e antes de `#sobre`.
- Criado um carrossel manual e acessível em `index.html`, com controles anterior/próximo, posição anunciada e suporte automático a novos cards.
- Como não foram fornecidas datas ou eventos oficiais, o card atual é apenas uma imagem de teste; nenhum compromisso foi inventado.
- Adicionado um comentário de manutenção no HTML: para publicar um evento, basta duplicar um `<article data-event-slide>` e atualizar data, título, texto e link. Não é necessário alterar o JavaScript.
- A lógica fica em `script.js`; os controles ficam desativados enquanto houver apenas um card e passam a funcionar ao inserir mais eventos. Cards fora da visualização recebem `inert`, evitando foco em conteúdo oculto.
- Os estilos responsivos e visuais ficam em `style.css`, seguindo o tema institucional laranja, verde-escuro e superfícies claras.
- O atalho para Eventos foi colocado no menu `Explorar`, preservando o espaço do cabeçalho em larguras intermediárias.
- Cards futuros podem receber fotografias próprias com a classe `has-event-image` e uma `<figure class="event-image">`; o CSS usa `object-fit: cover`, mantém o recorte responsivo e preserva o layout sem imagem para comunicados simples.
- As fotografias dos eventos devem ser salvas na pasta `eventos/`, na raiz do projeto, para ficarem fáceis de localizar no Explorador de Arquivos. A pasta contém um `.gitkeep` e uma foto horizontal do Clube de Ciências usada apenas como teste.
- O título da seção foi simplificado para `Eventos`. O card de teste é exclusivamente visual, sem texto de calendário, e sua imagem preenche toda a área disponível. A estrutura com data e texto continua disponível no CSS para futuros cards que precisem dessas informações.
- A seção foi compactada para ocupar menos altura na tela. O carrossel não possui limite fixo: todos os elementos adicionais com `data-event-slide` são incluídos automaticamente e podem ser navegados pelas setas.

### Validação

- `node --check script.js` e `git diff --check` passaram; os avisos de LF/CRLF permanecem esperados neste ambiente.

## 19. Tarefa prioritária para a próxima IA — auditoria e melhoria geral

Status: **PENDENTE — executar na próxima continuidade.**

A próxima IA que acessar este checkpoint deve executar a tarefa abaixo. Não deve apenas resumir o prompt ou apresentar recomendações: deve inspecionar o projeto, implementar as melhorias comprovadas, validar o resultado e registrar o trabalho neste checkpoint.

### Prompt de execução

> Você é um engenheiro front-end sênior, designer de interfaces e especialista em acessibilidade.
>
> Analise e melhore o projeto localizado em `C:\Users\rafae\OneDrive\Desktop\SITEDOEUZEBIO`.
>
> O projeto é um site institucional estático do Colégio Estadual Euzébio da Mota, construído com HTML, CSS e JavaScript puro. Não utilize frameworks nem crie uma etapa de build. Preserve todas as alterações existentes, não faça restaurações amplas e não invente informações sobre a escola.
>
> Faça uma auditoria completa de experiência do usuário, responsividade em 390 px, 768 px, 1440 px, 1920 px e 4K, acessibilidade WCAG, SEO técnico, performance de imagens/CSS/JavaScript, clareza do conteúdo, links quebrados, imagens ausentes e erros de console.
>
> Preserve a identidade visual atual: verde-escuro, laranja institucional, Montserrat, Archivo Black e Font Awesome. Preserve as exceções visuais intencionais de Gabriele, Marlene, Biblioteca e Clube de Ciências. Mantenha o carrossel de Eventos, com as imagens na pasta raiz `eventos/` e sem limite fixo de cards.
>
> Corrija os problemas encontrados usando alterações pequenas e organizadas. Não invente telefone, horários, redes sociais, datas de eventos ou outros dados institucionais. Quando faltar informação oficial, use uma formulação neutra e oriente o visitante a procurar a equipe do colégio.
>
> Verifique especialmente hierarquia de headings, textos alternativos, foco de teclado, menu móvel, `aria-label`, `aria-live`, `aria-expanded`, contraste, redução de movimento, lightbox, carrossel, `srcset`, `sizes`, `loading`, iframes, fontes externas, animações, listeners de ponteiro e JavaScript executado em páginas que não precisam dele.
>
> Verifique também `title`, `meta description`, canonical, Open Graph, Twitter Cards, sitemap, robots.txt, dados estruturados, links internos, página 404 e consistência do nome “Colégio Estadual Euzébio da Mota”.
>
> Depois de implementar as correções, execute `node --check script.js`, `git diff --check` e uma auditoria de todos os caminhos locais de imagens, links e arquivos. Quando possível, faça uma revisão visual em celular e desktop.
>
> Atualize este `CHECKPOINT-CONTINUIDADE.md` com a data, as alterações realizadas, os testes executados e as pendências que dependem de informações oficiais. Ao finalizar, informe exatamente quais arquivos foram alterados e por quê.

### Regra de conclusão

A tarefa só deve ser considerada concluída depois de implementar as melhorias necessárias, executar as validações e atualizar este checkpoint com os resultados. Se algum problema não puder ser resolvido sem informação oficial ou decisão do usuário, registrar o bloqueio com clareza em vez de inventar uma solução.

## 20. Atualização — altura e responsividade do carrossel de Eventos

Data: 23 de setembro de 2026

### O que foi feito

- Corrigida a expansão vertical do card de evento com imagem. A altura deixou de depender da proporção natural da fotografia e passou a usar `clamp(220px, 25vw, 350px)`, mantendo o carrossel compacto em celulares, tablets, desktops e telas grandes.
- A imagem do card agora ocupa a altura controlada pelo carrossel com `object-fit: cover`, preservando o recorte sem esticar a seção.
- Adicionado `min-width: 0` ao viewport, trilho e cards para impedir que conteúdos futuros ampliem a largura mínima do grid e reintroduzam rolagem horizontal.
- O `body` passou a usar `overflow-x: clip` como proteção adicional contra overflow lateral.

### Validação

- A altura do card foi conferida em `390 × 844`, `768 × 844`, `1440 × 1000`, `1920 × 1080` e `3840 × 2160`: respectivamente 220, 220, 350, 350 e 350 px.
- A largura do documento permaneceu igual à área útil do viewport em todos os tamanhos, sem overflow horizontal. O teste também foi repetido com cards duplicados no trilho para confirmar que os slides ocultos continuam recortados pelo viewport.
- `node --check script.js` e `git diff --check` foram executados com sucesso; os avisos de LF/CRLF permanecem esperados neste ambiente.

### Pendências

- A auditoria geral descrita na seção 19 continua pendente e deve ser executada em uma etapa própria; este ajuste tratou especificamente o carrossel e a responsividade solicitados.

## 21. Atualização — inclusão de novas fotos no carrossel

Data: 23 de setembro de 2026

- As instruções de manutenção do mural foram simplificadas diretamente em `index.html`: basta salvar a nova imagem em `eventos/`, duplicar um `<article data-event-slide>` e trocar `src`, `alt`, `width` e `height`.
- A lógica existente já navega por todos os artigos sem limite fixo, atualiza a posição anunciada e mantém os slides ocultos fora da navegação por teclado. Não é necessário alterar `script.js`.
- Adicionada a logo azul do Clube de Ciências da professora Gabriele em `eventos/logo-clube-de-ciencias-gabriele.webp` como segundo slide. O slide usa fundo azul e `object-fit: contain` para preservar a logo quadrada inteira.
- Em revisão automatizada, o carrossel exibiu `1 / 2`, habilitou o botão próximo, avançou para `2 / 2` e permaneceu sem overflow horizontal em `390 × 844`, `1440 × 1000` e `3840 × 2160`.

## 22. Atualização — logo da professora Marlene no card de clubes

Data: 23 de setembro de 2026

- Identificada a nova imagem `projetos/imgs-projetos/imgs-clubedeciencias/imgs-marlene/img-clubedeciencias-marlene.png`, com 1254 × 1254 px.
- O card da professora Marlene em `projetos/clube-de-ciencias.html` passou a usar essa logo no lugar da fotografia anterior, com texto alternativo específico e dimensões intrínsecas corretas.
- Criada uma regra específica em `projetos/projetos.css` com `object-fit: contain` e fundo claro, mantendo a logo quadrada inteira dentro do card responsivo.
- Atualizada a referência da logo da Gabriele em `projetos/clube-gabriele.html` para acompanhar os arquivos renomeados na pasta de imagens e evitar caminho quebrado.
- O card da professora Gabriele também passou a usar a logo azul correspondente. Os dois cards agora preenchem toda a área de imagem com fundo branco, sem deformar ou cortar as logos.

### Validação

- Os dois cards foram conferidos em `390 × 844`, `1440 × 1000` e `1920 × 1080`; as logos permaneceram inteiras, sem distorção ou overflow horizontal.
- `node --check script.js`, `node --check comum.js` e `git diff --check` passaram; os avisos de LF/CRLF permanecem esperados neste ambiente.

## 23. Atualização — substituição do carrossel de Eventos por cards

Data: 29 de setembro de 2026

### O que foi feito

- O carrossel da Home foi substituído por uma grade responsiva de cards, inspirada nos cards de registros da página da professora Marlene.
- Cada card agora apresenta foto, etiqueta, título e descrição breve, com as imagens abrindo no lightbox existente quando selecionadas.
- Os dois registros já disponíveis em `eventos/` foram reaproveitados como exemplos editáveis: o espaço do Clube de Ciências e a identidade visual do clube.
- Os controles, atributos e a lógica JavaScript exclusivos do carrossel foram removidos de `index.html`, `style.css` e `script.js`.
- O comentário de manutenção da Home foi atualizado para direcionar o cadastro de novos eventos para `eventos/eventos.js`.

### Validação

- `node --check script.js` passou.
- `git diff --check` passou; os avisos de conversão LF/CRLF permanecem esperados neste ambiente.
- Os caminhos das duas imagens usadas na seção foram conferidos e estão válidos.
- Não restaram referências aos seletores ou atributos antigos do carrossel.

### Pendências

- A seção ainda usa registros do Clube de Ciências porque não foram fornecidas fotos, títulos ou descrições de eventos oficiais. Novos cards podem ser adicionados no cadastro quando esse conteúdo estiver disponível.

## 24. Atualização — cadastro centralizado de eventos

Data: 29 de setembro de 2026

### O que foi feito

- Criado `eventos/eventos.js` como cadastro central dos cards da Home.
- A equipe responsável agora pode adicionar um evento salvando a imagem em `eventos/` e duplicando/preenchendo um único objeto no cadastro, sem duplicar HTML ou alterar o layout.
- `index.html` passou a fornecer apenas o contêiner e um template acessível; o JavaScript preenche imagem, texto alternativo, legenda, etiqueta, ícone, título, descrição e dimensões.
- O cadastro é carregado antes de `comum.js`, preservando o lightbox existente para os cards gerados dinamicamente.
- Incluído um aviso alternativo para visitantes com JavaScript desativado.

### Validação

- `node --check eventos/eventos.js`, `node --check script.js` e `node --check comum.js` passaram.
- `git diff --check` passou; os avisos de conversão LF/CRLF permanecem esperados neste ambiente.
- Os dois registros atuais foram renderizados a partir do cadastro e os caminhos das imagens foram conferidos.

## 25. Atualização — remoção das etiquetas dos cards de Eventos

Data: 29 de setembro de 2026

- Removidas as etiquetas “Em destaque” e “Projeto em destaque” dos cards.
- O cadastro de novos eventos ficou mais simples: agora exige apenas imagem, texto alternativo, legenda, título, descrição e dimensões.
- O template e o CSS foram ajustados para manter somente título e descrição abaixo da foto.

## 26. Atualização — simplificação do cabeçalho de Eventos

Data: 29 de setembro de 2026

- Removido o texto “Vida escolar” do cabeçalho da seção.
- A seção agora apresenta diretamente o título “Eventos”, sua descrição e os cards.

## 27. Atualização — centralização do título de Eventos

Data: 29 de setembro de 2026

- O título “Eventos” foi centralizado no cabeçalho da seção.
- O alinhamento e a estrutura dos cards foram mantidos.

## 28. Atualização — centralização da descrição de Eventos

Data: 29 de setembro de 2026

- O texto descritivo abaixo do título “Eventos” também foi centralizado.
- Os cards continuam com o mesmo alinhamento e estrutura responsiva.

## 30. Atualização — prévia e página completa da Galeria

Data: 29 de setembro de 2026

### O que foi feito

- Adicionada uma prévia da Galeria na Home, logo depois de Eventos e antes de Sobre nós.
- Criada a página completa `galeria/galeria.html`, acessível pelo botão “Ver galeria completa”.
- Criado o cadastro único `galeria/galeria.js`, que alimenta a prévia da Home e a galeria completa.
- As imagens usam versões menores para a grade, versões maiores no lightbox, `srcset`, `sizes`, textos alternativos e legendas.
- A página completa recebeu metadados, navegação própria, layout responsivo e inclusão no `sitemap.xml`.

### Validação

- Os caminhos das quatro imagens do cadastro foram conferidos.
- A galeria carrega seu cadastro antes de `comum.js`, mantendo o lightbox para os cards gerados.

## 29. Atualização — textos provisórios dos cards de Eventos

Data: 29 de setembro de 2026

- Os títulos e as descrições visíveis dos cards foram substituídos por textos provisórios em Lorem ipsum.
- Os textos alternativos das imagens foram preservados para manter a acessibilidade.

## 31. Atualização — auditoria geral de acessibilidade, SEO e responsividade

Data: 30 de setembro de 2026

### O que foi feito

- Corrigidos os metadados `og:url` ausentes em `apoio/apoio.html` e `biblioteca/biblioteca.html`.
- Completados `twitter:title` e `twitter:description` da página `404.html`, que permanece com `noindex`.
- Incluída a Biblioteca no `sitemap.xml` e atualizada a data da Home para refletir as alterações recentes.
- Removidos links sociais mortos com `href="#"`. Onde não havia URL oficial confirmada, o rodapé passou a orientar o visitante a consultar a escola; os links oficiais já existentes foram preservados.
- Ajustado o título da Home para reduzir sua escala de forma fluida em telas estreitas, mantendo `COLÉGIO ESTADUAL` sem corte em 390 px.
- O botão do menu móvel passou a usar um ícone CSS próprio, independente do carregamento do Font Awesome, mantendo `aria-label`, `aria-controls` e `aria-expanded`.

### Validação

- `node --check` passou em `comum.js`, `script.js`, `eventos/eventos.js`, `galeria/galeria.js` e `biblioteca/biblioteca.js`.
- Auditoria estática passou em 21 páginas HTML: um `<h1>` por página, `alt` nas imagens, links/recursos locais válidos e âncoras internas existentes.
- Verificação via Chrome/DevTools Protocol em 390, 768, 1440, 1920 e 3840 px não encontrou overflow horizontal no documento. As imagens de hero de Ensino Técnico e Sobre Nós usam `scale(1.015)` intencionalmente e continuam recortadas pelo próprio hero.
- Menu móvel testado: abre, atualiza `aria-expanded` e fecha com Escape.
- Lightbox testado na Galeria e na Biblioteca: abre, identifica a legenda e fecha corretamente.
- `git diff --check` passou; os avisos de LF/CRLF são os avisos recorrentes deste ambiente.
- A captura headless registrou somente falhas de rede para recursos externos bloqueados pelo ambiente, como fontes/CDN e a previsão meteorológica; a previsão possui tratamento de falha e não gerou exceção de JavaScript.
- A nova execução do Prettier não foi concluída porque a política do PowerShell bloqueou `npx.ps1`; a formatação manual foi mantida no padrão existente.

### Arquivos alterados nesta etapa

- `404.html`, `apoio/apoio.html`, `biblioteca/biblioteca.html`, `index.html`, `sitemap.xml`, `style.css` e `comum.js`.
- `ensino-medio/administracao.html`, `ensino-medio/alimentos.html`, `ensino-medio/desenvolvimento-de-sistemas.html`, `ensino-medio/ensinoregular.html`, `ensino-medio/ensinotecnico.html`, `ensino-medio/exatas.html` e `ensino-medio/humanas.html`.
- `projetos/clube-de-ciencias.html`, `projetos/clube-gabriele.html`, `projetos/clube-marlene.html`, `projetos/robotica.html`, `projetos/rpg.html`, `referencias/referencias.html` e `sobrenos/sobrenos.html`.
- Este checkpoint, para registrar a continuidade.

### Pendências

- Permanecem os textos provisórios em Lorem ipsum dos cards de Eventos e de algumas seções dos clubes, aguardando conteúdo oficial.
- A URL do Facebook já existente foi preservada; outros canais sociais continuam sem ser inventados enquanto a escola não fornecer os endereços oficiais.

## 32. Atualização — acessibilidade, clubes e padronização dos cards de Eventos

Data: 30 de setembro de 2026

### O que foi feito

- Integrado o widget oficial VLibras em `comum.js`, carregado pelas páginas do site. O botão visual com o avatar de Libras é fornecido pelo próprio widget oficial e aparece no padrão de acessibilidade conhecido do gov.br.
- Adicionado bloqueio de seleção de texto em `style.css` como medida de dissuasão contra cópias casuais. Campos editáveis continuam selecionáveis e a seleção é liberada quando o visitante abre o widget VLibras. Esse bloqueio não substitui proteção de conteúdo: capturas de tela, ferramentas de desenvolvedor e outras formas de reprodução continuam possíveis.
- Atualizada `acessibilidade.html` para explicar o widget VLibras e o comportamento da seleção de texto.
- Adicionado no canto superior direito da Home um botão temporário somente com ícone vetorial de formulário, sem texto visível e sem link fictício. O nome e a finalidade permanecem disponíveis por `aria-label`, título e descrição para tecnologias assistivas.
- Atualizados os cards de `projetos/clube-de-ciencias.html`: o card da Gabriele agora exibe “CLUBE FRIENDS SCIENCE” em azul, com “Professora Gabriele” em texto menor; o card da Marlene exibe “CLUBE LITLLE SCIENTISTS”, com “Professora Marlene” em texto menor.
- Atualizados os títulos visíveis, títulos de navegador e metadados de `projetos/clube-gabriele.html` e `projetos/clube-marlene.html`. Nas páginas individuais, o nome da professora aparece pequeno acima do título do clube; a identidade da Gabriele também recebe o nome do clube em azul junto à logo.
- Os cards de Eventos da Home passaram a usar a mesma linguagem dos cards da página da Marlene: imagem com proporção controlada, zoom suave, título colorido, botão “Saiba mais”, painel expansível e sombra compartilhada. A alteração foi feita no template de `index.html`, no cadastro dinâmico `eventos/eventos.js` e em `style.css`.

### Validação

- `node --check comum.js`, `node --check eventos/eventos.js` e `node --check script.js` passaram.
- `git diff --check` passou; os avisos de conversão LF/CRLF permanecem esperados neste ambiente.
- A renderização headless da Home confirmou a presença do botão temporário e dos cards dinâmicos com os painéis “Saiba mais”.
- Os caminhos relativos dos scripts, folhas de estilo e imagens foram conferidos; os únicos falsos positivos da checagem são as URLs absolutas específicas da página 404, já existentes para o deploy do GitHub Pages.
- O widget utiliza a integração oficial documentada pelo VLibras: `https://vlibras.gov.br/app/vlibras-plugin.js`.

### Pendências

- O formulário continua propositalmente sem destino até que sejam definidos o serviço, as perguntas e o endereço de envio.
- Os títulos e descrições Lorem ipsum dos eventos e de algumas áreas dos clubes continuam provisórios, aguardando conteúdo oficial.

## 33. Atualização — reposicionamento do botão temporário

Data: 30 de setembro de 2026

- O botão temporário de formulário da Home foi ampliado para 62 × 62 px e reposicionado no canto inferior direito.
- Foi mantida uma margem lateral para evitar sobreposição com o botão do VLibras, inclusive em telas menores.
- O ícone também foi ampliado para preservar sua leitura dentro do botão circular.

## 34. Atualização — ajuste horizontal do botão temporário

Data: 30 de setembro de 2026

- O botão foi aproximado da borda direita, mantendo-se acima do VLibras para evitar sobreposição.

## 35. Atualização — ajuste vertical do botão temporário

Data: 30 de setembro de 2026

- O botão foi deslocado mais para baixo, permanecendo próximo ao canto inferior direito e com espaçamento mínimo em relação ao VLibras.

## 36. Atualização — dica visual do botão temporário

Data: 30 de setembro de 2026

- Adicionado um balão de dica acima do botão com o texto “Pesquisa de opinião”.
- A dica aparece ao passar o mouse e também ao focar o botão pelo teclado.

## 37. Atualização — camada superior do botão e da dica

Data: 30 de setembro de 2026

- O botão temporário foi movido para fora do cabeçalho e recebeu `z-index: 1000`.
- O botão e o balão de “Pesquisa de opinião” agora ficam acima das imagens dos cards e das imagens de fundo dos títulos.

## 38. Atualização — ajuste final de posição do botão

Data: 30 de setembro de 2026

- O botão foi movido levemente para a esquerda e para baixo, preservando a margem de segurança em relação ao VLibras.

## 39. Atualização — remoção do texto temporário do botão

Data: 30 de setembro de 2026

- Removida a mensagem “Formulário do site — em breve” do botão e de sua identificação acessível.
- O botão permanece identificado como “Pesquisa de opinião”, com o balão visual correspondente.

## 40. Fechamento consolidado — alterações prontas para publicação

Data: 30 de setembro de 2026

### Resumo da etapa

- Integrado o widget oficial VLibras em todas as páginas por meio de `comum.js`.
- Criado bloqueio de seleção de texto como medida de dissuasão contra cópia casual, com exceção de campos editáveis e liberação ao abrir o VLibras.
- Atualizada `acessibilidade.html` com a descrição dos recursos de Libras e da proteção de conteúdo.
- Adicionado na Home o botão circular de pesquisa de opinião, somente com ícone, balão “Pesquisa de opinião”, identificação acessível e posicionamento responsivo acima das imagens e dos fundos visuais.
- Atualizados os nomes dos clubes: `CLUBE FRIENDS SCIENCE` para Gabriele e `CLUBE LITLLE SCIENTISTS` para Marlene, nos cards, títulos das páginas e identificação da logo da Gabriele.
- Padronizados os cards de Eventos da Home com o estilo dos cards da página da professora Marlene, incluindo painel expansível “Saiba mais”.
- Mantidos no checkpoint os registros anteriores de SEO, responsividade, galeria, eventos, logos e auditoria geral.

### Arquivos diretamente envolvidos nesta etapa

- `index.html`
- `comum.js`
- `style.css`
- `paginas.css`
- `projetos/projetos.css`
- `projetos/clube-de-ciencias.html`
- `projetos/clube-gabriele.html`
- `projetos/clube-marlene.html`
- `eventos/eventos.js`
- `acessibilidade.html`
- `privacidade.html`
- `referencias/referencias.html`
- `404.html`
- `CHECKPOINT-CONTINUIDADE.md`

### Validação final

- `node --check comum.js`, `node --check eventos/eventos.js` e `node --check script.js` passaram.
- `git diff --check` passou; os avisos de LF/CRLF são esperados neste ambiente.
- As 21 páginas HTML incluem `comum.js` para receber o widget VLibras e o comportamento compartilhado.
- Não restaram referências aos seletores antigos do carrossel de Eventos.

### Texto sugerido para o GitHub

Atualização do site com integração ao VLibras, proteção contra seleção de texto, novos títulos dos clubes, cards de eventos padronizados e botão flutuante de pesquisa de opinião.

## 41. Atualização — humanização dos textos institucionais

Data: 1º de outubro de 2026

### O que foi feito

- Reescritos os textos institucionais e promocionais da Home, Apoio, Biblioteca,
  Ensino, Projetos e Sobre Nós para reduzir slogans genéricos, abstrações e
  estruturas repetitivas.
- Priorizadas frases mais diretas, referências ao cotidiano escolar e
  informações concretas já presentes no projeto, sem inventar horários, eventos,
  atividades ou dados da instituição.
- Atualizados os títulos e descrições do cadastro da Galeria em
  `galeria/galeria.js`.
- Mantidos exatamente como estavam todos os trechos com `Lorem ipsum` dos
  eventos e dos clubes de Gabriele e Marlene, conforme solicitado.

### Arquivos alterados nesta etapa

- `index.html`, `galeria/galeria.js`, `apoio/apoio.html` e
  `biblioteca/biblioteca.html`.
- `ensino-medio/administracao.html`, `ensino-medio/alimentos.html`,
  `ensino-medio/desenvolvimento-de-sistemas.html`,
  `ensino-medio/ensinoregular.html`, `ensino-medio/ensinotecnico.html`,
  `ensino-medio/exatas.html` e `ensino-medio/humanas.html`.
- `projetos/clube-de-ciencias.html`, `projetos/clube-gabriele.html`,
  `projetos/clube-marlene.html`, `projetos/robotica.html`, `projetos/rpg.html` e
  `sobrenos/sobrenos.html`.
- Este checkpoint, para registrar a continuidade.

### Validação

- `node --check` passou em `eventos/eventos.js`, `galeria/galeria.js`,
  `comum.js` e `script.js`.
- `git diff --check` passou; os avisos de conversão LF/CRLF continuam esperados
  neste ambiente.

- O cadastro `eventos/eventos.js` não foi alterado e os trechos com `Lorem ipsum`
  continuam presentes nos eventos e nos clubes.

## 42. Atualização — compactação responsiva da seção de Eventos

Data: 1º de outubro de 2026

### O que foi feito

- Reduzidos os paddings, espaçamentos, títulos, imagens e textos dos cards da
  seção de Eventos na Home.
- Em telas desktop e tablet, a grade mantém duas colunas com cards mais baixos.
- Em telas de até 600 px, os cards passam para um formato horizontal, com a
  imagem ao lado do conteúdo, reduzindo a altura total da seção.
- Ajustados os tamanhos do botão, do painel expansível e da imagem da logo para
  preservar a leitura em telas estreitas.

### Arquivos alterados nesta etapa

- `style.css`.
- Este checkpoint, para registrar a continuidade.

### Validação

- `git diff --check` passou; os avisos de conversão LF/CRLF continuam esperados
  neste ambiente.
- As regras foram conferidas nos pontos de quebra base, tablet e celular:
  desktop, até 800 px e até 600 px.

## 43. Atualização — Galeria somente com fotos e novos registros

Data: 1º de outubro de 2026

### O que foi feito

- Removidos os títulos e as descrições visíveis dos cards da prévia da Home e
  da página completa da Galeria; os cards agora mostram somente as fotos.
- Mantido o lightbox para ampliar as imagens, com textos alternativos e
  identificações das fotografias preservados para acessibilidade.
- O botão “Ver galeria completa” recebeu fundo escuro, hover laranja e
  `box-shadow`, seguindo o padrão visual dos demais botões do site.
- Ampliado o cadastro de `galeria/galeria.js` com registros da Biblioteca,
  Robótica, RPG e Clube de Ciências.
- A prévia da Home passou a mostrar seis fotos; a página completa mostra todo o
  cadastro disponível.

### Arquivos alterados nesta etapa

- `index.html`, `galeria/galeria.html`, `galeria/galeria.js` e `style.css`.
- Este checkpoint, para registrar a continuidade.

### Validação

- `node --check galeria/galeria.js` passou.
- Os 19 caminhos de imagem usados pelo cadastro foram conferidos e estão
  válidos.
- `git diff --check` passou; os avisos de conversão LF/CRLF continuam esperados
  neste ambiente.

## 44. Atualização — inclusão das fotos do Ensino Técnico na Galeria

Data: 1º de outubro de 2026

### O que foi feito

- Adicionadas ao cadastro da Galeria as fotos do laboratório de informática,
  digitação, estudantes usando computadores e teclado do Ensino Técnico.
- A prévia da Home passou a mostrar oito fotos, incluindo os novos registros
  dos computadores; a página completa continua mostrando todo o cadastro.
- Foram usadas as versões menores para a grade e as versões maiores no
  lightbox, mantendo os textos alternativos correspondentes.

### Arquivos alterados nesta etapa

- `galeria/galeria.js`.
- Este checkpoint, para registrar a continuidade.

### Validação

- `node --check galeria/galeria.js` passou.
- Os 27 caminhos únicos de imagem usados no cadastro foram conferidos e estão
  válidos.
- `git diff --check` passou; os avisos de conversão LF/CRLF continuam esperados
  neste ambiente.

## 45. Atualizacao — varredura completa das pastas de imagens

Data: 1 de outubro de 2026

### O que foi feito

- Vasculhadas as pastas de Biblioteca, Ensino Medio, projetos, Robotica,
  RPG, Clube de Ciencias, projeto Marlene, Sobre nos, Home e Eventos.
- Adicionadas novas fotos de patios, fachadas, biblioteca, salas de aula,
  laboratorio de informatica, Robotica, RPG e horta escolar.
- Incluidas as fotos horizontais e uma foto vertical de garrafas PET, com
  tratamento visual proprio para a imagem vertical.
- Mantidas apenas uma entrada por foto; arquivos de resolucao maior continuam
  sendo usados no lightbox quando disponiveis.
- A pagina completa da Galeria agora possui 38 registros. A previa da Home
  continua limitada aos primeiros oito para preservar a composicao da secao.

### Arquivos alterados nesta etapa

- `galeria/galeria.js`, `style.css`.
- Este checkpoint, para registrar a continuidade.

### Validacao

- `node --check galeria/galeria.js` passou.
- Os 68 caminhos unicos de imagem usados pelo cadastro foram conferidos e
  todos existem nas pastas do site.

## 46. Atualizacao — cards de Projetos, Pesquisa de opiniao e remocao da previsao

Data: 2 de outubro de 2026

### O que foi feito

- Os cards de Projetos na Home agora usam laranja no icone durante o hover,
  alinhados ao comportamento do card do Clube de Ciencias.
- O botao flutuante de Pesquisa de opiniao agora abre o formulario informado
  pelo usuario em uma nova aba:
  `https://forms.gle/VaMBXP2f2MReUNUm8`
- Removidos da Home o painel de previsao do tempo, o codigo de consulta da API
  meteorologica e todos os estilos responsivos relacionados.
- Removidas as referencias restantes a previsao do tempo da Politica de
  Privacidade e da pagina de Referencias.

### Arquivos alterados nesta etapa

- `index.html`, `script.js`, `style.css`, `privacidade.html` e
  `referencias/referencias.html`.
- Este checkpoint, para registrar a continuidade.

### Validacao

- `node --check script.js` passou.
- A busca por `weather`, `forecast`, `previsao do tempo`, `open-meteo` e
  `data-weather` nao encontrou referencias fora deste checkpoint.
- `git diff --check` passou; os avisos de conversao LF/CRLF continuam esperados
  neste ambiente.

## 47. Atualizacao — cards de Eventos seguindo o padrao da Galeria

Data: 5 de outubro de 2026

### O que foi feito

- Os cards da secao Eventos na Home passaram a usar o mesmo tipo visual dos
  cards da Galeria: cards com a fotografia ocupando toda a area, sem titulo,
  descricao ou painel expansivel.
- As imagens dos Eventos continuam usando o lightbox compartilhado. Ao abrir
  uma foto, o visitante pode navegar pelas imagens com as setas laterais, pelo
  teclado ou pelo contador do lightbox, como na pagina completa da Galeria.
- Mantido o tratamento especial da logo do Clube de Ciencias para que ela
  apareca inteira dentro do card.
- As imagens da pre-visao da Galeria na Home deixaram de ser clicaveis e nao
  abrem mais o lightbox. A pagina completa `galeria/galeria.html` continua com
  os cards clicaveis e a navegacao entre todas as fotos.

### Arquivos alterados nesta etapa

- `index.html`.
- `eventos/eventos.js`.
- `galeria/galeria.js`.
- `style.css`.
- Este checkpoint, para registrar a continuidade.

### Validacao

- A navegacao do lightbox continua compartilhada entre os cards de Eventos e
  os cards da pagina completa da Galeria.
- A pre-visao da Home remove o elemento de link antes de inserir cada imagem,
  portanto nao deixa href, foco de teclado ou gatilho de lightbox.
- `node --check eventos/eventos.js` passou.
- `node --check galeria/galeria.js` passou.
- `git diff --check` passou; os avisos de conversao LF/CRLF continuam esperados
  neste ambiente.

## TAREFA: pagina de Eventos + vitrine na Home

Data de inicio: 5 de outubro de 2026

### Objetivo

Criar `eventos/eventos.html` seguindo o padrao das paginas internas e converter
a secao `#eventos` da Home em uma vitrine visual que encaminha para a pagina
completa. `eventos/eventos.js` permanece como fonte unica dos dados. Preservar
as identidades visuais e as regras de
acessibilidade/performance informadas pelo usuario.

### Checklist de execucao

- [x] 1. Registrar a tarefa no checkpoint antes de alterar codigo. (feito antes das mudancas no codigo)
- [x] 2. Revisar e ajustar o cadastro unico: imagem, alt, width, height obrigatorios; titulo, descricao, data ISO, categoria, local e objectPosition opcionais.
- [x] 3. Criar pagina, CSS e JS de Eventos; incluir hero, breadcrumb, grade responsiva, recursos condicionais e lightbox via `comum.js`.
- [x] 4. Construir a vitrine assimetrica da Home com 1 a 4 eventos, links para a pagina, foco/hover acessiveis e reducao de movimento.
- [x] 5. Integrar link de Eventos nos headers/footers, estado ativo, sitemap e metadados completos.
- [x] 6. Validar scripts, whitespace, caminhos locais, breakpoints 390/768/1440/1920/3840 e ausencia de overflow horizontal.
- [x] 7. Fechar este registro com arquivos, validacoes e pendencias.

### Estado ao iniciar

- Worktree ja tinha alteracoes do usuario em `CHECKPOINT-CONTINUIDADE.md`,
  `eventos/eventos.js`, `galeria/galeria.js`, `index.html` e `style.css`.
- A Home usa cards de eventos somente com fotos e lightbox. A pre-visualizacao
  da galeria na Home nao e clicavel; a pagina completa da Galeria preserva o
  lightbox compartilhado.
- Nenhuma implementacao da nova pagina de Eventos foi iniciada ainda.
- Leitura do checkpoint concluida; `index.html`, `eventos/eventos.js`,
  `galeria/galeria.html`, `galeria/galeria.js`, `comum.js`, `script.js` e as
  regras pertinentes de `style.css` foram inspecionados.
- Os eventos atuais nao possuem data, categoria ou local; esses controles devem
  permanecer ocultos ate que dados reais sejam cadastrados.
- Etapa 2 concluida: o cadastro agora documenta os campos obrigatorios e
  opcionais e mantem variante de logo e
  objectPosition opcionais. `eventos/eventos.js` expoe a lista para a pagina e
  suporta prefixo de caminhos, vitrine da Home e cards da pagina completa.
- A implementacao da pagina dedicada e da vitrine foi concluida; a auditoria
  final esta registrada abaixo.

### Progresso intermediario — etapas 3 a 5

- Criados `eventos/eventos.html`, `eventos/eventos.css` e
  `eventos/eventos-page.js`. A pagina usa o cadastro de `eventos.js`, exibe
  busca somente quando ha titulos, filtros por categoria/ano somente quando
  esses dados existem, e separa eventos futuros/passados apenas com datas.
- A pagina usa o lightbox de `comum.js`, cards responsivos, breadcrumb,
  metadados sociais/canonical, um H1 e navegacao/rodape com estado atual.
- A Home agora tem vitrine assimetrica de ate quatro registros, imagem
  destacada, overlay, seta, estados hover/foco, CTA para a pagina completa e
  ajuste para movimento reduzido via regra global existente.
- Link para a pagina de Eventos inserido nos headers e footers das paginas
  existentes; links atuais da Galeria foram ajustados para a pagina nova.
- `sitemap.xml` inclui a nova rota e a data da Home foi atualizada.
- Arquivos tocados ate aqui: `eventos/eventos.html`, `eventos/eventos.css`,
  `eventos/eventos-page.js`, `eventos/eventos.js`, `index.html`, `style.css`,
  `sitemap.xml`, os demais HTML existentes com navegacao/rodape e este
  checkpoint. A auditoria, a correcao do achado e a validacao visual foram
  concluidas.

### Fechamento da tarefa — auditoria e validacao

- Corrigida a incompatibilidade entre o cadastro de Eventos e o template dos
  cards: `eventos/eventos.js` agora usa `.events-page-image-link` e
  `.events-page-image img`, permitindo a montagem correta da pagina dedicada.
- `node --check eventos/eventos.js` e `node --check eventos/eventos-page.js`
  passaram.
- O Prettier 3.6.2 confirmou a formatacao de `eventos/eventos.js`,
  `eventos/eventos-page.js`, `eventos/eventos.css` e `eventos/eventos.html`.
- `git diff --check` passou; os avisos de LF/CRLF sao esperados neste ambiente.
- A auditoria de `href` e `src` locais em todas as paginas HTML passou. As
  URLs absolutas especificas do deploy no `404.html` foram normalizadas para
  a verificacao local.
- A validacao headless passou nos breakpoints 390, 768, 1440, 1920 e 3840 px,
  sem overflow horizontal. A pagina dedicada exibiu dois cards e um H1,
  carregou as imagens, manteve busca/filtros condicionais e confirmou o
  lightbox com navegacao por seta e teclado. A Home exibiu os dois cards da
  vitrine, todos encaminhando para `eventos/eventos.html`.

### Estado final

- A tarefa da pagina dedicada de Eventos e da vitrine da Home esta concluida.
- Nao ha pendencias tecnicas conhecidas. Os campos de data, categoria e local
  continuam ocultos enquanto nao houver dados reais no cadastro.

## Atualizacao — titulos alinhados à Home

Data: 5 de outubro de 2026

- O primeiro evento usa o mesmo titulo exibido na Home: `Espaco do Clube de Ciencias`.
- O segundo evento usa o mesmo titulo exibido na Home: `Logo do Clube de Ciencias`.

## Atualizacao — cards orientados às artes dos eventos

Data: 5 de outubro de 2026

- A grade da pagina de Eventos passou a usar duas colunas em telas maiores,
  deixando os cards e as imagens mais amplos.
- As descricoes Lorem ipsum foram removidas do cadastro e da exibicao dos
  cards; a arte passa a ser o elemento principal para explicar cada evento.
- Os cards exibem somente um titulo curto, menor e com menos destaque visual.
- Os rotulos da vitrine de Eventos na Home tambem foram reduzidos para nao
  competir com as imagens.

## Atualizacao — headers de Eventos e Galeria

Data: 5 de outubro de 2026

- Removida a navegacao interna dos headers de `eventos/eventos.html` e
  `galeria/galeria.html`.
- Mantido somente o botao `Voltar para a pagina inicial`, ao lado da logo.
- Os titulos `Eventos` e `Galeria` agora usam o laranja institucional.
- O botao recebeu tratamento responsivo para continuar cabendo ao lado da
  logo em telas pequenas.

## Atualizacao — reorganizacao da Home e experiencias de visita

Data: 6 de outubro de 2026

- A sequencia principal da Home agora segue Sobre, Eventos, Agenda, Ensino,
  Projetos, Apoio, Biblioteca, Galeria e Contato.
- Eventos foi incluido como item direto do header da Home e recebeu a mesma
  navegacao sequencial no header da pagina dedicada.
- A antiga secao separada do Tour 360 foi substituida por um seletor no bloco
  de visita ao lado de Contato, com as opcoes Mapa, 360 graus e Por dentro.
  A opcao Por dentro usa um iframe panoramico do Google Maps fornecido pelo
  usuario, alem de manter um link para a Galeria do site.
- Foi adicionado um botao flutuante de seta para cima, disponivel em todas as
  paginas que carregam comum.js, com suporte a movimento reduzido.
- O hero inicial da Home passou a ocupar pelo menos toda a altura visivel em
  telas pequenas, medias e grandes (100svh).

## Atualizacao — disciplinas organizadas por turma

Data: 6 de outubro de 2026

- As paginas de Desenvolvimento de Sistemas, Administracao, Exatas e Humanas
  agora exibem as disciplinas separadas por ano e turma, permitindo que cada
  serie tenha uma grade diferente.
- A pagina de Alimentos passou a exibir a turma `2º ALI 2` com as oito
  disciplinas informadas, mantendo explicita a ausencia de disciplinas
  tecnicas identificadas na folha recebida.
- Cada bloco informa a turma e a quantidade de disciplinas, e os cartoes foram
  mantidos responsivos para telas menores.
- Arquivos principais alterados: `paginas.css` e as cinco paginas HTML dentro
  de `ensino-medio`.

## Atualizacao — simplificacao das paginas de cursos

Data: 6 de outubro de 2026

- Removido o bloco de orientacoes `Como saber mais`/`Antes de decidir seu
  caminho` de todas as paginas de cursos.
- O titulo de Desenvolvimento de Sistemas recebeu ajuste responsivo para
  permanecer em uma unica linha, reduzindo a fonte quando necessario.

## Atualizacao — botao de opiniao reposicionado

Data: 6 de outubro de 2026

- O botao flutuante da Pesquisa de opiniao foi movido para o canto inferior
  direito, em formato compacto, inspirado no posicionamento do VLibras.
- A seta de voltar ao topo permanece abaixo dele, no mesmo lado, sem
  sobreposicao, e o botao de opiniao continua levando ao formulario externo.

## Atualizacao — alinhamento com o botao VLibras

Data: 6 de outubro de 2026

- O botao de opiniao passou a ter formato quadrado com bordas levemente
  arredondadas.
- Depois que o VLibras carrega, a posicao do botao de opiniao e calculada para
  ficar logo abaixo do botao do VLibras e acompanhar redimensionamentos da tela.
- O balão informativo continua aparecendo do lado esquerdo do botao.

## Atualizacao — projetos do Clube Little Scientists

Data: 6 de outubro de 2026

- A pagina da professora Marlene agora apresenta quatro projetos em
  desenvolvimento com descricoes completas: minifoguetes e reflorestamento,
  Jardim das Sensacoes, Horta Escolar e Compostagem, e Estufa e Cisterna.
- A proposta registra que o clube existe desde 2023 e informa esse dado nas
  informacoes rapidas.
- Foi criado um atalho `Projetos` no header da pagina, com rolagem ajustada,
  e a grafia do nome `Little Scientists` foi corrigida no conteudo e nos
  metadados.

## Atualizacao — identificacao das imagens da pagina da Marlene

Data: 6 de outubro de 2026

- A imagem da horta em pneus foi identificada como `Jardim das Sensacoes`.
- O canteiro de cultivo foi identificado como `Horta Escolar e Compostagem`.
- A estrutura de observacao foi identificada como `Casa das Abelhas`.
- A imagem da estufa foi mantida como `Estufa`, com a descricao ligada ao
  apoio as pesquisas e a producao de mudas.

## Atualizacao — textos nos cards de imagens da Marlene

Data: 6 de outubro de 2026

- As descricoes completas foram colocadas nos respectivos cards de imagens da
  galeria: Jardim das Sensacoes, Horta Escolar e Compostagem, Casa das Abelhas
  e Estufa.
- O card de cada registro agora apresenta a imagem e o texto correspondente
  dentro da opcao `Saiba mais`.

## Atualizacao — conteudo reunido nos cards dos projetos da Marlene

Data: 6 de outubro de 2026

- Os cards de texto duplicados da parte superior foram removidos.
- A galeria passou a concentrar a imagem, o titulo e as informacoes de cada
  projeto ou estrutura correspondente.
- O registro visual dos minifoguetes foi adicionado com sua descricao completa,
  para que nenhum dos projetos em desenvolvimento fique sem informacao.

## Atualizacao — avisos de informacoes em atualizacao em RPG e Robotica

Data: 6 de outubro de 2026

- Os blocos finais das paginas de RPG e Robotica agora indicam que novas
  informacoes serao publicadas assim que forem confirmadas pela equipe do
  colegio.
- Foram mantidos os conteudos ja existentes, sem inventar horarios,
  responsaveis ou resultados ainda nao informados.

## Atualizacao — retornos contextuais da navegacao

Data: 7 de outubro de 2026

- Os botoes Home, logos e marcas de retorno das paginas internas agora levam
  para a secao correspondente da Home: Sobre, Eventos, Ensino, Projetos,
  Apoio, Biblioteca e Galeria.
- Os retornos entre paginas relacionadas tambem preservam o contexto: Clubes
  retorna para `clube-de-ciencias.html#clubes`, cursos tecnicos para
  `ensinotecnico.html#cursos` e areas do Ensino Regular para
  `ensinoregular.html#areas`.
- O breadcrumb de Eventos foi alinhado ao mesmo destino `#eventos`.
- A validacao estatica confirmou que os links principais restantes sem ancora
  pertencem as paginas institucionais que retornam legitimamente ao inicio da
  Home ou ao topo da propria pagina.

## Atualizacao — headers simplificados de Eventos e Galeria

Data: 7 de outubro de 2026

- Os headers de `eventos/eventos.html` e `galeria/galeria.html` agora exibem
  somente a marca e o botao de retorno contextual.
- O retorno de Eventos aponta para `../index.html#eventos`; o retorno da
  Galeria aponta para `../index.html#galeria`.
- A navegacao completa e o menu Explorar foram removidos do header de Eventos,
  mantendo o mesmo padrao visual ja usado na Galeria.

## Atualizacao — retorno pelo historico em Eventos e Galeria

Data: 7 de outubro de 2026

- Os botoes dos dois headers agora exibem `Voltar ao início`.
- Ao clicar, o navegador retorna pela sessao anterior (`history.back()`),
  preservando a pagina e a posicao em que o usuario estava.
- Os links `#eventos` e `#galeria` permanecem como fallback para acesso direto.

## Atualizacao — aba Entrada na localizacao

Data: 7 de outubro de 2026

- A aba de localizacao da Home agora possui a opcao `Entrada` entre `360°` e
  `Por dentro`.
- A nova aba usa o iframe panoramico do Google Maps fornecido para a entrada
  da escola e foi integrada ao mesmo sistema de abas e navegacao por teclado.

## Atualizacao — imagens do Apoio

Data: 7 de outubro de 2026

- As seis fotos adicionadas em `apoio/imgs-apoio` foram preservadas e receberam
  versoes redimensionadas para 600 px e 1600 px, com nomes descritivos.
- A pagina `apoio/apoio.html` recebeu seis cards de imagens distribuidos pela
  introducao, pilares, estrategias e secao `Registros`, com textos
  alternativos, legendas, `srcset` responsivo e ampliacao pelo lightbox
  compartilhado do site.
- O link `Registros` foi incluido no header da pagina Apoio.

## Atualizacao — imagens do Apoio distribuidas pelo conteudo

Data: 7 de outubro de 2026

- As fotos deixaram de ficar concentradas em uma unica grade.
- Uma imagem foi colocada na introducao, duas na secao `Como funciona`, uma
  em `Estrategias` e duas permaneceram em `Registros`.
- O lightbox e os tamanhos responsivos foram mantidos em todos os cards.

## Atualizacao — imagens alinhadas ao conteudo e capa do Apoio

Data: 7 de outubro de 2026

- A foto de alfabetizacao passou a ser a capa visual do hero do Apoio.
- A introducao usa a foto dos cartoes; `Como funciona` usa as fotos de letras
  e acompanhamento; `Estrategias` usa a explicacao de matematica; e
  `Registros` usa o material concreto de matematica.
- Cada foto ficou associada ao trecho que melhor explica seu uso, com legenda,
  texto alternativo e ampliacao preservados.

## Atualizacao — compactacao adicional de Sobre Nos

Data: 7 de outubro de 2026

- Reduzidos os espacos verticais da introducao, historia, iniciativas,
  galeria, perfil e encerramento da pagina `sobrenos/sobrenos.html`.
- Ajustados os espacos especificos para celular e telas grandes, evitando que
  a versao 2K/4K crie blocos excessivamente altos.
- Mantidas as ancoras, a leitura dos textos, a responsividade e a hierarquia
  visual da pagina.

## Atualizacao — imagem principal de Sobre Nos reduzida

Data: 7 de outubro de 2026

- A imagem principal da introducao foi reduzida para ocupar menos espaco no
  desktop e no celular, mantendo seu alinhamento e a legenda sobreposta.

## Atualizacao — breadcrumb removido de Eventos

Data: 7 de outubro de 2026

- Removido o bloco `Início / Eventos` da pagina `eventos/eventos.html` para
  deixar o conteudo mais direto depois do header.

## Atualizacao — padronizacao das imagens do Apoio

Data: 7 de outubro de 2026

- As imagens de conteudo receberam versoes recortadas no mesmo formato 3:2,
  com arquivos de 600 x 400 e 1600 x 1067.
- Os cards agora usam a mesma altura visual no desktop e no celular, mantendo
  o recorte central e evitando blocos com tamanhos diferentes.
- A capa permanece em formato panoramico para preencher o hero.

## Atualizacao — espacos da pagina Apoio ajustados

Data: 7 de outubro de 2026

- Reduzidos os espacos verticais entre introducao, pilares, estrategias,
  registros e chamada final.
- Diminuida a distancia entre as colunas de conteudo para evitar areas vazias
  excessivas em telas largas.
- A imagem final passou a ocupar uma largura maior e os ajustes de 1600 px e
  4K foram compactados para manter a pagina mais continua.

## Atualizacao — centralizacao de Registros do Apoio

Data: 7 de outubro de 2026

- O titulo, a identificacao da secao e os elementos do bloco `Registros do
  Apoio` foram centralizados.
- O texto descritivo permanece justificado.
- A imagem abaixo do texto passou a ocupar uma coluna única e ficou centralizada
  junto com o restante da seção.

## Atualizacao — espaco visual em Apoio a aprendizagem

Data: 7 de outubro de 2026

- O titulo da introducao foi alinhado verticalmente ao conteudo e a imagem da
  coluna ao lado, reduzindo o espaco vazio percebido nessa parte da pagina.

## Atualizacao — imagem de Registros centralizada

Data: 7 de outubro de 2026

- A imagem de `Registros do Apoio` foi centralizada abaixo do titulo, mantendo
  a largura menor de 640 px.

## Atualizacao — capa do Apoio simplificada

Data: 7 de outubro de 2026

- Removidos da capa o texto `Reforco e acolhimento`, a frase descritiva e o
  botao de chamada.
- A capa agora apresenta somente a imagem e o titulo `Apoio`.

## Atualizacao — auditoria geral de navegacao e responsividade

Data: 7 de outubro de 2026

- A auditoria das paginas HTML confirmou um `h1` por pagina, IDs sem
  duplicacao, imagens com `alt`, links locais e ancoras existentes.
- Os arquivos JavaScript passaram no `node --check`.
- A responsividade foi revisada nos estilos globais e especificos; os maiores
  respiros da pagina Apoio foram reduzidos e as imagens foram padronizadas.
- Foram removidas versoes antigas nao utilizadas das imagens derivadas do
  Apoio; os seis arquivos originais foram preservados.
