import { useState } from 'react'
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import NavBar from "./Componenets/NavigationBar/NavBar.jsx"
import ShopCategary from './pages/ShopCategary.jsx'
import Shop from './pages/Shop.jsx'
import Products from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import LoginSign from './pages/LoginSignup.jsx'
import men_banner from "./Componenets/Assets/banner_mens.png"
import women_banner from "./Componenets/Assets/banner_women.png"
import kids_banner from "./Componenets/Assets/banner_kids.png"
import './index.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    
    <NavBar/>

    <Routes>

    <Route path='/' element={<Shop/>}/>

    <Route path='/mens' element={<ShopCategary banner={men_banner} categary="mens"/>}/>

    <Route path='/womens' element={<ShopCategary banner={women_banner} categary="womens" />}/>

    <Route path='/kids' element={<ShopCategary banner={kids_banner} categary="kids" />}/>

    <Route path='/Products' element={<Products />}/>


    <Route path='productId' element={<Products />}/>

    <Route path='/cart' element={<Cart />}/>

    <Route path='/login' element={<LoginSign />}/>

    </Routes>
    
    </BrowserRouter>
   


          </>
  )
}

export default App
