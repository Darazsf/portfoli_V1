import "../css/home.css"
import me from "../assets/DSCF0352-Edit.jpg"

export default function Home() {

    return (
        <>
    <div className="home-container">
            <div className="me">
                <div><img className="sepia" src={me} alt="me" width="300" /></div>
                <div className="welcome"><h2>Hello and welcome to my portfolio page!</h2>
                    <p>My name is Feri and I'm excited to have you here on my first website.
                        Take a look around to get to know me better, and stay tuned for updates as I showcase
                        my work in this creative space.
                        </p>
                        </div>
            </div>
            </div>
        </>
    )
}

