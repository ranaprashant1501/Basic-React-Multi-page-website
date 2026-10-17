import { Route, Routes } from "react-router-dom"
import Home from "./assets/Pages/Home"
import About from "./assets/Pages/About"
import Contact from "./assets/Pages/Contact"
import Navbar from "./Components/Navbar"
import Product from "./assets/Pages/Products/Product"
import Men from "./assets/Pages/Products/Men"
import Women from "./assets/Pages/Products/Women"
import Error404 from "./assets/Pages/Error404"
import Footer from "./Components/Footer"


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
