import Header from "./components/layout/header/header"
import Categories from "./components/sections/categories/categories"
import HeroBanner from "./components/sections/heroBanner/heroBanner"
import "./styles/app.scss"
import { useProducts } from "./hooks/useProducts"
import type { Product } from "./types/product"
import ProductShelf from "./components/sections/productShelf/productShelf"
import ProductModal from "./components/ui/productModal/productModal"
import { useState } from "react"


function App() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  function handleSelectProduct(product: Product) {
    setSelectedProduct(product)
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

      <ProductModal
        key={selectedProduct?.productName}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}

export default App