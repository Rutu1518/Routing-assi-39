import Navbar from "./../../component/Navbar/navbar"
import "./Home.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import CarouselPage from "../../CarouselPage";

import umbrella from "./umbrella.jfif"
import shoes  from "./shoes.jfif"
import raincoat from "./raincoat.jfif"
import toys from "./toys.jfif"
import boys from "./boy-cloths.jfif"
import girls from "./girls-cloths.jfif"
import Service from "../../component/Service/Service";

const Home = () => {
    return(<>
    <Navbar/>
    <CarouselPage/>  
 
    <div className="Fashion-categories">
        
        <img src={umbrella} className="umbrealla-img"/>
     
        <img src={shoes } className="umbrealla-img"/>
       
        <img src={raincoat} className="umbrealla-img"/>
       
        <img src={toys} className="umbrealla-img"/>
       
        <img src={boys}className="umbrealla-img"/>
        
        <img src={girls} className="umbrealla-img"/>      
       
    </div>

    <div>
       <video controls  className="home-video">
         <source src="https://www.youtube.com/watch?v=JNQXAC9IVRw" type="mp4"/>        
       </video>
    </div>
  
    <Service/>
    
    </>)
 }
  export default Home