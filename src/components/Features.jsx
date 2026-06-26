import {services} from "../assets/Data/CardService.js";
import Card from "./Card.jsx";

export default function Features(){
    return(
        <>
        <div className="bg-features">
          <h2>Our Services</h2>
            <p className="description">We offer a comprehensive suite of digital solutions designed to elevate your<br/> brand presence and drive measurable results.</p>
          <div className="service">
                  {services.map((service)=>(
                      <Card icon = {service.icon} title={service.title} desc={service.description}/>
                  ))}
          </div>

        </div>



        </>
    )
}