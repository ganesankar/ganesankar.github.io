/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck
import Container from "react-bootstrap/Container"; 
import Accordion from "react-bootstrap/Accordion"; 
import { Heading } from "./Heading";

export const Education = ({ data }) => {
  return (
    <Container fluid>
      <Accordion defaultActiveKey="0">
        {data?.content?.length &&
          data.content.map((ite, indx) => (
            <div className="d-block" key={`Education-${indx}`}>
              <Heading item={ite} />
            </div>
          ))}
      </Accordion>
    </Container>
  );
};
