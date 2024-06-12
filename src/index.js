import ReactDOM  from "react-dom/client"
import Home from "./views/Home/Home"
import Contact from "./views/Contact/contact"
import About from "./views/About/About"


import {
   createBrowserRouter,
   RouterProvider,
}from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))

const router =createBrowserRouter([
   {
      path:"/",
      element:<Home/>
   },
   {
      path:"/contact",
      element:<Contact/>
   },
   {
      path:"/about",
      element:<About/>
   },
  
   ])
root.render(<RouterProvider router={router}/>)

//  const path = window.location.pathname

//  if (path == "/"){
//     root.render(<Home/>)
//  }
//  else if(path == "/contact"){
//     root.render(<Contact/>)
//  }
//  else if (path == "/about"){
//     root.render(<About/>)
//  }
//  else{
//     root.render(<h1>404 not found</h1>)
// }
