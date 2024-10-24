import './App.css'
import 'leaflet/dist/leaflet.css';
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  let router = useRoutes(routes)
  return (
    <>
      <Header />
      {router}
      <Footer />
    </>
  )
}

export default App
