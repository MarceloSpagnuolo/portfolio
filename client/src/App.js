import { Route } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
}

export default App;
