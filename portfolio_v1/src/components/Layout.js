import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { ThemeContext } from '../context/ThemeContext';
import "../context/ThemeContext"
import "../css/theme.css"



export default function Layout() {




    return (
        <div className="layout-container">
          
                    <Navbar />
                    <Outlet />
                    <Footer />
               
        


        </div>
    )
}