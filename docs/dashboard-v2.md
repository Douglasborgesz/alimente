# Guia de Padronização do Dashboard: Projeto Alimente

Este documento serve como o manual mestre de design e componentes para garantir a consistência visual de todas as interfaces do dashboard. Utilize as diretrizes abaixo para construir qualquer nova tela.

---

## 1. Identidade Visual (Design System)

### 1.1 Paleta de Cores
- **Action/Highlight:** `#FFD700` (Amarelo Alimente) — Destaque, botões primários e estados ativos.
- **Side Navigation:** `#1A1A1A` (Preto Fosco) — Fundo da sidebar e elementos de autoridade.
- **Background:** `#F9FAFB` (Cinza Ultra-claro) — Fundo das páginas para contraste.
- **Surface:** `#FFFFFF` (Branco) — Cards, tabelas e áreas de conteúdo principal.
- **Status:**
    - Verde: Sucesso/Concluído.
    - Amarelo Suave: Pendente/Aguardando.
    - Vermelho/Rosa: Erro/Cancelado.

### 1.2 Tipografia e Espaçamento
- **Fonte:** Sans-serif (Preferencialmente Inter ou Roboto).
- **H1/H2:** Bold, Cor `#1A1A1A`.
- **Corpo:** Regular, Cor `#4B5563` (Cinza escuro para leitura confortável).
- **Arredondamento:** - Cards e Modais: `rounded-3xl` (32px).
    - Botões e Inputs: `rounded-full` ou `rounded-xl`.
- **Bordas de Cards:** Cards principais devem usar `border border-neutral-200` como token padrão.
- **Sombras:** `shadow-sm` para estado normal e `shadow-xl` para hover em elementos clicáveis.

---

## 2. Componente Global: Sidebar Retrátil

A Sidebar deve ser persistente e possuir comportamento retrátil via JavaScript.

### 2.1 Estrutura e Estados
- **Estado Expandido:** Largura `w-64`. Exibe Ícone + Label do Menu.
- **Estado Retraído:** Largura `w-20`. Exibe apenas Ícones centralizados.
- **Comportamento:** Transição suave com `transition-all duration-300`.
- **Botão de Controle:** Ícone no topo que alterna entre os estados e ajusta a `margin-left` do conteúdo principal.

### 2.2 Navegação (Links)
1. **Dashboard**
2. **Minhas Doações**
3. **Histórico**
4. **Desempenho**
5. **Perfil**
6. **Configurações**
*O item correspondente à página atual deve estar em negrito com ícone em Amarelo (#FFD700).*

---

## 3. Estrutura de Layout e Grid

### 3.1 Cabeçalho da Página (Page Header)
- Localizado no topo da área de conteúdo (fora da sidebar).
- Título da seção (H1) à esquerda.
- Botão de ação primária (Ex: "+ Nova Doação") à direita, sempre em Amarelo com texto preto.

### 3.2 Sistema de Cards (Bento Grid)
- O conteúdo deve ser organizado em blocos brancos (`bg-white`) com bordas arredondadas largas.
- Utilize um sistema de grid responsivo (1 coluna em mobile, 2 ou 3 em desktop conforme a complexidade).
- Cards de métricas rápidas no topo devem usar estilo Glassmorphism ou bordas de destaque.

---

## 4. Responsividade e Comportamento

- **Desktop:** Sidebar lateral funcional (retrátil).
- **Mobile:** Sidebar é oculta. A navegação é movida para uma **Bottom Navigation Bar** fixa na base da tela, contendo apenas os ícones principais.
- **Interatividade:** Todos os elementos clicáveis devem ter feedback visual imediato (mudança de cor, escala ou sombra).
