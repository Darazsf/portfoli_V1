
import { NavLink } from "react-router-dom";
import "../css/navbar.css"


const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="container">
        <div className="brand">
          <h1 className="brand-name">Darázs Ferenc</h1>
        </div>
        <div className="nav-elements">
          <ul>
            <li><NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
            </li>

            <li> <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink></li>
            <li> <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Projects
            </NavLink></li>
            <li>  <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contact
            </NavLink></li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar