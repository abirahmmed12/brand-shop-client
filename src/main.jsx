import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root/Root';
import Home from './Pages/Home';

import Mycart from './Pages/Mycart';
import AddProduct from './componets/AddProduct';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Brandproduct from './componets/Brandproduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/brands')
      },
     
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
        
      },
      {
        path: "/mycart",
        element: <Mycart></Mycart>,
        
      },
      {
        path: "/login",
        element: <Login></Login>,
        
      },
      {
        path: "/register",
        element:<Register></Register>,
        
      },
      {
        path: "/brands/:brand",
       
        // // loader: async ({ params }) => {
        // //   return fetch(`http://localhost:5000/services/${params.brand}`);

        // },
        element:<Brandproduct></Brandproduct>,
      
        
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
