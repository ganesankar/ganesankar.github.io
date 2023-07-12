import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
export const HomePage = () => {
  const numbers = [
    {
      icon: "lab la-wordpress",
      title: "Website",
      url: "https://www.ganesan.dev/",
    },
    {
      icon: "lab la-facebook",
      title: "Facebook",
      url: "https://www.facebook.com/ganesankars",
    },
    {
      icon: "lab la-instagram",
      title: "Instagram",
      url: "https://instagram.com/ganesankar",
    },
    {
      icon: "lab la-linkedin",
      title: "Linkedin",
      url: "https://linkedin.com/in/ganesankar",
    },
    {
      icon: "lab  la-snapchat",
      title: "SnapChat",
      url: "https://www.snapchat.com/add/ganesankar",
    },
    {
      icon: "lab  la-whatsapp",
      title: "Whatsapp",
      url: "https://api.whatsapp.com/send?phone=919943732416",
    },
    {
      icon: "lab  la-twitter",
      title: "Twitter",
      url: "https://twitter.com/ganesankar",
    },
    {
      icon: "lab  la-telegram",
      title: "Telegram",
      url: "https://t.me/ganesankar",
    },
    {
      icon: "lab la-github",
      title: "Github",
      url: "https://github.com/ganesankar",
    },
    {
      icon: "lab la-skype",
      title: "skype",
      url: "skype:ganesan.intech",
    },
  ];
  const listItems = numbers.map((item) => (
    <Col>
      <a href={item.url} target="_blank" title={item.title} rel="noreferrer">
        <i className={item.icon}></i>
      </a>
    </Col>
  ));
  return (
    <div className="wrapperc">
      <Container>
        <Row>
          <Col sm={12} md={2} lg={3} xl={3} xxl={4}></Col>
          <Col sm={12} md={8} lg={6} xl={6} xxl={4}>
            <div
              className="d-flex align-items-center"
              style={{ height: "100vh" }}
            >
              <Card
                style={{ width: "100%", margin: 0 }}
                className="text-center m-0 p-0 py-3 index"
              >
                <Card.Img
                  className="img-thumbnail"
                  style={{ width: "200px", margin: "0 auto" }}
                  variant="top"
                  src="data:image/jpeg;base64,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"
                />
                <Card.Body>
                  <Card.Text>
                    <h3>Ganesan Karuppaiya</h3>
                    <h6>Chennai -India</h6>
                    <p>
                      Full Stack Lead Developer &amp; <br /> User Interface
                      Designer{" "}
                    </p>
                  </Card.Text>
                  <a className="primary " href="mailto:ganesank@live.com">
                    <i className="las la-envelope"></i> Mail
                  </a>{" "}
                  &nbsp;
                  <a className="primary ghost" href="tel:+919943732416">
                    <i className="las la-phone"></i> Call
                  </a>{" "}
                </Card.Body>

                <Accordion defaultActiveKey={["0"]} alwaysOpen flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {" "}
                      <i className="las la-globe"></i> Social{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="social">
                        <Row sm={5}> {listItems}</Row>{" "}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {" "}
                      <i className="las la-file-pdf"></i> Resume{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row sm={3} className="social">
                        <Col>
                          <a href="GanesanKaruppaiyaCv.pdf" target="_blank">
                            <i className="las la-file-pdf"></i>
                          </a>
                        </Col>{" "}
                        <Col>
                          <a href="GanesanKaruppaiyaCv.docx" target="_blank">
                            <i className="las la-file-word"></i>
                          </a>
                        </Col>
                        <Col>
                          <Link to="/resume">
                            <i className="las la-file-code"></i>
                          </Link>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
