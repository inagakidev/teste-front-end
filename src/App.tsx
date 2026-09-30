import Header from "./components/layout/header/header"
import Categories from "./components/sections/categories/categories"
import HeroBanner from "./components/sections/heroBanner/heroBanner"
import "./styles/app.scss"
import { useProducts } from "./hooks/useProducts"
import type { Product } from "./types/product"
import ProductShelf from "./components/sections/productShelf/productShelf"
import ProductModal from "./components/ui/productModal/productModal"
import { useState } from "react"
import PartnerBanners from "./components/sections/partnerBanners/partnerBanners"


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
          <>
            <ProductShelf id="shelf-1" products={products} onSelectProduct={setSelectedProduct} showTabs />
            <PartnerBanners id="partners-1" />
            <ProductShelf id="shelf-2" products={products} onSelectProduct={setSelectedProduct} />
            <PartnerBanners id="partners-2" />
            {/* Navegue por marcas */}
            <ProductShelf id="shelf-3" products={products} onSelectProduct={setSelectedProduct} />
          </>
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