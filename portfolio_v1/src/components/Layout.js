import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



export default function Layout() {




    return (
        <div className="layout-container">
            <div className='nav-container'>
                <Navbar />
            </div>
            <div className='outlet-container'>
                <Outlet />
            </div>
        
        </div>
    )
}