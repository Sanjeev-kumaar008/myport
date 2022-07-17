import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import $ from "jquery";
import { useState } from "react";
import { Button } from "bootstrap";

const navbar = () => {
  const [name, setName] = useState(" ");

  return (
    <nav
      class="navbar navbar-nav fixed-top d-none d-lg-block navbar-light transparent nav-pills nav-fill"
      style={{ marginTop: 5, paddingBottom: 150 }}
    >
      <div class="container-fluid justify-content-center">
        <Row className=" navrow carousel-indicators">
          <Col className="justify-content-center navcol">
            <button
              type="button"
              className="shadow m-3  btn-outline-primary btn"
              data-target="#myCarousel"
              data-slide-to="0"
              href="#"
              id="home"
            >
              <li>Home</li>
            </button>
            <button
              type="button"
              className="shadow m-3 btn btn-outline-secondary"
              data-target="#myCarousel"
              data-slide-to="1"
              href="#"
            >
              <li>TechStack</li>
            </button>
            <button
              type="button"
              className="shadow m-3 btn btn-outline-success"
              id="about"
              data-target="#myCarousel"
              data-slide-to="2"
              href="#"
            >
              <li>Projects</li>
            </button>

            <button
              type="button"
              className="shadow m-3 btn btn-outline-danger"
              id="exp"
              data-target="#myCarousel"
              data-slide-to="3"
              href="#"
            >
              <li>Experience</li>
            </button>
            <button
              type="button"
              className="shadow m-3 btn btn-outline-black"
              id="con"
              data-target="#myCarousel"
              data-slide-to="4"
              href="#"
            >
              <li>Contact</li>
            </button>
          </Col>
        </Row>
      </div>
      {/* <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"
      ></script>

      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script> */}
    </nav>
  );
};
export default navbar;
