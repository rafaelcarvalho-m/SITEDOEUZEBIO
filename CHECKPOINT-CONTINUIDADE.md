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
