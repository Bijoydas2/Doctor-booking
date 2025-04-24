import { Component } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import DoctorDetails from "../Pages/DoctorDetails";
import Error from "../Pages/Error";

 const router=createBrowserRouter([
    {
        path: "/",
        Component:MainLayout,
  
        children:[
            {
                index:true,
                Component:Home,
                loader: ()=> fetch('../doctors.json')
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
            {
                path:'/details/:id',
                Component:DoctorDetails,
                ErrorBoundary:Error,
                loader: ()=> fetch('../doctors.json')
            },

        ]
    }
]);
export default router