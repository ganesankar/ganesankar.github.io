/* eslint-disable no-lone-blocks */
/// @ts-nocheck
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
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
    <Container className="pt-3 resume">
      {list.map((item, indx) => (
        <Card className="mb-3 ResumeTop">
          <Card.Subtitle className="mb-2 text-muted">
            {item.data.tag}
          </Card.Subtitle>
          <Card.Body>
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
          </Card.Body>
        </Card>
      ))}
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
