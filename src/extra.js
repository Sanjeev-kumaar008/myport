import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function extra() {
  return (
    <div className="extra justify-content-center " style={{ marginTop: 20 }}>
      <div className="row justify-content-center">
        <div className="m-auto col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
          <img
            src="https://media-exp2.licdn.com/dms/image/C5603AQGAsygqpfmQ4w/profile-displayphoto-shrink_800_800/0/1625435641863?e=1661385600&v=beta&t=qoUCNRvMkQMzA4bMRfKUHaBJa8KKpJlL4vD7qpXnF5w"
            alt="Profile"
            width="200"
            height="200"
          />
        </div>
        <br></br>
        <div className="mt-auto col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <Row>
            <Col style={{ width: 100, textAlign: "center" }}>
              <h1>Welcome to my Portfolio</h1>
              <h2>This is Sanjeev Kumaar M</h2>
              {/* <img src="https://media-exp2.licdn.com/dms/image/C5603AQGAsygqpfmQ4w/profile-displayphoto-shrink_800_800/0/1625435641863?e=1661385600&v=beta&t=qoUCNRvMkQMzA4bMRfKUHaBJa8KKpJlL4vD7qpXnF5w" alt="Profile" width="100" height="100" /> */}
              <br></br>

              <div
                style={{
                  width: 150,
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <Row>
                  <Col>
                    <h1>
                      <a
                        href="https://www.linkedin.com/in/m-sanjeev-kumaar-3733ab183/"
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        <AiFillLinkedin />
                      </a>
                    </h1>
                  </Col>
                  <Col>
                    <h1>
                      <a
                        href="https://github.com/Sanjeev-kumaar008"
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        <AiFillGithub />
                      </a>
                    </h1>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
