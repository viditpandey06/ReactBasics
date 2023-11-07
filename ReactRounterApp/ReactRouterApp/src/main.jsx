/* The code is importing necessary modules and components for a React application. It is creating a
router using `createBrowserRouter` from the `react-router-dom` library. The router is configured
with different paths and corresponding components to render. The `ReactDOM.createRoot` function is
used to render the application, providing the router as a prop to the `RouterProvider` component.
The application is rendered inside the element with the id "root" in the HTML document. */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUS/Contact.jsx'
import ThankYouMessage from './components/Github/Github.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path: 'user/:userid',
        element: <User />
      },
      {
        path: 'github',
        element: <Github />,
        
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
