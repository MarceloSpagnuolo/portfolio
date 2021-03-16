import React, { useEffect, useRef, useState } from "react";
import video from "../../Archives/Arrows - 325.mp4";
import avatar from "../../Archives/yo.png";
import titulo from "../../Archives/titulo.png"
import react from "../../Archives/react3.png";
import patagonia from "../../Archives/patagonia2.jpg";
import mmn from "../../Archives/mmn.jpg";
import genesis from "../../Archives/genesis.jpg";
import pileta from "../../Archives/pileta.jpg";
import inmo from "../../Archives/inmo.jpg";
import cine from "../../Archives/TheMovieDb.jpg";
import henry from "../../Archives/henry.jpg";
import web from "../../Archives/web.jpg"
import github from "../../Archives/github2.png";
import barra from "../../Archives/barra.png";
import web2 from "../../Archives/web2.png";
import js from "../../Archives/js.png";
import ts from "../../Archives/ts.png";
import react2 from "../../Archives/react.png";
import redux from "../../Archives/redux.png";
import graph from "../../Archives/graph.png";
import axios from "../../Archives/axios.png";
import bcrypt from "../../Archives/bcrypt.png";
import multer from "../../Archives/multer.png";
import node from "../../Archives/node.png";
import ex from "../../Archives/ex.png";
import jwt from "../../Archives/jwt.png";
import html from "../../Archives/html.png";
import css from "../../Archives/css.png";
import maria from "../../Archives/maria.png";
import my from "../../Archives/my.png";
import postgres from "../../Archives/postgres.png";
import mongo from "../../Archives/mongo.png";
import seq from "../../Archives/sequelize.png";
import xd from "../../Archives/xd.png";
import ps from "../../Archives/ps.png";
import ae from "../../Archives/ae.png";
import cd from "../../Archives/corel.png";
import fusion from "../../Archives/fusion.png";
import link from "../../Archives/linkedin.png";
import git from "../../Archives/github_menu.png";
import email from "../../Archives/email.png";
import ws from "../../Archives/ws.png";
import Rellax from "rellax";
import "./Home.css";

const url = window.location.origin;

