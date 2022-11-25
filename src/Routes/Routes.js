import Root from "../Root/Root";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from '../Pages/Register/Register'
import Categories from "../Pages/Categories/Categories";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/categories/:id",
        element: <Categories></Categories>,
        loader: async ({ params }) => {
          console.log(params);
          return fetch(`http://localhost:5000/categories/${params.id}`);
        }
      },
      {
        path: "/register",
        element: <Register></Register> ,
        
        }
      ,
  
    ],
  },
]);
