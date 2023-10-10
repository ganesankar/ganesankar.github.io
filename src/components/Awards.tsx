/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import moment from "moment";

export const Awards = ({ data }) => {
  return (
    <Container fluid>
      <Accordion defaultActiveKey="0">
        {data?.content?.length &&
          data.content.map((item, indx) => (
            <div className="d-block" key={`Awards-${indx}`}>
              <Row className="border-top py-2">
                <Col sm={6} md={6}>
                  <h6 className="text-primary">{item.title} </h6>
                  <small>
                    {item.company} {item.subtitle}
                  </small>
                </Col>
                <Col sm={6} md={6} className="text-end">
                  <h6 className="text-primary">
                    {item.startDate !== "current"
                      ? moment(item.startDate, "DD-MM-YYYY").format("MMM, YYYY")
                      : item.startDate}
                    {item.endDate ? " - " : ""}
                  </h6>
                  <small className="text-muted">{item.location}</small>
                </Col>
              </Row>
            </div>
          ))}
      </Accordion>
    </Container>
  );
};
