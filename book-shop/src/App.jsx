import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './router'
import Header from './Components/Header/Header'

function App() {
  let router = useRoutes(routes)
  return (
    <>
      <Header />
      {router}
    </>
  )
}

export default App
