<div align="center">

# Pokédex

</div>

## Descrição 📝
Esta aplicação é uma Pokédex interativa, criada como parte de uma quest do módulo de React avançado no curso Devquest. Ela permite aos usuários explorar detalhes de Pokémon, como tipos, habilidades e movimentos, com funcionalidades adicionais para filtragem e carregamento dinâmico.

## Funcionalidades ✨
- **Visualização de Pokémon**: Exibe uma lista de Pokémon com nome, imagem e tipos.
- **Detalhes de Pokémon**: Ao clicar em um Pokémon, são mostrados detalhes como habilidades e movimentos.
- **Filtro por Tipo**: Permite filtrar a lista de Pokémon por seus tipos.
- **Carregamento Dinâmico**: Carrega mais Pokémon conforme solicitado pelo usuário.
- **Modo Escuro/Claro**: Alternância entre temas de interface (dark/light).

## Ferramentas Utilizadas 🛠️
- **React**: Biblioteca para criar interfaces de usuário dinâmicas e reativas.
- **Styled-Components**: Para estilização baseada em componentes, permitindo tema dinâmico e estilo modularizado.
- **Vite**: Ferramenta de construção para desenvolvimento front-end rápido e otimizado.
- **PokéAPI**: API pública usada para obter os dados dos Pokémon.
- **React Router DOM**: Gerenciamento de rotas para criar uma SPA (Single Page Application), permitindo navegação sem recarregar a página.

### Por que estas ferramentas ⁉️
- **React**: Escolhido pela sua eficiência e vasto ecossistema.
- **Styled-Components**: Oferece um sistema de estilos modular e com suporte a temas.
- **Vite**: Proporciona velocidade no desenvolvimento e configurações simples.
- **PokéAPI**: Uma API confiável e rica em dados de Pokémon.
- **React Router DOM**: Necessário para gerenciar rotas e criar uma experiência de SPA moderna.

## Decisões de Planejamento e Execução 📗
1. **Carregamento Dinâmico**:
   - Decidimos implementar carregamento dinâmico para melhorar a experiência do usuário e otimizar o consumo de dados.
2. **Filtro por Tipo**:
   - A funcionalidade de filtragem foi adicionada para facilitar a navegação e melhorar a usabilidade.
3. **Tema Escuro/Claro**:
   - Foi incluída a alternância de tema para atender preferências dos usuários e melhorar a acessibilidade.

## Passo a Passo para Rodar o Projeto 🚀

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd quest-teste-tecnico-pokedex
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra o navegador e vá para `http://localhost:5173`.

## Estrutura do Projeto 🗂️
- **src/**: Contém o código-fonte principal da aplicação.
  - **components/**: Componentes reutilizáveis, como `Header`, `Filter`, e `Card`.
  - **contexts/**: Contextos para gerenciamento de estado, como tema.
  - **assets/**: Arquivos estáticos, como imagens.

---

Este projeto foi desenvolvido como parte de uma quest do módulo de React avançado no curso Devquest para avaliar habilidades em React e desenvolvimento front-end.
