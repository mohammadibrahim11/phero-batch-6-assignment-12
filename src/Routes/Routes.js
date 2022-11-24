
import Root from '../Root/Root'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
// import Categories from '../Pages/Categories/Categories'
// import SingleCategory from '../Pages/SingleCategory/SingleCategory'
import Categories from '../Pages/Categories/Categories'


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
                },
                {
                    path:'/category/:id',
                    element:<Categories></Categories>, 
                    loader: async({params})=>{
                        console.log(params);
                        return fetch(`http://localhost:5000/category/${params.id}`)}
                   
                
                }
            
        ]
    }
])

