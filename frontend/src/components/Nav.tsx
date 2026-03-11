import { Link, useLocation } from "react-router-dom";

export default function Nav () {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token

  function handleLogout () {
    localStorage.removeItem('token');
    window.location.href = '/'
  }

  return (
    <nav className="nav" aria-label="Main">
      <ul className="nav-links">
        {!isAuthenticated ? (
          <><li><Link to="/" aria-current={location.pathname === '/' || location.pathname === '/posts' ? 'page' : undefined}>home</Link></li>
          <li><Link to="/contact" aria-current={location.pathname === '/contact' ? 'page' : undefined}>contact</Link></li></>
        ) :
        (
          <><li><Link to="/" aria-current={location.pathname === '/' || location.pathname === '/posts' ? 'page' : undefined}>home</Link></li>
          <li><Link to="/admin" aria-current={location.pathname.startsWith('/admin') ? 'page' : undefined}>admin</Link></li>
          <li><button onClick={handleLogout}>logout</button></li></>
        )}

      </ul>
    </nav>
  )
}
