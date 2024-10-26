import './App.css'
import 'leaflet/dist/leaflet.css';
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import UserBasketContext from "./Contexts/UserBasketContext"
import { useState } from 'react';
function App() {
  const [bookBasket,setBookBasket]=useState([])

  let router = useRoutes(routes)
  return (
    <UserBasketContext.Provider value={{bookBasket,setBookBasket}}>
      <Header />
      {router}
      <Footer />
    </UserBasketContext.Provider>
  )
}

export default App
