/* eslint-disable react/jsx-no-target-blank */
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
    <div className="wrapper">
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
                  {" "}
                  <Card.Body>
                    <Card.Img
                      className="img-thumbnail"
                      style={{ width: "200px", margin: "0 auto" }}
                      variant="top"
                      src="https://avatars.githubusercontent.com/u/56182707"
                    />
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
                    </a>
                    <div className="homeAcc">
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
                                <a
                                  href="GanesanKaruppaiyaCv.pdf"
                                  target="_blank"
                                >
                                  <i className="las la-file-pdf"></i>
                                </a>
                              </Col>{" "}
                              <Col>
                                <a
                                  href="GanesanKaruppaiyaCv.docx"
                                  target="_blank"
                                >
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
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
