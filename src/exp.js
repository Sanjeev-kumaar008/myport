import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function proj() {
  return (
    <div className="proj d-block d-sm-none" style={{ marginTop: 100 }}>
      <h2>Projects</h2>
      {/* <br></br> */}

      <div id="myCarouselo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="card m-auto" style={{ width: 150, height: 170 }}>
              <img
                className="m-auto card-img-top pt-1"
                style={{ width: 100, height: 100 }}
                src="https://internship.thesparksfoundation.info/assests/img/logo.png"
                alt="internship"
              />
              <div class="card-body">
                <p class="card-text">Web Dev Intern</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="card m-auto" style={{ width: 150, height: 170 }}>
              <img
                className="m-auto card-img-top pt-1"
                style={{ width: 100, height: 100 }}
                src="https://www.vlab.co.in/images/logo.jpg"
                alt="internship"
              />
              <div class="card-body">
                <p class="card-text">Web Dev Intern</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="card m-auto" style={{ width: 150, height: 170 }}>
              <img
                className="m-auto card-img-top pt-1"
                style={{ width: 100, height: 100 }}
                src="https://media.glassdoor.com/sqll/13461/tata-consultancy-services-squareLogo-1634801936679.png"
                alt="internship"
              />
              <div class="card-body">
                <p class="card-text">Data Analyst Intern</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarouselo"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarouselo"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
