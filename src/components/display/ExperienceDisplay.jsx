import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ExperienceDisplay({ experience }) {
  return (
    <Row className="my-2">
      <Col xs={{ span: 3, offset: 1 }}>
        <p className="m-0">
          {experience.startDate} - {experience.endDate}
        </p>
        <p className="m-0">{experience.location}</p>
      </Col>
      <Col xs={"8"}>
        <p className="m-0 fw-bold">{experience.company}</p>
        <p className="m-0">{experience.position}</p>
        <ul className="p-0 px-4 mt-1">
          {experience.responsibilities.map((responsibility) => {
            return <li key={responsibility}>{responsibility}</li>;
          })}
        </ul>
      </Col>
    </Row>
  );
}

export default ExperienceDisplay;
