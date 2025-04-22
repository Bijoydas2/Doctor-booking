import { Component } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";

 const router=createBrowserRouter([
    {
        path: "/",
        Component:MainLayout,
        errorElement:<p>error</p>,
        children:[
            {
                index:true,
                Component:Home
            },
            
            {
              path:'/booking',
                Component:Booking
            },
            {
                path:'/blogs',
                Component:Blogs
            },
            {
                path:'/contact',
                Component:Contact
            },

        ]
    }
]);
export default router