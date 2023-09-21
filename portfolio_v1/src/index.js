import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"



const router = createBrowserRouter([
  {
    path: '/',    
    element: <Home />,
    errorElement: <div><h1>404 a keresett oldal nem talalhato</h1></div>
  },
  {
    path: '/about', 
    element: <About />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


