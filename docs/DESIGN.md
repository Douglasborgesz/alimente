---
version: "alpha"
name: Alimente
description: >
  Plataforma de conexão entre doadores de alimentos (restaurantes, supermercados,
  feiras) e receptores (ONGs, bancos de alimentos, cozinhas comunitárias).
  Design orientado à ação social, acessibilidade e urgência positiva.

colors:
  primary: "#F5C518"
  on-primary: "#1A1A1A"
  secondary: "#1A1A1A"
  on-secondary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#1A1A1A"
  surface-variant: "#F9F9F9"
  on-surface-variant: "#4A4A4A"
  outline: "#E0E0E0"
  error: "#D32F2F"
  success: "#2E7D32"
  footer-bg: "#111111"
  on-footer: "#FFFFFF"
  hero-bg: "#F5C518"
  card-bg: "#FFFFFF"
  faq-accent: "#F5C518"
  cta-donate: "#1A1A1A"
  on-cta-donate: "#FFFFFF"
  cta-receive: "#FFFFFF"
  on-cta-receive: "#1A1A1A"

typography:
  display:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 2.75rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.25
  h3:
    fontFamily: Inter
    fontSize: 1.375rem
    fontWeight: 600
    lineHeight: 1.35
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.01em
  nav-link:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: 500
    lineHeight: 1
  button:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.005em

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
    fontStyle: "{typography.button}"
  button-primary-hover:
    backgroundColor: "#E6B800"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
    fontStyle: "{typography.button}"
  button-secondary-hover:
    backgroundColor: "#333333"
    textColor: "{colors.on-secondary}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    border: "2px solid {colors.secondary}"
    rounded: "{rounded.full}"
    padding: "12px 26px"
    fontStyle: "{typography.button}"
  button-ghost-hover:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.on-surface}"
  nav-link:
    textColor: "{colors.on-surface}"
    fontStyle: "{typography.nav-link}"
  nav-link-hover:
    textColor: "{colors.primary}"
  card:
    backgroundColor: "{colors.card-bg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.outline}"
    shadow: "0 2px 12px rgba(0,0,0,0.06)"
  card-hover:
    backgroundColor: "#FFFDE7"
    shadow: "0 8px 32px rgba(245,197,24,0.18)"
    transform: "scale(1.03)"
  faq-item:
    backgroundColor: "{colors.faq-accent}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg} {spacing.xl}"
    border: "none"
  faq-item-open:
    backgroundColor: "#E6B800"
  header:
    backgroundColor: "{colors.surface}"
    height: "68px"
    padding: "0 {spacing.2xl}"
    shadow: "0 1px 0 {colors.outline}"
  footer:
    backgroundColor: "{colors.footer-bg}"
    textColor: "{colors.on-footer}"
    padding: "{spacing.3xl} {spacing.2xl}"
---

## Overview

**Alimente** é uma plataforma de impacto social com identidade visual que equilibra
**urgência positiva** e **confiança institucional**. O design comunica agilidade e
calor humano sem perder a seriedade exigida por entidades validadas (ONGs com CNPJ).

A linguagem visual orbita em torno de três pilares:

1. **Energia solar** — o amarelo vibrante (`#F5C518`) representa o calor da
   solidariedade e a urgência de agir; é a cor mais memorável e diferenciadora.
2. **Clareza de propósito** — tipografia pesada (Inter 800) no hero cria hierarquia
   imediata; o usuário sabe em 3 segundos o que a plataforma faz.
3. **Credibilidade institucional** — preto absoluto no rodapé e nos botões de CTA
   contrasta com o amarelo, sinalizando seriedade e rastreabilidade da cadeia de doação.

O tom geral é **otimista, direto e acessível** — sem jargões de startup, sem
sobriedade excessiva de governo. Pense numa campanha publicitária de bem-estar social
que também precisa ser funcional para usuários B2B (empresas doadoras).

---

## Colors

