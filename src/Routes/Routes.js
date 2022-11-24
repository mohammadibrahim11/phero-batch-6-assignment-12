
import Root from '../Root/Root'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'


 export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/home',
                    element:<Home></Home>
                }
            
        ]
    }
])

