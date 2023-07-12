/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Expertise = ({ data }) => { 
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <ul>
            {data?.content?.length &&
              data.content.map((ite, indx) => (
                <li>
                  <b>{ite.title} : </b>{" "}
                  {ite?.content?.length &&
                    ite.content.map((ite, indx) => <span>{ite.title}; </span>)}
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
