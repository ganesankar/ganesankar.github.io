/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
export const Heading = ({ item }) => {
  return (
    <Row className="border-top py-2">
      <Col sm={12} md={6}>
        <h6>{item.title} </h6>
        <small>
          {item.company} {item.institute}
        </small>
      </Col>
      <Col sm={12} md={6} className="text-end">
        <h6>
          {item.startdate !== "current"
            ? moment(item.startdate).format("MMM, YYYY")
            : item.startdate}{" "}
          {item.enddate ? "-" : ""}
          {item.enddate && item.enddate !== "current"
            ? moment(item.enddate).format("MMM, YYYY")
            : item.enddate}{" "}
        </h6>
        <small>{item.location}</small>
      </Col>
    </Row>
  );
};