function Home() {
    const [language,setLanguage] = useState("spanish");
    const videoRef = useRef();
    const rellaxRef= useRef();

useEffect(() => {
    videoRef.current.playbackRate = 0.5
    new Rellax(rellaxRef.current, { // <---- Via useRef element
        speed: -10,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      }); 
},[])

    return (
        <>
        <div className="Nav">
            {language === "spanish" ? <a href="#about"><h3>SOBRE MI</h3></a> : <a href="#about"><h3>ABOUT ME</h3></a>}
            {language === "spanish" ? <a href="#projects"><h3>PROYECTOS</h3></a> : <a href="#projects"><h3>PROJECTS</h3></a>}
            {language === "spanish" ? <a href="#skills"><h3>TECNOLOGIAS</h3></a> : <a href="#skills"><h3>SKILLS</h3></a>}
            {language === "spanish" ? <h3 className="language" onClick={() => setLanguage("english")}>ENGLISH</h3> : <h3 className="language" onClick={() => setLanguage("spanish")}>ESPAÑOL</h3>}
            <div className="Nav-Img">
                <a href="https://www.linkedin.com/in/marcelo-spagnuolo-97459265/" target="_blank"><img src={link} alt=""/></a>
                <a href="https://github.com/MarceloSpagnuolo" target="_blank"><img src={git} alt="" /></a>
                <a href="mailto: lu4huf@gmail.com"><img src={email} alt="" /></a>
                <a href="https://api.whatsapp.com/send?phone=+54-3516185440" target="_blank"><img src={`${url}/images/ws.png`} alt="" /></a>
            </div>
        </div>
        <div className="Home-Container" ref={rellaxRef} id="home">
            <video ref={videoRef} className="video" autoplay="autoplay" loop="loop" muted="muted">
                <source src={video} type="video/mp4" />
            </video>

            <img alt="" src={avatar} className="Avatar" />
            <img alt="" src={titulo} className="Titulo" />
        </div>
        <div className="About" id="about">
            <div className="Titanic-Container">
                <img alt="" src={react} className="Titanic" />
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
                        <h3>PROYECTOS</h3>
                        <p>Estos proyectos fueron realizados, algunos durante mis estudios sobre nuevas tecnologías y otros de forma Freelance para algunas empresas.</p>
                        <p>También hay otros proyectos que estoy realizando para algunas ideas de negocios propias.</p>
                        <p>Y por último, hay muchos proyectos desarrollados que se perdieron en el tiempo. De los cuales no tengo ni imágenes
                        ni ninguna referencia de ellos actualmente, por eso no están agregados a este apartado ya que no se encuentran online.</p>
                        <p>Se sabe más del camino <b>por haber viajado en él</b> que por todas las conjeturas y descripciones del mundo. - William Hazlitt (1778-1830).</p>
                    </div>
                :
                    <div>
                        <h3>PROJECTS</h3>
                        <p>These projects were carried out, some during my studies on new technologies and others in a Freelance way for some companies.</p>
                        <p>There are also other projects that I am doing for some business ideas of my own.</p>
                        <p>And finally, there are many projects developed that were lost in time. Of which I do not currently have images
                        or any reference to them, that is why they are not added to this section since they are not online.</p>
                        <p>You know more of a road <b>by having traveled it</b> than by all the conjectures and descriptions in the world.
                         - William Hazlitt (1778-1830).</p>
                    </div>
                }
            </div>
            <div>
            {language === "spanish" ? <h3>DETALLES</h3> : <h3>DETAILS</h3>}
            <div className="Projects-Display">
                <h3>Henry Manager</h3>
                <img className="Images" src={henry} alt=""/>
                <div className="Botones">
                    <button onClick={() => window.open("https://github.com/MarceloSpagnuolo/Proyecto-Final-ft07-04","_blank")}><img alt="" src={github}/>GitHub</button>
                </div>
                {language === "spanish" ?
                    <div>
                        <p><b>Henry Manager</b> es una completa solución web responsiva desarrollada íntegramente tanto para el manejo de alumnos
                        por parte de los administradores y los Projects Manager de la academía, como así también resulta una herramienta
                        indispensable para los propios alumnos para administrar su carrera y evaluar su desempeño.</p>
                        <p>Desarrollada íntegramente con tecnologías como React, Redux, Axios. Typescript, NodeJs, Express, MongoDB, Mongoose,
                        Passport, Bcrypt y JsonWebToken entre otras.</p>
                    </div>
                :
                    <div>
                        <p><b>Henry Manager</b> is a complete responsive web solution developed entirely both for the management of students by
                        administrators and Project Managers of the academy, as well as an indispensable tool for the students themselves to manage
                        their career and evaluate your performance.</p>
                        <p>Developed entirely with technologies such as React, Redux, Axios. Typescript, NodeJs, Express, MongoDB, Mongoose,
                        Passport, Bcrypt and JsonWebToken among others.</p>
                    </div>
                }
                <div className="Botones">
                    <img alt="" src={barra} />
                </div>
                <h3>Ecommerce Patagonia</h3>
                <img className="Images" src={patagonia} alt=""/>
                <div className="Botones">
                    <button onClick={() => window.open("https://github.com/MarceloSpagnuolo/ecommerce_patagonia","_blank")}><img alt="" src={github}/>GitHub</button>
                    <button onClick={() => window.open("https://ecommerce-patagonia.vercel.app/","_blank")}><img alt="" src={web2}/>{language === "spanish" ? "Visitar" : "Let's go"}</button>
                </div>
                {language === "spanish" ? 
                    <div>
                        <p><b>Ecommerce Patagonia</b> es un completo ecommerce desarrollado para la promoción y venta de una reconocida marca
                        de cerveza de la patagonia argentina.</p>
                        <p>Se utilizaron tecnologías como Javascript, React, Redux, Axios, NodeJs, Express, PostgresDB, Sequelize, Passport, Bcrypt
                        y JsonWebToken entre otras.</p>
                    </div>
                :
                    <div>
                        <p><b>Ecommerce Patagonia</b> is a complete ecommerce developed for the promotion and sale of a recognized brand of beer
                        from Argentine Patagonia.</p>
                        <p>Technologies such as Javascript, React, Redux, Axios, NodeJs, Express, PostgresDB, Sequelize, Passport, Bcrypt were used
                        and JsonWebToken among others.</p>
                    </div>
                }
                <div className="Botones">
                    <img alt="" src={barra} />
                </div>
                <h3>Medellín Media Network</h3>
                <img className="Images" src={mmn} alt="" />
                <div className="Botones">
                    <button onClick={() => window.open("http://c2160099.ferozo.com","_blank")}><img alt="" src={web2}/>{language === "spanish" ? "Visitar" : "Let's go"}</button>
                </div>
                {language === "spanish" ?
                    <div>
                        <p><b>Medellín Media Network</b> es un desarrollo de un sitio web institucional para una agencia de medios y publicidad de
                        la ciudad de Medellín, Colombia.</p>
                    </div>
                :
                    <div>
                        <p><b>Medellín Media Network</b> is a development of an institutional website for a media and advertising agency of
                        the city of Medellín, Colombia.</p>
                    </div>
                }
                <div className="Botones">
                    <img alt="" src={barra} />
                </div>
                <h3>La Genesis 106.9 FM</h3>
                <img className="Images" src={genesis} alt="" />
                <div className="Botones">
                    <button onClick={() => window.open("http://www.lagenesis.com.ar","_blank")}><img alt="" src={web2}/>{language === "spanish" ? "Visitar" : "Let's go"}</button>
                </div>
                {language === "spanish" ?
                    <div>
                        <p><b>La Genesis 106.9 FM - Suena Bien</b> es un desarrollo de una completa web de promociones y noticias para una
                        empresa multimedios de la localidad de Leones, Argentina.</p>
                    </div>
                :
                    <div>
                        <p><b>La Genesis 106.9 FM - Sounds Good</b> is a development of a complete website of promotions and news for a
                        multimedia company from the town of Leones, Argentina.</p>
                    </div>
                }
                <div className="Botones">
                    <img alt="" src={barra} />
                </div>
                <h3>El Verano en tu Pileta</h3>
                <img className="Images" src={pileta} alt="" />
                <div className="Botones">
                    <button onClick={() => window.open("http://www.elveranoentupileta.com.ar","_blank")}><img alt="" src={web2}/>{language === "spanish" ? "Visitar" : "Let's go"}</button>
                </div>
                {language === "spanish" ?
                    <div>
                        <p><b>El Verano en tu Pileta</b> es una desarrollo de un sitio web por un lado institucional, sumado a un catálogo de
                        todos los productos que el propietario puede ofrecer al cliente.</p>
                    </div>
                :
                    <div>
                        <p><b>El Verano en tu Pileta</b> is a development of a website on an institutional side, added to a catalog of
                        all the products that the owner can offer to the customer.</p>
                    </div>
                }
                <div className="Botones">
                    <img alt="" src={barra} />
                </div>
                <h3>Andrea Spagnuolo Inmobiliaria</h3>
                <img className="Images" src={inmo} alt="" />
                <div className="Botones">
                    <button onClick={() => window.open("http://www.andreaspagnuolo.com","_blank")}><img alt="" src={web2}/>{language === "spanish" ? "Visitar" : "Let's go"}</button>
                </div>
                {language === "spanish" ? 
                    <div>
                        <p><b>Andres Spagnuolo Inmobiliaria</b> es un desarrollo web de gestíon y ofrecimiento del portfolio de inmuebles disponibles
                        tanto para venta o alquiler en la cartera de la inmobiliaria.</p>
                        <p>Aunque el sitio está terminado, aún la inmobiliaria no lo ha puesto en marcha.</p>
                    </div>
                :
                    <div>
                        <p><b> Andres Spagnuolo Inmobiliaria </b> is a web development for the management and offering of the portfolio of available properties
                        both for sale or rent in the real estate.</p>
                        <p>Although the site is finished, the real estate has not launched it yet.</p>
                    </div>
                }       
                <div className="Botones">
                    <img alt="" src={barra} />
                </div>
                <h3>The Movie DB</h3>
                <img className="Images" src={cine} alt="" />
                <div className="Botones">
                    <button onClick={() => window.open("https://github.com/MarceloSpagnuolo/FT-M2/tree/master/12-React-Redux","_blank")}><img alt="" src={github}/>GitHub</button>
                    <button><img alt="" src={web2}/>{language === "spanish" ? "Visitar" : "Let's go"}</button>
                </div>
                {language === "spanish" ?
                    <div>
                        <p><b>The Movie DB</b> es un desarrollo personal sobre un proyecto de consultas y marcado de peliculas favoritas con todos sus
                        detalles.</p>
                        <p>Este proyecto surge de una homework relacionada al bootcamp realizado en Henry.</p>
                        <p>Los datos que utiliza esta aplicación se consumen a través de la API de MovieDB.</p>
                    </div>
                :
                    <div>
                        <p><b>The Movie DB</b> is a personal development on a project of consultation and bookmarking of favorite movies with all their
                        details</p>
                        <p>This project arises from a homework related to the bootcamp carried out in Henry.</p>
                        <p>The data used by this application is consumed through the MovieDB API.</p>
                    </div>
                }
                <div className="Botones">
                    <img alt="" src={barra} />
                </div>
                <h3>Genesis Web</h3>
                <img className="Images" src={web} alt="" />
                <div className="Botones">
                    <button onClick={() => window.open("http://www.genesisweb.com.ar","_blank")}><img alt="" src={web2}/>{language === "spanish" ? "Visitar" : "Let's go"}</button>
                </div>
                {language === "spanish" ?
                    <div>
                        <p><b>Genesis Web</b> desarrollo para una empresa de Hosting Web de la localidad de Leones, Argentina.</p>
                    </div>
                :
                    <div>
                        <p><b>Genesis Web</b> development for a Web Hosting company in the town of Leones, Argentina.</p>
                    </div>
                }
                <div className="Botones">
                    <img alt="" src={barra} />
                </div>
            </div>
            </div>
        </div>
        <div className="Skills" id="skills">
            {language === "spanish" ? <h3>TECNOLOGIAS</h3> : <h3>SKILLS</h3> }
            <div className="Container">
                <div className="Skill-Display">
                    <img src={js} alt="" />
                    <span>Javascript</span>
                </div>
                <div className="Skill-Display">
                    <img src={ts} alt="" />
                    <span>Typescript</span>
                </div>
                <div className="Skill-Display">
                    <img src={react2} alt="" />
                    <span>React</span>
                </div>
                <div className="Skill-Display">
                    <img src={redux} alt="" />
                    <span>Redux</span>
                </div>
                <div className="Skill-Display">
                    <img src={graph} alt="" />
                    <span>GraphQL</span>
                </div>
                <div className="Skill-Display">
                    <img src={axios} alt="" />
                    <span>Axios</span>
                </div>
                <div className="Skill-Display">
                    <img src={bcrypt} alt="" />
                    <span>Bcrypt</span>
                </div>
                <div className="Skill-Display">
                    <img src={multer} alt="" />
                    <span>Multer</span>
                </div>
                <div className="Skill-Display">
                    <img src={node} alt="" />
                    <span>NodeJs</span>
                </div>
                <div className="Skill-Display">
                    <img src={ex} alt="" />
                    <span>Express</span>
                </div>
                <div className="Skill-Display">
                    <img src={jwt} alt="" />
                    <span>JsonWebToken</span>
                </div>
                <div className="Skill-Display">
                    <img src={html} alt="" />
                    <span>HTML</span>
                </div>
                <div className="Skill-Display">
                    <img src={css} alt="" />
                    <span>Css</span>
                </div>
                <div className="Skill-Display">
                    <img src={maria} alt="" />
                    <span>MariaDB</span>
                </div>
                <div className="Skill-Display">
                    <img src={my} alt="" />
                    <span>MySQL</span>
                </div>
                <div className="Skill-Display">
                    <img src={postgres} alt="" />
                    <span>PostgresQL</span>
                </div>
                <div className="Skill-Display">
                    <img src={mongo} alt="" />
                    <span>MongoDB</span>
                </div>
                <div className="Skill-Display">
                    <img src={seq} alt="" />
                    <span>Sequelize</span>
                </div>
                <div className="Skill-Display">
                    <img src={ps} alt="" />
                    <span>Photoshop</span>
                </div>
                <div className="Skill-Display">
                    <img src={xd} alt="" />
                    <span>Adobe XD</span>
                </div>
                <div className="Skill-Display">
                    <img src={ae} alt="" />
                    <span>After Effects</span>
                </div>
                <div className="Skill-Display">
                    <img src={cd} alt="" />
                    <span>CorelDraw</span>
                </div>
                <div className="Skill-Display">
                    <img src={fusion} alt="" />
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