/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Expertise = ({ data }) => { 
  return (
    <Container fluid>
      <Row>
        <Col sm={12} className="border-top py-2">
          <ul>
            {data?.content?.length &&
              data.content.map((ite, indx) => (
                <li>
                  <b>{ite.title} : </b>{" "}
                  {ite?.list?.length &&
                    ite.list.map((ite, indx) => <span  key={`expertise-${indx}`}>{ite}; </span>)}
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
