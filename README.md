# Teste Front-End — Econverse

Vitrine de produtos desenvolvida em **React + TypeScript**, seguindo o layout do Figma.

🔗 **Deploy:** [Teste-front-end](https://teste-front-end-pi-five.vercel.app/)


## Tecnologias

- React 19 + TypeScript
- Vite
- Sass (CSS Modules)
- Sem bibliotecas de UI

## Como rodar o projeto

Pré-requisito: Node.js 20.19+ ou 22.12+

```bash
# clonar o repositório
git clone https://github.com/inagakidev/teste-front-end.git
cd teste-front-end

# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev

# gerar o build de produção
npm run build

# visualizar o build localmente
npm run preview
```

## Funcionalidades

- Listagem de produtos consumindo o JSON da API
- Modal com detalhes do produto ao clicar no card (fecha com X, clique fora ou ESC)
- Seletor de quantidade no modal
- Carrossel de produtos com setas e scroll nativo
- Estados de carregamento e erro
- Formulário de newsletter com validação

## Estrutura de pastas

```
src/
├── assets/          # ícones e imagens
├── components/
│   ├── layout/      # Header, Footer, Newsletter
│   ├── sections/    # seções da página (vitrine, banners, categorias...)
│   └── ui/          # componentes reutilizáveis (card, modal, sectionTitle...)
├── hooks/           # useProducts
├── services/        # busca dos produtos
├── styles/          # variáveis e estilos globais
├── types/           # tipagem dos produtos
└── utils/           # formatPrice
```

## Decisões técnicas

- **Proxy para CORS:** a API não permite requisições do navegador por outro domínio. Usei o proxy do Vite em desenvolvimento e um rewrite da Vercel em produção.
- **Preço em centavos:** o JSON retorna o preço em centavos (ex.: `149990`), convertido para reais pela função `formatPrice`.
- **Preço antigo e parcelamento:** o JSON não traz esses dados. O preço antigo é simulado (+7%) e o parcelamento é calculado em 2x, para seguir o layout.
- **Abas da vitrine:** mudam apenas o destaque visual, pois o JSON não traz categoria dos produtos.
- **Uma única requisição:** os produtos são buscados uma vez no `App` e distribuídos para as três vitrines.
- **Acessibilidade e SEO:** HTML semântico, hierarquia de títulos, `aria-labels`, navegação por teclado no modal e meta tags.

## Autora

Amanda Inagaki — [LinkedIn](https://www.linkedin.com/in/amanda-inagaki) · [GitHub](https://github.com/inagakidev)