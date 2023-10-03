
import Mail from "../components/Email"
import "../css/contact.css"



export default function Contact() {
    return (
        <>
      
            <div className="contact-container">
                <div><h2  className="page-adress">Contact</h2></div>
                <div className="contact">
                    <ul className="con-icon">

                        <li> <span className="material-symbols-outlined">
                            home_pin
                        </span>
                        <p>Budapest, Hungary</p>
                        </li>
                        

                        <li><span className="material-symbols-outlined">
                            call
                        </span>
                        <p>+36 30-297-22-58</p>
                        </li>
                       

                        <li>
                            <span class="material-symbols-outlined">
                                mail
                            </span>
                            <p>darazs.feri@gmail.com</p>
                        </li>
                        


                    </ul>
                    <div><Mail/></div>
                </div>
               

               
                
            </div>
            

        </>
    )
}