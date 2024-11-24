import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EducationDisplay( {education} ) {
  return (
    <Row className="my-2">
      <Col xs={{ span: 4, offset: 1 }}>
        <p className="m-0">{education.startYear} - {education.endYear}</p>
        <p className="m-0">{education.location}</p>
      </Col>
      <Col xs={"7"}>
        <p className="m-0 fw-bold">{education.school}</p>
        <p className="m-0">{education.degree} in {education.fieldOfStudy}</p>
      </Col>
    </Row>
  );
}

export default EducationDisplay;
