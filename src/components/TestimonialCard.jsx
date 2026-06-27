import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ icon, desc, name, rating }) {
    return (
        <>
            <div className="rating-card">
                <div className="rating">
                    <FaStar style={{ color: "yellow" }} />
                    <span>{rating}</span>
                </div>
                <p>"{desc}"</p>
                <div className="card-header">
                    <div className="icontes"><i className={icon} style={{color:"#4648D4"}}></i></div>

                    <div>
                        <h3>{name}</h3>
                    </div>
                </div>

                
            </div>
        </>
    )

}