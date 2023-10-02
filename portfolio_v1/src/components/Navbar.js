
import { NavLink } from "react-router-dom";
import "../css/navbar.css"
import { useState } from "react";
import "../css/dropdown.css"






const Navbar = () => {



 const[isActive,setActive]=useState(false)

 console.log(isActive)



    return (

    
      <nav className="navbar">
        <div className="nav-container">
         
            <h1><a href="/" className="name">Darázs Ferenc</a></h1>
       
          <div className="nav-elements">
            <ul>
              <li><NavLink
                to="/">
                <span> {"</"}Home{" >"}</span>
              </NavLink>
              </li>

              <li> <NavLink
                to="/about">
                <span> {"</"}About{" >"}</span>
              </NavLink>
              </li>

              <li> <NavLink
                to="/projects">
                <span> {"</"}Projects{" >"}</span>
              </NavLink>
              </li>

              <li> <NavLink
                to="/contact">
                <span> {"</"}Contact{" >"}</span>
              </NavLink>
              </li>

            </ul>

          </div>
          <div className="toggle-btn" onClick={()=>setActive(!isActive)}><i><span class="material-symbols-outlined">
            menu
          </span></i></div>


          {isActive ? 
          <div className="dropdown-menu">
          <li><NavLink
            to="/">
            <span> {"< "}Home{"/>"}</span>
          </NavLink>
          </li>

          <li> <NavLink
            to="/about">
            <span> {"< "}About{"/>"}</span>
          </NavLink>
          </li>

          <li> <NavLink
            to="/projects">
            <span> {"< "}Projects{"/>"}</span>
          </NavLink>
          </li>

          <li>  <NavLink
            to="/contact">
            <span> {"< "}Contact{"/>"}</span>
          </NavLink>
          </li>
        </div>
        :
        ""}

          

          
        </div>
      </nav>

    )
  }


  
  export default Navbar