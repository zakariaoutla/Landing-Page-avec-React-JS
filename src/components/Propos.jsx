export default function Propos(){
    return(
        <>
            <div className="propos">
                <div className="propos-img">
                    <img src="/src/assets/images/img-propos.jpg"/>
                </div>
                <div className="title-propos">
                   <h1>Why Choose Us?</h1>
                    <p>We don't just build websites; we create digital assets that empower startups and established businesses to scale. Our approach is rooted in partnership and deep technical expertise.</p>
                    <ul className="list-propos">
                        <li><i className="fa-regular fa-circle-check" ></i>Dedicated support for growing startups.</li>
                        <li><i className="fa-regular fa-circle-check"></i>Expertise in high-traffic enterprise platforms.</li>
                        <li><i className="fa-regular fa-circle-check"></i>5+ Years of industry-leading experience.</li>
                    </ul>
                    <div className="btn-learn">
                        <a>Learn More About Our Team</a>
                    </div>
                </div>


            </div>

        </>
    )
}