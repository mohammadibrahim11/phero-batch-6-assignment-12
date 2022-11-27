import Root from "../Layout/Root/Root";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Categories from "../Pages/Categories/Categories";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminRoute from "./AdminRoute/AdminRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import DashBoardHeader from "../Pages/DashBoardHeader/DashBoardHeader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        },
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,

      },

      {
        path:'/dashboard/allusers',
        element:<AllUsers></AllUsers>
      }
    ],
  },
]);
