import "./styles/app.scss"
import { useProducts } from "./hooks/useProducts";

function App() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Carregando produtos...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <p>{products.length} produtos carregados.</p>
      <p>{products[0]?.productName}</p>
    </div>
  )
}

export default App