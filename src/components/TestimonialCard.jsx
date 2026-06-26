import { FaStar } from "react-icons/fa";

export default function TestimonialCard({icon, desc,name,rating}){
    return(
        <>
            <div className="rating-card">
                <div className="card-header">
                    <div className="icon">{icon}</div>

                    <div>
                        <h3>{name}</h3>

                        <div className="rating">
                            <FaStar />
                            <span>{rating}</span>
                        </div>
                    </div>
                </div>

                <p>{desc}</p>
            </div>
        </>
    )

}