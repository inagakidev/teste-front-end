import Header from "./components/layout/header/header"
import Categories from "./components/sections/categories/categories"
import HeroBanner from "./components/sections/heroBanner/heroBanner"
import "./styles/app.scss"

function App() {


  return (
    <>
      <Header/>
      <main>
        <HeroBanner/>
        <Categories/>
      </main>
    </>
  )
}

export default App