A paleta é minimalista: **1 cor de destaque + preto + branco**. Essa restrição
garante reconhecimento de marca consistente e alto contraste WCAG em todos os
contextos.

- **Primary `#F5C518`:** Amarelo solar — usado no fundo do Hero, nas seções "Como
  Funciona" e nos itens de FAQ. É a assinatura cromática do Alimente. Nunca usar como
  cor de texto sobre fundo branco (contraste insuficiente).
- **On-primary `#1A1A1A`:** Preto suave para texto e ícones sobre fundo amarelo.
  Passar sempre na verificação de contraste WCAG AA (mínimo 4.5:1).
- **Secondary `#1A1A1A`:** Botão "Quero Doar" / CTA de alta prioridade. Preto forte
  para máximo contraste sobre qualquer fundo claro.
- **Surface `#FFFFFF`:** Fundos de seções alternadas (Quem Somos, FAQ), cards e header.
- **Surface-variant `#F9F9F9`:** Hover de inputs, fundo sutil de estados inativos.
- **Footer-bg `#111111`:** Preto profundo no rodapé para encerrar visualmente a página
  e criar contraste dramático com o restante do conteúdo.
- **Outline `#E0E0E0`:** Bordas de cards e separadores. Usar com moderação.
- **Error `#D32F2F`:** Mensagens de validação em formulários (login/cadastro).
- **Success `#2E7D32`:** Confirmação de agendamento ou recebimento de doação.

> **Regra de acessibilidade:** Texto preto (`#1A1A1A`) sobre amarelo (`#F5C518`)
> atinge contraste 8.2:1 (passa WCAG AAA). Texto branco sobre preto (`#1A1A1A`)
> atinge 17.5:1. Nunca usar texto amarelo sobre branco ou vice-versa para conteúdo
> informacional.

---

## Typography

A fonte única **Inter** garante coesão e carregamento rápido (Google Fonts, subset
Latin). A escala tipográfica é grande e assertiva — o Alimente fala alto.

- **Display / H1:** Inter 800, 2.75–3.5rem, tracking `-0.02em` — exclusivo para o
  título hero "Conectando quem tem com quem precisa". Nunca usar em mais de uma
  ocorrência por tela.
- **H2:** Inter 700, 2rem — títulos de seção (Quem Somos, Como Funciona, FAQ).
  Sempre centralizados nas seções amarelas; alinhados à esquerda nas seções brancas.
- **H3:** Inter 600, 1.375rem — títulos dos cards "Como Funciona" e perguntas do FAQ.
- **Body-lg:** Inter 400, 1.125rem, `line-height: 1.7` — subtítulo do hero e parágrafos
  de destaque em "Quem Somos".
- **Body-md:** Inter 400, 1rem — corpo de texto padrão, descrições de cards.
- **Button:** Inter 700, 1rem — todos os botões CTA. Nunca usar peso menor que 600
  em botões primários.
- **Nav-link:** Inter 500, 0.9375rem — links do menu de navegação.

> **Hierarquia:** Em cada seção deve haver exatamente um elemento H2, seguido de
> corpo de texto ou cards. Não usar H1 fora do Hero.

---

## Layout

O layout é baseado em um **grid de 12 colunas** com `max-width: 1200px` centralizado
e `padding` lateral de `24px` em mobile.

- **Seções full-width:** Hero (amarelo), Como Funciona (amarelo), Footer (preto) —
  `width: 100vw`, sem max-width no container externo, apenas no conteúdo interno.
- **Seções contidas:** Header, Quem Somos, FAQ — conteúdo dentro do container
  de 1200px.
- **Header:** `height: 68px`, `position: sticky`, `top: 0`, `z-index: 100`.
  Layout interno: `logo | nav (center) | cta-button (right)` usando flexbox com
  `justify-content: space-between`.
- **Hero:** `min-height: 560px`, dois colunas (60% texto / 40% imagem) em desktop;
  coluna única em mobile (texto acima, imagem abaixo). `padding-top: 64px`,
  `padding-bottom: 64px`.
