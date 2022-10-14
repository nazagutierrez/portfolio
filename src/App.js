import "../src/styles/App.scss";
import { Routes, Route, Link } from "react-router-dom";

import AboutMe from "./components/pages/aboutMe";
import Cards from "./components/cards/cards";

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar navbar-expand-lg rounded">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="navbar-nav mb-5">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white fs-6" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fs-6" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/aboutme" className="nav-link text-white fs-6">
                    About me
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fs-6" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h1 className="d-flex justify-content-center text-white mt-5 animate__animated animate__fadeInDown">
          Nazareno Gutierrez
        </h1>
        <p className="d-flex justify-content-center text-white fst-italic fs-5 animate__animated animate__fadeInUp">
          Frontend Developer ReactJS
        </p>
        <p className="d-flex justify-content-center text-white mt-5">
          Hello!, I'm a junior/trainee Web Developer with React, my hobbies are
          make solutions and style pages. One of my objetives are be in a kind
          team work in wich I can contribute with my knowledge and may be
          possible learn from them. I'm still studying React to use the 100% of
          it and also ploish my practices
        </p>
        <Cards></Cards>
        
      </div>
      <Routes>
        <Route exact path="/"></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
