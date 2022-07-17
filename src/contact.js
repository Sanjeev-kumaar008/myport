import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function contact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-none d-lg-block">
      <button
        class="btn"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{ marginTop: 20 }}
      >
        <h2>Contact Me</h2>
      </button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} dimension="width">
          <div className="m-auto" id=" example-collapse-text">
            <Card className="m-auto mt-2" body style={{ width: "400px" }}>
              <h3>skumaar000@gmail.com</h3>
              <h3>
                <a
                  href="https://www.linkedin.com/in/m-sanjeev-kumaar-3733ab183/"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <AiFillLinkedin />
                </a>
              </h3>
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
