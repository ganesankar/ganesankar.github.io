/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LiaGlobeAmericasSolid,LiaDownloadSolid, LiaEnvelopeSolid, LiaPhoneSolid} from "react-icons/lia";

export const Title = ({ data }) => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} className="my-3 p-3 bg-body rounded shadow-sm">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              {" "}
              <img
                className="img-thumbnail"
                variant="top"
                src="https://avatars.githubusercontent.com/u/56182707"
                width="150"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <Container fluid>
                <Row>
                  <Col sm={12} md={6}>
                    <h5 className="d-block pb-2 mb-0 text-capitalize strong">
                      {" "}
                      <strong> <span className="text-primary ">Ganesan</span> Karuppaiya</strong>
                    </h5>
                    <strong>Technology Lead/ Full Stack Developer</strong>
                    <br />
                    <small>Chennai IN</small> <br />
                    <a
                      href="https://ganesankar.github.io/cv/GanesanKaruppaiyaCv.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="link-offset-2 link-underline link-underline-opacity-0"
                    >
                      {" "}
                      <LiaDownloadSolid /> Download
                    </a>
                  </Col>
                  <Col sm={12} md={6} className="text-end">
                    <p className="text-right">
                      <br />{" "}
                      <a className="link-offset-2 link-underline link-underline-opacity-0" href="http://ganesan.dev">
                      <LiaGlobeAmericasSolid /> www.ganesan.dev
                      </a>
                      <br />{" "}
                      <a className="link-offset-2 link-underline link-underline-opacity-0" href="mailto:ganesank@live.com">
                      <LiaEnvelopeSolid /> Ganesank@live.com
                      </a>
                      <br />{" "}
                      <a href="tel:+919943732416" className="link-offset-2 link-underline link-underline-opacity-0">
                      <LiaPhoneSolid /> +91 994 373 2416
                      </a>
                    </p>
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
