/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Summary = ({ data }) => {
  console.log(data);
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              {" "}
              <img
                className="img-thumbnail"
                variant="top"
                src="https://avatars.githubusercontent.com/u/56182707"
                width="150"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <Container fluid>
                <Row>
                  <Col sm={12} md={6}>
                    <h5 className="d-block pb-2 mb-0 text-capitalize strong">
                      {" "}
                      <strong> Ganesan Karuppaiya</strong>
                    </h5>
                    <strong>Technology Lead/ Full Stack Developer</strong>
                    <br />
                    <small>Chennai IN</small>
                  </Col>
                  <Col sm={12} md={6} className="text-end">
                    <p class="text-right">
                      <br /> <a href="http://ganesan.dev">www.ganesan.dev</a>
                      <br />{" "}
                      <a href="mailto:ganesank@live.com">Ganesank@live.com</a>
                      <br /> <a href="tel:+919943732416">+91 994 373 2416</a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={12} className="">
                  <div dangerouslySetInnerHTML={ {__html: data.desc} } />
                    
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
