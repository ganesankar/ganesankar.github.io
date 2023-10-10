/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
export const Heading = ({ item }) => {
  return (
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
            ?  moment(item.startDate, 'DD-MM-YYYY').format("MMM, YYYY")
            : item.startDate}
          {item.endDate ? " - " : ""}
          {item.endDate && item.endDate !== "P"
            ? moment(item.endDate, 'DD-MM-YYYY').format("MMM, YYYY")
            : "Present"}
        </h6>
        <small className="text-muted">{item.location}</small>
      </Col>
    </Row>
  );
};
