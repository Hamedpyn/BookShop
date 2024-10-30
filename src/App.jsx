/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import 'leaflet/dist/leaflet.css';
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import UserBasketContext from "./Contexts/UserBasketContext"
import { useEffect, useRef, useState } from 'react';
import { FaChevronUp } from "react-icons/fa";
import { LoginModal } from './Components/LoginModal/LoginModal';
import { motion } from "framer-motion";
import { Spinner } from "flowbite-react";

function App() {
  const [bookBasket, setBookBasket] = useState([])
  const [isModal, setIsModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(true)

  // Load basket from local storage on component mount
  useEffect(() => {
    const savedBasket = JSON.parse(localStorage.getItem('books')) || [];
    setBookBasket(savedBasket);
    setLoading(false)
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookBasket))
  }, [bookBasket])

  const scrollRef = useRef()
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 700 ? scrollRef.current.classList.add("backToTop") : scrollRef.current.classList.remove("backToTop")
    })
  }, [window.scrollY])

  let router = useRoutes(routes)
  return (
    <UserBasketContext.Provider value={{ bookBasket, setBookBasket, isModal, setIsModal, openModal, setOpenModal }}>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
        <Spinner color='warning' size='xl' aria-label="Center-aligned spinner example" />
      </div>
      ) : (
        <>
          <Header />
          {router}
          <div className="">
            <button onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} ref={scrollRef} className='bg-current z-50 text-white hover:bg-black fixed right-[30px] bottom-[30px] w-[58px] opacity-0 invisible flex items-center justify-center transition-all h-[58px] rounded-full'>
              <FaChevronUp className='text-xl' />
            </button>
          </div>
          {openModal && (
            <LoginModal />
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}>
            <Footer />
          </motion.div>
        </>
      )}
    </UserBasketContext.Provider>
  )
}

export default App
