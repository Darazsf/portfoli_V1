import webshop from "../assets/webshop.png"
import under from "../assets/under.jpg"
import load from "../assets/loadsheet.png"
import rock from "../assets/rock-paper.png"
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
                                
                                <p>My classmates and I collaborated on this project, creating an online toy store as our final assignment for the bootcamp. The webshop was made in React.</p>
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
                            <img className="card-img" src={load} alt="loadsheet" />
                        </div>
                        <div className="face face2">
                            <div className="content">
                                
                                    <p>A defining part of my life so far has been calculating aircraft takeoff/landing weights on paper. I have now implemented a portion of it using simple JavaScript with DOM manipulation to achieve the end result. With little CSS</p>
                                    <div className="button-wrapper">
                                <a href="https://github.com/Darazsf/Loadsheet" target="_blank"><button className="btn outline">Source code</button></a>
                                    <a href="https://darazsf.github.io/Loadsheet/" target="_blank"> <button className="btn fill">Live</button></a>
                                   
                                </div>
                                
                            
                                
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card">
                        <div className="face face1">
                            <img className="card-img" src={rock} alt="loadsheet" />
                        </div>
                        <div className="face face2">
                            <div className="content">
                                    <h3>Under construction</h3>
                                    <p>Simple rock-paper-scissors game with Dom manipulation and a bit of CSS."</p>
                                    <div className="button-wrapper">
                                <a href="https://github.com/Darazsf/rock-paper-scissors-game" target="_blank"><button className="btn outline">Source code</button></a>
                                    <a href="https://darazsf.github.io/rock-paper-scissors-game/" target="_blank"> <button className="btn fill">Live</button></a>
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