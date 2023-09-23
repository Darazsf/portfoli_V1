
import "../css/contact.css"


export default function Contact(){
    return(
        <>
            <div className="contact-container">
                <h2>Contact</h2>
                <div className="contact">
                    <ul>
                        <li> <span className="material-symbols-outlined">
                            calendar_month
                        </span>18.10.1987</li>
                        <li> <span className="material-symbols-outlined">
                            home_pin
                        </span>Budapest, Hungary</li>

                        <li><span className="material-symbols-outlined">
                            call
                        </span><span>+36 30-297-22-58</span></li>

                        <li> <span className="material-symbols-outlined">
                            mail
                        </span><a href="mailto: darazs.feri@gmail.com">Send Email</a></li>

                        
                    </ul>
                </div>
                <div>

                </div>
            </div>
              
        </>
    )
}