/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
export const Experience = ({ data }) => {
  console.log(data);
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Accordion defaultActiveKey="exp0" flush>
            {data?.content?.length &&
              data.content.map((ite, indx) => (
                <Accordion.Item eventKey={`exp${indx}`} className="my-3">
                  <Accordion.Header> <b>{ite.title} </b>  {" "} @  {" "}{ite.company}</Accordion.Header>
                  <Accordion.Body>
                     {" "}
                    {ite?.content?.length &&
                      ite.content.map((ite, indx) => <li>{ite.title}; </li>)}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
         
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};
