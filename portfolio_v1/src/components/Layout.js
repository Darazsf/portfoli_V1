import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { ThemeContext } from '../context/ThemeContext';
import "../context/ThemeContext"
import "../css/theme.css"



export default function Layout() {

    const [theme, setTheme] = useState('light'); // light v. dark


    return (
        <div className="layout-container">
            <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
                <div className={`${theme}`}>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            </ThemeContext.Provider>


        </div>
    )
}