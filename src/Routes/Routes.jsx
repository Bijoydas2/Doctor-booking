import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import DoctorDetails from "../Pages/DoctorDetails";
import ErrorPage from "../Pages/ErrorDoctorpage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('../doctors.json')
      },
      {
        path: '/booking',
        element: <Booking />
      },
      {
        path: '/blogs',
        element: <Blogs />,
       
        loader: () => fetch('../blogs.json')
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/details/:id',
        element: <DoctorDetails />,
        
        loader: () => fetch('../doctors.json')
      }
    ]
  }
]);

export default router;
