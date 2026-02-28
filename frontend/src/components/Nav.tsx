import { Link } from "react-router-dom";

export default function Nav () {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li><Link to="/">home</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
    </nav>
  )
}
