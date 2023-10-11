import { NavLink } from "react-router-dom";
import "../css/navbar.css"
import { useContext, useEffect, useState } from "react";
import "../css/dropdown.css"




const Navbar = () => {



  const [isActive, setActive] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,

  });



  
    useEffect(() => {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
        
        });
     
      };
     
      window.addEventListener('resize', handleResize);
    
      
    if(screenSize.width>800){
      close()
      }
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);

      
      };
    
    }, [screenSize]);

    function close(){
      setActive(false)
  
    }
 

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


          <div className="toggle-btn" onClick={()=>setActive(!isActive)}><i><span className="material-symbols-outlined">
            menu
          </span></i></div>
        


          {isActive ? 
            <div className="dropdown-menu">
              <li><NavLink
                to="/" onClick={() => close()}>
               <span>{"< "}Home{"/>"}</span> 
              </NavLink>
              </li>

              <li> <NavLink
                to="/about" onClick={() => close()}>
               <span> {"< "}About{"/>"} </span>
              </NavLink>
              </li>

              <li> <NavLink
                to="/projects" onClick={() => close()}>
                <span> {"< "}Projects{"/>"}</span>
              </NavLink>
              </li>

              <li>  <NavLink
                to="/contact" onClick={() => close()}>
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