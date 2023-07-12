/* eslint-disable no-lone-blocks */
/// @ts-nocheck
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

import { Summary } from "../components/Summary";
import { Expertise } from "../components/Expertise";

import { Experience } from "../components/Experience";
export const ResumePage = () => {
  const [list, setList] = useState([]);

  const getData = () => {
    fetch("https://ganesan-cv-cp.netlify.app/.netlify/functions/cv-read-all")
      .then((response) => response.json())
      .then((data) => {
        let array1 = [
          "intro",
          "expertise",
          "experience",
          "education",
          "awards",
          "projects",
        ];
        let filteredArray1 = data.filter((item: { data: { tag: string } }) =>
          array1.includes(item.data.tag)
        );
        setList(filteredArray1);
        console.log(filteredArray1);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="pb-3 resume">
      <Row>
        <Col className="pt-3"></Col>
      </Row>
      <Accordion defaultActiveKey="0">
        {list.map((item, indx) => (
          <div key={indx}>
            <Accordion.Item eventKey={String(indx)} className="my-3">
              <Accordion.Header>{item.data.tag}</Accordion.Header>
              <Accordion.Body>
                {(() => {
                  switch (item.data.tag) {
                    case "intro":
                      return <Summary data={item.data} />;
                    case "expertise":
                      return <Expertise data={item.data} />;
                    case "experience":
                      return <Experience data={item.data} />;
                    case "education":
                      return <Summary data={item.data} />;
                    case "awards":
                      return <Summary data={item.data} />;
                    case "projects":
                      return <Summary data={item.data} />;
                    default:
                      return null;
                  }
                })()}
              </Accordion.Body>
            </Accordion.Item>
          </div>
        ))}
      </Accordion>
      <Row>
        <Col className="pt-3">
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
