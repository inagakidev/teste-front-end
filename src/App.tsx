import Header from "./components/layout/header/header"
import HeroBanner from "./components/sections/heroBanner/heroBanner"
import "./styles/app.scss"

function App() {


  return (
    <>
      <Header/>
      <main>
        <HeroBanner/>
      </main>
    </>
  )
}

export default App