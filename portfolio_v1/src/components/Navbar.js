
import { NavLink } from "react-router-dom";
import "../css/navbar.css"
import { useState } from "react";




const Navbar = () => {


 


    return (
    
      <nav className="navbar">
        <div className="container">
        <div className="brand">
          <h1><a href="/" className="name">Darázs Ferenc</a></h1>
        </div>
        <div className="nav-elements">
          <ul>
            <li><NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span> {"< "}Home{"/>"}</span>
            </NavLink>
            </li>

            <li> <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span> {"< "}About{"/>"}</span>
            </NavLink></li>
            <li> <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span> {"< "}Projects{"/>"}</span>
            </NavLink></li>
            <li>  <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span> {"< "}Contact{"/>"}</span>
            </NavLink></li>
          </ul>

          {/* Dropdown menu */}
        </div>
          <div className="toggle-btn"><i onClick={openMenu()}><span class="material-symbols-outlined">
            menu
          </span></i></div>

          <div className="dropdown-menu">
          <li><NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span> {"< "}Home{"/>"}</span>
            </NavLink>
            </li>

            <li> <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span> {"< "}About{"/>"}</span>
            </NavLink></li>
            <li> <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span> {"< "}Projects{"/>"}</span>
            </NavLink></li>
            <li>  <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span> {"< "}Contact{"/>"}</span>
            </NavLink></li>
          </div>
        </div>
      </nav>

    
    )
  }

        function openMenu(){
         
  }
  
  export default Navbar