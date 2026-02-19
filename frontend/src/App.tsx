
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Nav from './components/nav'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<div>Contato</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
