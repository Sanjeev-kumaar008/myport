import "./styles.css";
import Extra from "./extra";
import Header from "./navbar";
import Tech from "./techstack";
import Project from "./project";
import Roles from "./role";
import Con from "./contact";
import Proj from "./proj";
import Techie from "./techie.js";
import Ex from "./exp";
import Cont from "./cont";

import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <Header />
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Extra />
          </div>
          <div class="carousel-item">
            <Tech />
          </div>
          <div class="carousel-item">
            <Project />
          </div>
          <div class="carousel-item">
            <Roles />
          </div>
          <div class="carousel-item">
            <Con />
          </div>
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
      <Techie />
      <Proj />
      <Ex />
      <Cont />

      {/* <Header />

      <Tech />

      <Project />

      <Roles /> */}
    </div>
  );
}
