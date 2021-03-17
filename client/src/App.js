import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Carrusel from "../src/Components/Carrusel/Carrusel";
import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/carrusel" component={Carrusel} />
    </>
  );
}

export default App;
