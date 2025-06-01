import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';
import AboutUs from './Pages/About';
import Contact from './Pages/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
      ,{
        path: '/About-us',
        element: <AboutUs></AboutUs>
      }
      ,{
        path: '/Contact',
        element: <Contact></Contact>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
