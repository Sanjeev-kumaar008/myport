import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function proj() {
  return (
    <div className="proj d-block d-sm-none" style={{ marginTop: 20 }}>
      <h2>Projects</h2>
      {/* <br></br> */}

      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="m-auto card border-danger mb-3" style={{ width: 250 }}>
              <div class=" shadow card-header bg-white border-primary bold">
                Virtual Labs
              </div>
              <div class="card-body text-black">
                <h5 class="card-title">Simulation Building</h5>
                <p class="card-text">
                  Simulation on Communication system laboratory experiment using
                  front-end technologies to promote the effectiveness of online
                  education.
                </p>
              </div>
              <div class="shadow card-footer bg-white border-primary">
                <a
                  href="https://www.rajalakshmi.org/VLabsRECUpdated/simulation.html"
                  target="_blank"
                >
                  More info
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              className="m-auto card border-primary mb-3 "
              style={{ width: 250 }}
            >
              <div class="card-header shadow bg-white border-primary">
                Data Analysis
              </div>
              <div class="card-body text-black">
                <h5 class="card-title">Credit Risk Modelling</h5>
                <p class="card-text">
                  Developed a model which would forecast the loss based on the
                  behaviour of customers’ historical transactions and Macro
                  Economic Variables.
                </p>
              </div>
              <div class="card-footer shadow bg-white border-success">
                <a
                  href="https://github.com/Sanjeev-kumaar008/TCS-INTERN.git"
                  target="_blank"
                >
                  More info
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="m-auto card border-success mb-3" style={{ width: 250 }}>
              <div class="card-header bg-white shadow border-success">
                Blockchain
              </div>
              <div class="card-body text-black">
                <h5 class="card-title">Secured E-Voting</h5>
                <p class="card-text">
                  Secured Voting system built on Ethereum network using the
                  development environment called ganache .UI built using React
                  and web3Js
                </p>
              </div>
              <div class=" inline disabled card-footer bg-white shadow border-success">
                {/* <a href="/" class="btn-disabled" >
                  More info
                </a> */}
                To be Updated . . . .
                <div
                  style={{ width: 20, height: 20 }}
                  className="m-auto spinner-border"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
