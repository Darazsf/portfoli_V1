import webshop from "../assets/webshop.png"
import under from "../assets/under.jpg"
import "../css/projects.css"


export default function Projects() {

    return (
        <>
            <div className="project-wrapper">


                <div className="wrapper">
                    <div className="card">
                        <div className="face face1">
                            <img className="card-img" src={webshop} alt="webshop" />
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <a href="https://team8-webshop.vercel.app/" target="_blank">Webshop</a>
                                </h3>
                                <p>My classmates and I collaborated on this project, creating an online toy store as our final assignment for the bootcamp.</p>
                                <div className="button-wrapper">
                                <a href="https://github.com/Darazsf/webshop" target="_blank"><button className="btn outline">Source code</button></a>
                                    <a href="https://team8-webshop.vercel.app/" target="_blank"> <button className="btn fill">Live</button></a>
                                   
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>


                <div className="wrapper">
                    <div className="card">
                        <div className="face face1">
                            <img className="card-img" src={under} alt="webshop" />
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <a href="" target="_blank">Under construction</a>
                                </h3>
                                <p></p>
                                
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="card">
                        <div className="face face1">
                            <img className="card-img" src={under} alt="webshop" />
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <a href="" target="_blank">Under construction</a>
                                </h3>
                                <p></p>
                                
                                
                            </div>
                           
                        </div>
                    </div>
                </div>
               



            </div>

        </>
    )
}