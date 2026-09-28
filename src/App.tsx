import "./styles/app.scss"
import { useEffect } from "react";
import { getProducts } from "../services/api.ts";

function App() {
  useEffect(() => {
    getProducts()
      .then((products) => {
        console.log('Produtos:', products);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, []);

  return (
    <h1>Testando API</h1>
  )
}

export default App