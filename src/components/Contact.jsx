export default function Contact() {
    return (
        <>
            <div className="Contact">
                <div className="text-contact">
                    <h1>Let's Build Your<br/> Dream Website</h1>
                    <p>Ready to take your digital presence to the next level?<br/> Reach out today for a discovery call.</p>
                    <div className="contact-info">
                        <i class="fa-regular fa-envelope fa-xl"></i>
                        <p>contact@outdev.ma</p>
                    </div>
                    <div className="contact-info">
                        <i class="fa-solid fa-phone fa-xl"></i>
                        <p>+212 607523048</p>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Enter your address"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="6"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <button type="submit" className="send-btn">
                        Send Message
                    </button>
                </form>

            </div>
            <hr />







        </>
    )
}