- **Quem Somos:** Grid 2 colunas iguais (50/50), `gap: 64px`. Em mobile, imagem acima
  do texto.
- **Como Funciona:** Flex row com 3 cards de igual largura, `gap: 24px`. Em mobile,
  stack vertical.
- **FAQ:** Coluna única, `max-width: 720px`, centralizada. Items de acordeão com
  `gap: 8px`.
- **Espaçamento entre seções:** `padding: 80px 0` como padrão.

---

## Elevation & Depth

O sistema de sombras é **minimalista e funcional** — sombras aparecem apenas para
indicar interatividade ou separação lógica, nunca como decoração.

- **Nível 0 — Flat:** Cards FAQ, fundo do Hero. Sem sombra. O contraste de cor
  faz o trabalho de separação.
- **Nível 1 — Subtle `0 2px 12px rgba(0,0,0,0.06)`:** Cards "Como Funciona" no estado
  padrão. Sombra quase imperceptível que eleva levemente o card do fundo amarelo.
- **Nível 2 — Raised `0 8px 32px rgba(245,197,24,0.18)`:** Estado de hover dos cards.
  A sombra usa o amarelo primário com opacidade baixa, criando um halo dourado que
  reforça a identidade visual.
- **Nível 3 — Overlay `0 20px 48px rgba(0,0,0,0.14)`:** Modais, dropdowns e drawers
  (usados nas telas internas pós-login, não na landing page).
- **Header:** `box-shadow: 0 1px 0 #E0E0E0` — linha sutil de separação ao rolar a
  página. Não usar sombra volumétrica no header.

> **Regra:** Nunca empilhar mais de um nível de elevação no mesmo elemento. Um card
> levantado (nível 1) dentro de uma seção amarela é suficiente — não adicionar borda
> e sombra simultaneamente.

---

## Components

### Botões

Existem três variantes de botão na landing page, cada uma com propósito semântico
distinto:

- **`button-primary` (Label: "Transforme seu Excedente em Impacto Agora"):**
  Fundo amarelo `#F5C518`, texto preto. Usado no header ("Login") e como destaque
  secundário. Border-radius `full` (pílula). Padding `14px 28px`.
- **`button-secondary` (Label: "Quero Doar"):**
  Fundo preto `#1A1A1A`, texto branco. CTA de máxima prioridade no Hero — representa
  o fluxo de doador. Border-radius `full`.
- **`button-ghost` (Label: "Quero Receber"):**
  Fundo branco, borda preta `2px solid #1A1A1A`, texto preto. CTA secundário no Hero.
  Hover: fundo `surface-variant`. Border-radius `full`.

Todos os botões devem ter `min-width: 180px` para evitar truncamento em traduções
e `transition: all 200ms ease` para transições suaves.

### Navigation Links

