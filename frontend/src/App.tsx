
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Nav from './components/Nav'
import Contact from './pages/contact'
import Login from './pages/login'
import Admin from './pages/admin'
import Post from './pages/post'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts' element={<Home/>}/>
          <Route path='/posts/:slug' element={<Post/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
