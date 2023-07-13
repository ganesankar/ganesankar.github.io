/* eslint-disable jsx-a11y/alt-text */
/// @ts-nocheck
import Container from "react-bootstrap/Container"; 
import Accordion from "react-bootstrap/Accordion"; 
import { Heading } from "./Heading";

export const Awards = ({ data }) => {
  console.log(data);
  return (
    <Container fluid>
      <Accordion defaultActiveKey="0">
        {data?.content?.length &&
          data.content.map((ite, indx) => (
            <div className="d-block">
              <Heading item={ite} />
            </div>
          ))}
      </Accordion>
    </Container>
  );
};
