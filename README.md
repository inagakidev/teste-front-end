# Teste Front-End — Econverse

Vitrine de produtos desenvolvida em **React + TypeScript**, seguindo o layout do Figma.

🔗 **Deploy:** [teste-front-end-pi-five.vercel.app](https://teste-front-end-pi-five.vercel.app/)

## Tecnologias

- React 19 + TypeScript
- Vite
- Sass (CSS Modules)
- ESLint e Prettier
- Sem bibliotecas de UI

## Como rodar o projeto

Pré-requisito: **Node.js 20.19+ ou 22.12+**

```bash
# clonar o repositório
git clone https://github.com/inagakidev/teste-front-end.git
cd teste-front-end

# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev
```

Depois, acesse o endereço exibido no terminal (por padrão, `http://localhost:5173`).

## Como compilar

```bash
# verificar os tipos e gerar o build de produção na pasta dist/
npm run build

# visualizar o build de produção localmente
npm run preview
```

## Como testar

```bash
# verificar a qualidade do código
npm run lint

# verificar os tipos do TypeScript e se o projeto compila
npm run build
```

**Teste manual:**

1. Abra a página e confira se as três vitrines carregam os produtos.
2. Clique em um produto: o modal abre com o nome, a foto, o preço e a descrição daquele produto.
3. Altere a quantidade no modal com os botões − e +.
4. Feche o modal pelo X, clicando fora dele ou com a tecla ESC.
5. Use as setas da vitrine para navegar entre os produtos.
6. Clique em uma categoria ou aba e confira o destaque do item selecionado.
7. Envie o formulário da newsletter com os campos vazios (aparece o aviso de campo obrigatório) e depois preenchido (aparece a mensagem de sucesso).

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

## Scripts disponíveis

| Comando           | O que faz                                        |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento             |
| `npm run build`   | Verifica os tipos e gera o build de produção     |
| `npm run preview` | Serve o build de produção localmente             |
| `npm run lint`    | Analisa o código com o ESLint                    |
| `npm run format`  | Formata o código com o Prettier                  |

## Decisões técnicas

- **Proxy para CORS:** a API não permite requisições do navegador vindas de outro domínio. Usei o proxy do Vite em desenvolvimento e um rewrite da Vercel em produção (`vercel.json`).
- **Preço em centavos:** o JSON retorna o preço em centavos (ex.: `149990`), convertido para reais pela função `formatPrice`.
- **Preço antigo e parcelamento:** o JSON não traz esses dados. O preço antigo é simulado (+7%) e o parcelamento é calculado em 2x, para seguir o layout.
- **Abas da vitrine:** mudam apenas o destaque visual, pois o JSON não traz a categoria dos produtos.
- **Uma única requisição:** os produtos são buscados uma vez no `App` e distribuídos para as três vitrines.
- **Acessibilidade e SEO:** HTML semântico, hierarquia de títulos, `aria-label`, navegação por teclado no modal e meta tags.

## Autora

Amanda Inagaki — [LinkedIn](https://www.linkedin.com/in/amanda-inagaki) · [GitHub](https://github.com/inagakidev)