import "./styles.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  SiPython,
  SiDjango,
  SiJupyter,
  SiAdobexd,
  SiJavascript,
  SiReact,
  SiGit,
  SiHtml5,
  SiPostgresql
} from "react-icons/si";

export default function tech() {
  return (
    <div
      className="tech d-none d-lg-block"
      style={{ marginTop: 20, overflowY: "hidden" }}
    >
      <h2>TechStack</h2>
      <Row className="m-auto" style={{ paddingBottom: 100 }}>
        <Col>
          <div
            class="m-auto mt-2 pt-4 card shadow"
            style={{ width: 100, height: 100 }}
          >
            <h1 style={{ color: "black" }}>
              <SiPython />
            </h1>
            {/* <div class="card-body">
              <h1><SiPython/></h1>
            </div> */}
          </div>
          <div
            class="m-auto mt-5 pt-2 card shadow"
            style={{ width: 100, height: 100 }}
          >
            <div class="card-body">
              <h1 style={{ color: "black" }}>
                <SiDjango />
              </h1>
            </div>
          </div>
          <div
            class="m-auto mt-5 pt-2 card shadow"
            style={{ width: 100, height: 100 }}
          >
            <div class="card-body">
              <h1 style={{ color: "black" }}>
                <SiJupyter />
              </h1>
            </div>
          </div>
        </Col>
        <Col>
          <div
            class="m-auto mt-2 pt-2 card shadow"
            style={{ width: 100, height: 100 }}
          >
            <div class="card-body">
              <h1 style={{ color: "black" }}>
                <SiAdobexd />
              </h1>
            </div>
          </div>
          <div
            class="m-auto mt-5 pt-2 card shadow"
            style={{ width: 100, height: 100 }}
          >
            <div class="card-body">
              <h1>
                <SiJavascript />
              </h1>
            </div>
          </div>
          <div
            class="m-auto mt-5 pt-2 card shadow"
            style={{ width: 100, height: 100 }}
          >
            <div class="card-body">
              <h1 style={{ color: "black" }}>
                <SiReact />
              </h1>
            </div>
          </div>
        </Col>
        <Col>
          <div
            class="m-auto mt-2 pt-2 card shadow"
            style={{ width: 100, height: 100 }}
          >
            <div class="card-body">
              <h1 style={{ color: "black" }}>
                <SiGit />
              </h1>
            </div>
          </div>
          <div
            class="m-auto mt-5 pt-2 card shadow"
            style={{ width: 100, height: 100 }}
          >
            <div class="card-body">
              <h1 style={{ color: "black" }}>
                <SiHtml5 />
              </h1>
            </div>
          </div>
          <div
            class="m-auto mt-5 pt-2 card shadow"
            style={{ width: 100, height: 100 }}
          >
            <div class="card-body">
              <h1 style={{ color: "black" }}>
                <SiPostgresql />
              </h1>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
