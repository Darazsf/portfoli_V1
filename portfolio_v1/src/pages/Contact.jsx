
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
                </div>
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21589.51995483613!2d19.231111249999998!3d47.437487899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shu!2shu!4v1695737372836!5m2!1shu!2shu" width="610" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
            </div>
            

        </>
    )
}