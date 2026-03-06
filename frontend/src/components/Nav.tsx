import { Link, useLocation } from "react-router-dom";

export default function Nav () {
  useLocation();
  const token = localStorage.getItem('blog_token');
  const isAuthenticated = !!token

  function handleLogout () {
    localStorage.removeItem('blog_token');
    window.location.href = '/'
  }

  return (
    <nav className="nav">
      <ul className="nav-links">
        {!isAuthenticated ? (
          <><li><Link to="/">home</Link></li>
          <li><Link to="/contact">contact</Link></li></>
        ) : 
        (
          <><li><Link to="/">home</Link></li>
          <li><Link to="/admin">admin</Link></li>
          <li><button onClick={handleLogout}>logout</button></li></>
        )}
        
      </ul>
    </nav>
  )
}
