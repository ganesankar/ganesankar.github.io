/* eslint-disable no-lone-blocks */
/// @ts-nocheck
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Title } from "../components/Title";
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
    fetch("https://www.ganesan.dev/api/cv")
      .then((response) => response.json())
      .then((data) => {
        const filteredArray1 = data.sort((a, b) => a.orderBy - b.orderBy);
        /*filteredArray1.forEach((item) => {
          if (item.content[0].startDate &&  item.title === "Projects") {
            const  content = item.content.sort(function (a, b) {
              console.log(a.title);
              a.Start = new moment(a.startDate, "DD-MM-YYYY").format('X');
              b.Start = new moment(b.startDate, "DD-MM-YYYY").format('X');
              console.log(a.Start, b.Start);
              return a.Start - b.Start;
            });
            item.content = content
          }
        });*/
        setList(filteredArray1);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-body-tertiary">
      {loading ? (
        <div
          className="d-flex justify-content-between"
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          <div className="p-2"></div>
          <div className="d-flex align-self-center justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
          <div className="p-2"></div>
        </div>
      ) : (
        <Container className="pt-3 resume">
          <Title />
          {list.map((item, indx) => (
            <div
              className="my-3 p-3 bg-body rounded shadow-sm"
              key={`section-${item.title}`}
            >
              <strong className="d-block pb-2 mb-2 text-capitalize strong">
                {" "}
                {item.title}{" "}
              </strong>

              {(() => {
                switch (item.title) {
                  case "Summary":
                    return <Summary data={item} />;
                  case "Expertise":
                    return <Expertise data={item} />;
                  case "Experience":
                    return <Experience data={item} />;
                  case "Education":
                    return <Education data={item} />;
                  case "Awards":
                    return <Awards data={item} />;
                  case "Projects":
                    return <Projects data={item} />;
                  default:
                    return null;
                }
              })()}
            </div>
          ))}
        </Container>
      )}
    </div>
  );
};
