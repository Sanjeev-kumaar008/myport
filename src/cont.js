import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";

export default function cont() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        class="btn mt-5"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{ marginTop: 20 }}
      >
        <h2>Contact Me</h2>
      </button>
      <div style={{ minwidth: "100px" }}>
        <Collapse in={open} dimension="height">
          <div className="m-auto" id=" example-collapse-text">
            <Card className="m-auto mt-2" body style={{ width: "300px" }}>
              <h3>skumaar000@gmail.com</h3>
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
