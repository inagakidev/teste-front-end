import Header from "./components/layout/header/header"
import Categories from "./components/sections/categories/categories"
import HeroBanner from "./components/sections/heroBanner/heroBanner"
import "./styles/app.scss"
import { useProducts } from "./hooks/useProducts"
import type { Product } from "./types/product"
import ProductShelf from "./components/sections/productShelf/productShelf"

function App() {
  const { products, loading, error } = useProducts()

  function handleSelectProduct(product: Product) {
    console.log('abrir modal com:', product)
  }

  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Categories />

        {loading && <p className="container">Carregando produtos...</p>}
        {error && <p className="container">{error}</p>}

        {!loading && !error && (
          <ProductShelf
            id="shelf-1"
            products={products}
            onSelectProduct={handleSelectProduct}
            showTabs
          />
        )}
      </main>
    </>
  )
}

export default App