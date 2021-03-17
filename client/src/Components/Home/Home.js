import React, { useState, useRef } from "react";
import Carrusel from "../Carrusel/Carrusel";
import "./Home.css";

const url = window.location.origin;

function Home() {
    const [language,setLanguage] = useState("spanish")
    const videoRef = useRef();
    const rellaxRef= useRef();

    return (
        <>
            <div className="Nav">
                {language === "spanish" ? <a href="#about"><h3>SOBRE MI</h3></a> : <a href="#about"><h3>ABOUT ME</h3></a>}
                {language === "spanish" ? <a href="#projects"><h3>PROYECTOS</h3></a> : <a href="#projects"><h3>PROJECTS</h3></a>}
                {language === "spanish" ? <a href="#skills"><h3>TECNOLOGIAS</h3></a> : <a href="#skills"><h3>SKILLS</h3></a>}
                {language === "spanish" ? <h3 className="language" onClick={() => setLanguage("english")}>ENGLISH</h3> : <h3 className="language" onClick={() => setLanguage("spanish")}>ESPAÑOL</h3>}
                <div className="Nav-Img">
                    <a href="https://www.linkedin.com/in/marcelo-spagnuolo-97459265/" target="_blank"><img src={`${url}/images/linkedin.png`} alt=""/></a>
                    <a href="https://github.com/MarceloSpagnuolo" target="_blank"><img src={`${url}/images/github_menu.png`} alt="" /></a>
                    <a href="mailto: lu4huf@gmail.com"><img src={`${url}/images/email.png`} alt="" /></a>
                    <a href="https://api.whatsapp.com/send?phone=+54-3516185440" target="_blank"><img src={`${url}/images/ws.png`} alt="" /></a>
                </div>
            </div>
            <div>
            <div className="Home-Container" id="home">
                {/* <video ref={videoRef} className="video" autoplay="autoplay" loop="loop" muted="muted">
                    <source src={`${url}/images/Arrows - 325.mp4`} type="video/mp4" />
                </video> */}
                <img alt="" src={`${url}/images/yo.png`} className="Avatar" />
                <img alt="" src={`${url}/images/titulo.png`} className="Titulo" />
            </div>
            </div>

            <div className="About" id="about">
                <div className="Titanic-Container">
                    <img alt="" src={`${url}/images/react3.png`} className="Titanic" />
                </div>
                <div className="Sobre">
                    {language === "spanish" ? 
                    <div>
                        <h2>SOBRE MI</h2>
                        <p>Apasionado por la informática desde el inicio de sus tiempos. <b>Con más de 20 años de estudio y desarrollo</b> de aplicaciones de escritorio y diseño de páginas web para diferentes empresas, a veces desarrollando productos que no existían para implementar en emprendimientos propios.</p>
                        <p>Actualizando con un bootcamp de más de <b>700 horas de estudio y trabajo</b> intensivo las tecnologías utilizadas acorde a las demandas mundiales actuales.</p>
                        <p>Participando como Teacher Assistant durante dicho bootcamp para afianzar aún más la teoría y la práctica de esas tecnologías ayudando a otros a que las entiendan.</p>
                        <p>Amante del running, el tenis, el gimnasio y la vida sana.</p>
                    </div>
                    :
                    <div>
                        <h2>ABOUT ME</h2>
                        <p>Passionate about computing since the beginning of his time. <b>With more than 20 years of study and development</b> of desktop applications and web pages design for different companies, sometimes developing products that did not exist to implement in their own ventures</p>
                        <p>Updating with a bootcamp of more than <b>700 hours of intensive study and work</b> the technologies used according to current world demands.</p>
                        <p>Participating as Teacher Assistant during that bootcamp to further strengthen the theory and practice of these technologies helping others to understand them.</p>
                        <p>Running, tennis, gym and healthy life enthusiastic.</p>
                    </div>
                    }
                </div>
            </div>

            <div className="Projects" id="projects">
                <div className="Projects-Readme">
                    {language === "spanish" ?
                        <div>
                            <h2>PROYECTOS</h2>
                            <p>Estos proyectos fueron realizados, algunos durante mis estudios sobre nuevas tecnologías y otros de forma Freelance para algunas empresas.</p>
                            <p>También hay otros proyectos que estoy realizando para algunas ideas de negocios propias.</p>
                            <p>Y por último, hay muchos proyectos desarrollados que se perdieron en el tiempo. De los cuales no tengo ni imágenes
                            ni ninguna referencia de ellos actualmente, por eso no están agregados a este apartado ya que no se encuentran online.</p>
                            <p>Se sabe más del camino <b>por haber viajado en él</b> que por todas las conjeturas y descripciones del mundo. - William Hazlitt (1778-1830).</p>
                        </div>
                    :
                        <div>
                            <h2>PROJECTS</h2>
                            <p>These projects were carried out, some during my studies on new technologies and others in a Freelance way for some companies.</p>
                            <p>There are also other projects that I am doing for some business ideas of my own.</p>
                            <p>And finally, there are many projects developed that were lost in time. Of which I do not currently have images
                            or any reference to them, that is why they are not added to this section since they are not online.</p>
                            <p>You know more of a road <b>by having traveled it</b> than by all the conjectures and descriptions in the world.
                             - William Hazlitt (1778-1830).</p>
                        </div>
                    }
                </div>
            </div>

            <div className="Carrusel-Container">
                <Carrusel idioma={language}/>
            </div>

            <div className="Skills" id="skills">
                {language === "spanish" ? <h2>TECNOLOGIAS</h2> : <h2>SKILLS</h2> }
                <div className="Container">
                    <div className="Skill-Display">
                        <img src={`${url}/images/js.png`} alt="" />
                        <span>Javascript</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/ts.png`} alt="" />
                        <span>Typescript</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/react.png`} alt="" />
                        <span>React</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/redux.png`} alt="" />
                        <span>Redux</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/graph.png`} alt="" />
                        <span>GraphQL</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/axios.png`} alt="" />
                        <span>Axios</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/bcrypt.png`} alt="" />
                        <span>Bcrypt</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/multer.png`} alt="" />
                        <span>Multer</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/node.png`} alt="" />
                        <span>NodeJs</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/ex.png`} alt="" />
                        <span>Express</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/jwt.png`} alt="" />
                        <span>JsonWebToken</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/html.png`} alt="" />
                        <span>HTML</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/css.png`} alt="" />
                        <span>Css</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/maria.png`} alt="" />
                        <span>MariaDB</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/my.png`} alt="" />
                        <span>MySQL</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/postgres.png`} alt="" />
                        <span>PostgresQL</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/mongo.png`} alt="" />
                        <span>MongoDB</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/sequelize.png`} alt="" />
                        <span>Sequelize</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/ps.png`} alt="" />
                        <span>Photoshop</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/xd.png`} alt="" />
                        <span>Adobe XD</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/ae.png`} alt="" />
                        <span>After Effects</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/corel.png`} alt="" />
                        <span>CorelDraw</span>
                    </div>
                    <div className="Skill-Display">
                        <img src={`${url}/images/fusion.png`} alt="" />
                        <span>Fusion 360</span>
                    </div>
                </div>
            <div>
                
            </div>
        </div>
        </>
    )

};

export default Home;