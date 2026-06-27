import TestimonialCard from "./TestimonialCard.jsx";
import {temoignages} from "../assets/Data/Temoignages.js";

export default function Temoignages (){
    return(
        <>
            <div className="temoignages">
              <h1>What Our Clients Say</h1>
                <div className="rating-container">
                    {temoignages.map((temoignage)=>(
                        <TestimonialCard
                            icon = {temoignage.icon} desc={temoignage.desc} name = {temoignage.name} rating ={temoignage.rating}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}