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

export default function techie() {
  return (
    <div className="d-block d-sm-none p-auto" style={{ marginTop: 100 }}>
      <h2>TechStack</h2>
      <div style={{ padding: 20 }}>
        <div id="accordion ">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Skillset - 1
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <Col>
                <div
                  class="m-auto mt-2 pt-3 card shadow"
                  style={{ width: 100, height: 75 }}
                >
                  <h1 style={{ color: "black" }}>
                    <SiPython />
                  </h1>
                  {/* <div class="card-body">
              <h1><SiPython/></h1>
            </div> */}
                </div>
                <div
                  class="m-auto mt-5 pt-1 card shadow"
                  style={{ width: 100, height: 75 }}
                >
                  <div class="card-body">
                    <h1 style={{ color: "black" }}>
                      <SiDjango />
                    </h1>
                  </div>
                </div>
                <div
                  class="m-auto mt-5 pt-1 card shadow"
                  style={{ width: 100, height: 75 }}
                >
                  <div class="card-body">
                    <h1 style={{ color: "black" }}>
                      <SiJupyter />
                    </h1>
                  </div>
                </div>
              </Col>
              <br></br>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Skillset - 2
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <Col>
                <div
                  class="m-auto mt-2 pt-1 card shadow"
                  style={{ width: 100, height: 75 }}
                >
                  <div class="card-body">
                    <h1 style={{ color: "black" }}>
                      <SiAdobexd />
                    </h1>
                  </div>
                </div>
                <div
                  class="m-auto mt-5 pt-2 card shadow"
                  style={{ width: 100, height: 75 }}
                >
                  <div class="card-body">
                    <h1>
                      <SiJavascript />
                    </h1>
                  </div>
                </div>
                <div
                  class="m-auto mt-5 pt-2 card shadow"
                  style={{ width: 100, height: 75 }}
                >
                  <div class="card-body">
                    <h1 style={{ color: "black" }}>
                      <SiReact />
                    </h1>
                  </div>
                </div>
              </Col>
              <br></br>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Skillset - 3
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <Col>
                <div
                  class="m-auto mt-2 pt-2 card shadow"
                  style={{ width: 100, height: 75 }}
                >
                  <div class="card-body">
                    <h1 style={{ color: "black" }}>
                      <SiGit />
                    </h1>
                  </div>
                </div>
                <div
                  class="m-auto mt-5 pt-2 card shadow"
                  style={{ width: 100, height: 75 }}
                >
                  <div class="card-body">
                    <h1 style={{ color: "black" }}>
                      <SiHtml5 />
                    </h1>
                  </div>
                </div>
                <div
                  class="m-auto mt-5 pt-2 card shadow"
                  style={{ width: 100, height: 75 }}
                >
                  <div class="card-body">
                    <h1 style={{ color: "black" }}>
                      <SiPostgresql />
                    </h1>
                  </div>
                </div>
              </Col>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
