/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton"; 
import { Heading } from "./Heading";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return <div onClick={decoratedOnClick}>{children}</div>;
}

export const Experience = ({ data }) => {
  return (
    <Container fluid>
      <Accordion defaultActiveKey="0">
        {data?.content?.length &&
          data.content.map((ite, indx) => (
            <div className="d-block">
              <CustomToggle eventKey={indx.toString()}>
                <Heading item={ite} />
              </CustomToggle>
              <Accordion.Collapse eventKey={indx.toString()}>
                <Row>
                  <Col sm={12}>{ite.desc}</Col>
                  <Col sm={12} className="small ">
                    <ul className="my-3">
                      {ite?.content?.length &&
                        ite.content.map((ite, indx) => <li>{ite.title}; </li>)}
                    </ul>
                  </Col>{" "}
                </Row>
              </Accordion.Collapse> 
            </div>
          ))}
      </Accordion>
    </Container>
  );
};
