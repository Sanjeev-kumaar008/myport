import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function role() {
  return (
    <div style={{ marginTop: 20, textAlign: "center" }}>
      <h2>Experience</h2>
      <Row className="justify-content-center">
        <div
          class=" m-auto card text-white bg-dark mb-3"
          style={{ width: 200, height: 250, padding: 10 }}
        >
          <img
            src="https://internship.thesparksfoundation.info/assests/img/logo.png"
            alt="sparks"
            style={{ height: 250 }}
          />
          <div class="card-body">
            <p class="card-text">Web dev Intern</p>
          </div>
        </div>
        <div
          class="m-auto card text-white bg-dark mb-3"
          style={{ width: 200, height: 250, padding: 10 }}
        >
          <img
            src="https://www.vlab.co.in/images/logo.jpg"
            alt="vlabs"
            style={{ height: 250 }}
          />

          <div class="card-body">
            <p class="card-text">Web dev Intern</p>
          </div>
        </div>
        <div
          class="m-auto card text-white bg-dark mb-3"
          style={{ width: 200, height: 250, padding: 10 }}
        >
          <img
            src="https://media.glassdoor.com/sqll/13461/tata-consultancy-services-squareLogo-1634801936679.png"
            alt="tcs"
            style={{ height: 250 }}
          />
          <div class="card-body">
            <p class="card-text">Data Analyst Intern</p>
          </div>
        </div>
      </Row>
    </div>
  );
}
