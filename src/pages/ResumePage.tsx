/* eslint-disable no-lone-blocks */
/// @ts-nocheck
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Summary } from "../components/Summary";
import { Expertise } from "../components/Expertise";
import { Education } from "../components/Education";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Awards } from "../components/Awards";

export const ResumePage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
        console.log(filteredArray1);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-body-tertiary">
      { loading && (
        <div className="d-flex justify-content-between" style={{ height: "100vh", width: "100vw" }}>
          <div className="p-2"></div>
          <div className="d-flex align-self-center justify-content-center">Loading</div>
          <div className="p-2"></div>
        </div>
      )}
      <Container className="pt-3 resume">
        {list.map((item, indx) => (
          <div className="my-3 p-3 bg-body rounded shadow-sm">
            {item.data.tag !== "intro" && (
              <strong className="d-block pb-2 mb-2 text-capitalize strong">
                {item.data.tag}{" "}
              </strong>
            )}

            {(() => {
              switch (item.data.tag) {
                case "intro":
                  return <Summary data={item.data} />;
                case "expertise":
                  return <Expertise data={item.data} />;
                case "experience":
                  return <Experience data={item.data} />;
                case "education":
                  return <Education data={item.data} />;
                case "awards":
                  return <Awards data={item.data} />;
                case "projects":
                  return <Projects data={item.data} />;
                default:
                  return null;
              }
            })()}
          </div>
        ))}
      </Container>
    </div>
  );
};
