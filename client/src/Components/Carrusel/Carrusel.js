import React from "react";
import Slider from "react-animated-slider";
import "./Carrusel.css";
import "./slider-animation.css";
import "./style.css";

const url = window.location.origin;

const content = [
  {
    title: "Henry Manager",
    description:
      "Completa solución web responsiva desarrollada íntegramente tanto para el manejo de alumnos por parte de los administradores y los Projects Manager de la academía, como así también resulta una herramienta indispensable para los propios alumnos para administrar su carrera y evaluar su desempeño.",
    button: "GitHub",
    link: "https://github.com/MarceloSpagnuolo/Proyecto-Final-ft07-04",
    button2: "",
    link2: "",
    image: `${url}/images/henry.jpg`,
  },
  {
    title: "Ecommerce Patagonia",
    description:
      "Desarrollado completo y funcional para la promoción y venta de una reconocida marca de cerveza de la patagonia argentina.",
    button: "GitHub",
    link: "https://github.com/MarceloSpagnuolo/ecommerce_patagonia",
    button2: "Visitar",
    link2: "https://ecommerce-patagonia.vercel.app/",
    image: `${url}/images/patagonia2.jpg`,
  },
  {
    title: "Medellín Media Network",
    description:
      "Desarrollo de un sitio web institucional para una agencia de medios y publicidad de la ciudad de Medellín, Colombia.",
    button: "Visitar",
    link: "http://c2160099.ferozo.com",
    button2: "",
    link2: "",
    image: `${url}/images/mmn.jpg`,
  },
  {
    title: "La Genesis 106.9 FM",
    description:
      "Desarrollo de una completa web de promociones y noticias para una empresa multimedios de la localidad de Leones, Argentina.",
    button: "Visitar",
    link: "http://www.lagenesis.com.ar",
    button2: "",
    link2: "",
    image: `${url}/images/genesis.jpg`,
  },
  {
    title: "El Verano en tu Pileta",
    description:
      "Desarrollo de un sitio web por un lado institucional, sumado a un catálogo de todos los productos que el propietario puede ofrecer al cliente.",
    button: "Visitar",
    link: "http://www.elveranoentupileta.com.ar",
    button2: "",
    link2: "",
    image: `${url}/images/pileta.jpg`,
  },
  {
    title: "Andrea Spagnuolo Inmobiliaria",
    description:
      "Desarrollo web de gestíon y ofrecimiento del portfolio de inmuebles disponibles tanto para venta o alquiler en la cartera de la inmobiliaria.",
    button: "",
    link: "",
    button2: "",
    link2: "",
    image: `${url}/images/inmo.jpg`,
  },
  {
    title: "The Movie Db",
    description:
      "Desarrollo personal sobre un proyecto de consultas y marcado de peliculas favoritas con todos sus detalles. Este proyecto surge de una homework relacionada al bootcamp realizado en Henry. Los datos que utiliza esta aplicación se consumen a través de la API de MovieDB.",
    button: "GitHub",
    link:
      "https://github.com/MarceloSpagnuolo/FT-M2/tree/master/12-React-Redux",
    button2: "",
    link2: "",
    image: `${url}/images/TheMovieDb.jpg`,
  },
  {
    title: "Genesis Web",
    description:
      "Desarrollo de una web institucional para una empresa de Hosting Web de la localidad de Leones, Argentina.",
    button: "Visitar",
    link: "http://www.genesisweb.com.ar",
    button2: "",
    link2: "",
    image: `${url}/images/web.jpg`,
  },
];

const ingles = [
  {
    title: "Henry Manager",
    description:
      "Complete and responsive web solution developed entirely both for the management of students by administrators and Project Managers of the academy, as well as an indispensable tool for the students themselves to manage their career and evaluate your performance.",
    button: "GitHub",
    link: "https://github.com/MarceloSpagnuolo/Proyecto-Final-ft07-04",
    button2: "",
    link2: "",
    image: `${url}/images/henry.jpg`,
  },
  {
    title: "Ecommerce Patagonia",
    description:
      "Complete ecommerce developed for the promotion and sale of a recognized brand of beer from Argentine Patagonia.",
    button: "GitHub",
    link: "https://github.com/MarceloSpagnuolo/ecommerce_patagonia",
    button2: "Visit",
    link2: "https://ecommerce-patagonia.vercel.app/",
    image: `${url}/images/patagonia2.jpg`,
  },
  {
    title: "Medellín Media Network",
    description:
      "It's a development of an institutional website for a media and advertising agency of the city of Medellín, Colombia.",
    button: "Visit",
    link: "http://c2160099.ferozo.com",
    button2: "",
    link2: "",
    image: `${url}/images/mmn.jpg`,
  },
  {
    title: "La Genesis 106.9 FM",
    description:
      "It's a development of a complete website of promotions and news for a multimedia company from the town of Leones, Argentina.",
    button: "Visit",
    link: "http://www.lagenesis.com.ar",
    button2: "",
    link2: "",
    image: `${url}/images/genesis.jpg`,
  },
  {
    title: "El Verano en tu Pileta",
    description:
      "It's a development of a website on an institutional side, added to a catalog of all the products that the owner can offer to the customer.",
    button: "Visit",
    link: "http://www.elveranoentupileta.com.ar",
    button2: "",
    link2: "",
    image: `${url}/images/pileta.jpg`,
  },
  {
    title: "Andrea Spagnuolo Inmobiliaria",
    description:
      "It's a web development for the management and offering of the portfolio of available properties both for sale or rent in the real estate.",
    button: "Visit",
    link: "http://www.andreaspagnuolo.com",
    button2: "",
    link2: "",
    image: `${url}/images/inmo.jpg`,
  },
  {
    title: "The Movie Db",
    description:
      "It's a personal development on a project of consultation and bookmarking of favorite movies with all their details. This project arises from a homework related to the bootcamp carried out in Henry. The data used by this application is consumed through the MovieDB API.",
    button: "GitHub",
    link:
      "https://github.com/MarceloSpagnuolo/FT-M2/tree/master/12-React-Redux",
    button2: "",
    link2: "",
    image: `${url}/images/TheMovieDb.jpg`,
  },
  {
    title: "Genesis Web",
    description:
      "It's a development for a Web Hosting company in the town of Leones, Argentina.",
    button: "Visit",
    link: "http://www.genesisweb.com.ar",
    button2: "",
    link2: "",
    image: `${url}/images/web.jpg`,
  },
];

function Carrusel(props) {
  return (
    <div className="slider-contenedor">
      <Slider autoplay={5000}>
        {props.idioma === "spanish"
          ? content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{
                  background: `url('${item.image}') no-repeat center center`,
                }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button onClick={() => window.open(item.link, "_blank")}>
                    {item.button}
                  </button>
                  {item.button2.length > 0 && (
                    <button onClick={() => window.open(item.link2, "_blank")}>
                      {item.button2}
                    </button>
                  )}
                </div>
              </div>
            ))
          : ingles.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{
                  background: `url('${item.image}') no-repeat center center`,
                }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button onClick={() => window.open(item.link, "_blank")}>
                    {item.button}
                  </button>
                  {item.button2.length > 0 && (
                    <button onClick={() => window.open(item.link2, "_blank")}>
                      {item.button2}
                    </button>
                  )}
                </div>
              </div>
            ))}
      </Slider>
    </div>
  );
}

export default Carrusel;
