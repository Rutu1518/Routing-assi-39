import Navbar from "./../../component/Navbar/navbar"
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import  CarouselPage from"./../../component/CarouselPage/CarouselPage";
import Slider from "./../../component/Blogs/Blogs"
import umbrella from "./umbrella.jfif"
import shoes  from "./shoes.jfif"
import raincoat from "./raincoat.jfif"
import toys from "./toys.jfif"
import boys from "./boy-cloths.jfif"
import girls from "./girls-cloths.jfif"
import Service from "../../component/Service/Service";
import { Slide } from "react-slideshow-image";
import Blogs from "./../../component/Blogs/Blogs";
import {theme} from "../../configData"
import Footer from "./../../component/Footer/Footer"
const Home = () => {
    return(<>
    <div>
    <Navbar />
    <CarouselPage/>   
    <div className="Fashion-categories" style={{backgroundColor:theme.backColor}}>
        
        <img src={umbrella} className="umbrealla-img"/>     
        <img src={shoes } className="umbrealla-img"/>       
        <img src={raincoat} className="umbrealla-img"/>       
        <img src={toys} className="umbrealla-img"/>       
        <img src={boys}className="umbrealla-img"/>        
        <img src={girls} className="umbrealla-img"/>     
       
    </div>  
    <Service/>
    <Blogs/>
    <Footer/>
    </div>    
    </>)
 }
  export default Home