import ReactDOM  from "react-dom/client"
import Home from "./views/Home/Home"
import Contact from "./views/Contact/contact"
import About from "./views/About/About"
import Review from "./views/Review/Review"
import Blogs from "./views/Blogs/Blogs"
import {createBrowserRouter, RouterProvider,}from "react-router-dom"



const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
   {
      path:"/",
      element:<Home/>
   },
   {
      path:"/Blogs",
      element:<Blogs/>
   },
   {
      path:"/about",
      element:<About/>
   },
   {
      path:"/contact",
      element:<Contact/>
   },
  
   {
      path:"/review",
      element:<Review/>
   },  
  
   ])
root.render(<RouterProvider router={router}/>)