Links do menu (`nav-link`): texto `#1A1A1A`, `font-weight: 500`. Hover muda a cor
para `{colors.primary}` (#F5C518) com transição `color 150ms ease`. **Não usar
underline** — a mudança de cor é o indicador de interação. Os três links são:
"Quem Somos", "Como Funciona", "FAQ".

### Cards "Como Funciona"

Três cards horizontais em fundo amarelo:

- Background: branco `#FFFFFF`
- Border-radius: `24px` (`{rounded.xl}`)
- Padding: `32px`
- Sombra padrão: nível 1 (`0 2px 12px rgba(0,0,0,0.06)`)
- **Hover:** `transform: scale(1.03)`, sombra nível 2 (halo dourado),
  background muda para `#FFFDE7` (amarelo muito claro). Transição:
  `all 250ms cubic-bezier(0.4, 0, 0.2, 1)`.
- Estrutura interna: ícone (48×48px) → H3 → body-md.

### FAQ Acordeões

- Item fechado: fundo amarelo `#F5C518`, padding `20px 32px`, border-radius `12px`.
- Ícone chevron à direita, rotaciona `180deg` ao abrir (`transition: 300ms ease`).
- Item aberto: fundo `#E6B800` (amarelo mais escuro), corpo de texto expande com
  `max-height` e `opacity` animation (`300ms ease-in-out`).
- Espaçamento entre items: `8px`.

### Logo (Placeholder)

Área de logo: `40px × 40px`, border-radius `8px`, fundo amarelo temporário.
Em produção, substituir pelo logotipo SVG do Alimente com `height: 36px`,
`width: auto`.

### Imagens Placeholder

- **Hero (direita):** Retângulo `480×400px`, border-radius `20px`,
  background `rgba(255,255,255,0.5)`. Em produção: foto ou ilustração de alta
  qualidade mostrando ato de doação ou alimento fresco.
- **Quem Somos (esquerda):** Quadrado `440×440px`, border-radius `16px`,
  background `#F5C518`. Em produção: foto editorial da equipe ou de uma entrega
  de doação real.

---

## Do's and Don'ts

**✅ Fazer:**
- Usar amarelo `#F5C518` como fundo de seções alternadas para criar ritmo visual
  na página (Hero → branco → amarelo → branco → amarelo → preto).
- Manter hierarquia tipográfica rigorosa: apenas um H1 (Hero), H2 por seção,
  H3 dentro de cards.+
- Aplicar `transition` em todos os elementos interativos (botões, cards, links,
  FAQ). Velocidade padrão: `200–300ms ease`.
- Validar contraste de texto em todos os backgrounds antes de publicar.
- Usar Inter em todos os textos; importar apenas os pesos 400, 500, 600, 700 e 800.
- Garantir que os dois CTAs do Hero ("Quero Doar" e "Quero Receber") levem ao
  mesmo fluxo unificado de Login/Cadastro.

**❌ Não Fazer:**
- Não usar texto amarelo `#F5C518` sobre fundo branco — contraste 1.9:1,
  reprova WCAG.
- Não misturar border-radius — cards usam `xl (24px)`, botões usam `full`,
  FAQ usa `md (12px)`. Não inventar valores fora da escala.
- Não adicionar mais de 3 CTAs na mesma tela — o foco deve estar em
  "Quero Doar" e "Quero Receber".
- Não usar sombras decorativas — sombra somente onde há elevação real ou
  interatividade.
- Não inserir animações de entrada (scroll-triggered) na versão MVP — manter
  apenas hover states para reduzir complexidade de implementação.
- Não redimensionar tipografia fora da escala definida. Se precisar de texto
  menor que `body-sm` (0.875rem), revisar o design, não a escala.
- Não usar fonte diferente de Inter em nenhum elemento da landing page.

---

## Agent Prompt Guide

Ao gerar ou editar código para o Alimente com agentes de IA (Claude Code, Cursor,
Gemini CLI), inclua as seguintes instruções contextuais:

1. **Stack:** HTML semântico + CSS puro (ou Tailwind se disponível). Sem
   dependências de componentes externos na landing page.
2. **Responsividade:** Mobile-first. Breakpoints: `sm: 640px`, `md: 768px`,
   `lg: 1024px`, `xl: 1200px`.
3. **Acessibilidade:** Todo botão CTA deve ter `aria-label` descritivo. Imagens
   com `alt` significativo. FAQ com `role="region"` e `aria-expanded`.
4. **Semântica HTML:** Header usa `<header>`, seções usam `<section id="...">`,
   rodapé usa `<footer>`. Nav usa `<nav>` com `<ul>/<li>/<a>`.
5. **Animações:** Usar `prefers-reduced-motion` media query para desabilitar
   transições para usuários com preferência por redução de movimento.
6. **Fontes:** `<link>` para Inter do Google Fonts com pesos 400;500;600;700;800.
   Adicionar `font-display: swap`.
7. **Cores:** Usar as variáveis CSS definidas neste arquivo como fonte da verdade.
   Exemplo: `--color-primary: #F5C518;`.
