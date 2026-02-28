
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Nav from './components/Nav'
import CreateContact from './pages/createContact'
import Login from './pages/login'
import Admin from './pages/admin'
import Post from './pages/post'
import ContactDetail from './pages/contactDetail'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <main className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts' element={<Home/>}/>
          <Route path='/posts/:slug' element={<Post/>}/>
          <Route path='/contact' element={<CreateContact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<ProtectedRoute children={<Admin/>}></ProtectedRoute>}/>
          <Route path='/contact/:id' element={<ProtectedRoute children={<ContactDetail/>}></ProtectedRoute>}/>
        </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
