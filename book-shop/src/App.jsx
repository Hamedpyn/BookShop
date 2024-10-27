import './App.css'
import 'leaflet/dist/leaflet.css';
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import UserBasketContext from "./Contexts/UserBasketContext"
import { useState } from 'react';
import { LoginModal } from './Components/LoginModal/LoginModal';

function App() {
  const [bookBasket,setBookBasket]=useState([])
  const [openModal,setOpenModal]=useState(false)

  let router = useRoutes(routes)
  return (
    <UserBasketContext.Provider value={{ bookBasket, setBookBasket, isModal, setIsModal,openModal,setOpenModal }}>
      <Header />
      {router}
      {openModal && (
        <LoginModal />
      )}
      <Footer />
    </UserBasketContext.Provider>
  )
}

export default App
