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

import Brandproduct from './componets/Brandproduct';
import Singleproduct from './componets/Singleproduct';
import AuthProvider from './Authprovider/Authprovider';
import Registration from './Pages/Registration';
import PrivateRout from './componets/PrivateRout';
import Errorpage from './Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
   
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('https://brand-shop-q9478mt03-abirahmmed12s-projects.vercel.app/brands')
      },
     
      {
        path: "/addproduct",
        element: <PrivateRout><AddProduct></AddProduct></PrivateRout>
        
      },
      {
        path: "/mycart",
        element: <PrivateRout><Mycart></Mycart></PrivateRout>,
        
      },
      {
        path: "/login",
        element: <Login></Login>,
        
      },
      {
        path: "/registration",
        element:<Registration></Registration>,
        
      },
     
      {
        path: "/brands/:brand",
       
        // // loader: async ({ params }) => {
        // //   return fetch(`http://localhost:5000/services/${params.brand}`);

        // },
        element:<Brandproduct></Brandproduct>,
      
        
        
      },
      {
        path: "/product/:id",
        element: <PrivateRout><Singleproduct></Singleproduct></PrivateRout>,
        loader: ({ params }) => fetch(`https://brand-shop-q9478mt03-abirahmmed12s-projects.vercel.app/create-service/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
</React.StrictMode>,
)
