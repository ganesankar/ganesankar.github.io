/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Summary = ({ data }) => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} className="border-top py-2">
          <ul>
            {data?.content?.length &&
              data.content.map((ite, indx) => <li  key={`summary-${ indx}`}>{ite.desc}</li>)}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
