export default function Footer(){
    return(
        <>
        <div className="footer">

            <div className="footer-info">
                <h1>out<span>Dev</span></h1>
                <p>Crafting digital masterpieces for forward-thinking brands.</p>
                <div className="footer-icon">
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                    <i class="fa-brands fa-reddit fa-xl"></i>
                    <i class="fa-brands fa-github fa-xl"></i>
                </div>
            </div>
            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <h3>Services</h3>
                <ul>
                    <li><a href="">Web Design</a></li>
                    <li><a href="">UI/UX Design</a></li>
                    <li><a href="">SEO Strategy</a></li>
                    <li><a href="">Maintenance</a></li>
                </ul>
            </div>
              
        </div>
        <div className="copyright">
             <p><i class="fa-regular fa-copyright"></i> out<span>Dev</span>.  All rights reserved.</p>
        </div>
        
        </>
    )
}