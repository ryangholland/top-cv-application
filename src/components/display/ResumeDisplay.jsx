import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EducationDisplay from "./EducationDisplay";
import ExperienceDisplay from "./ExperienceDisplay";

function ResumeDisplay({ userData }) {
  return (
    <Container style={{ height: "11in" }}>
      <Row className="p-4 bg-dark text-light">
        <Col xs="12">
          <h1 className="text-center mb-3 fw-bold">
            {userData.personalDetails.name}
          </h1>
        </Col>
        <Col>
          <h6 className="text-center">
            {userData.personalDetails.email} | {userData.personalDetails.phone}{" "}
            | {userData.personalDetails.address}
          </h6>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} className="mt-3">
          <h5 className="text-center p-2 bg-dark-subtle fw-bold">Education</h5>
        </Col>
        {userData.education.length > 0 &&
          userData.education.map((educationObject) => {
            return (
              <EducationDisplay
                key={educationObject.id}
                education={educationObject}
              />
            );
          })}
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} className="mt-3">
          <h5 className="text-center p-2 bg-dark-subtle fw-bold">
            Professional Experience
          </h5>
        </Col>
        {userData.workExperience.length > 0 &&
          userData.workExperience.map((experience) => {
            return (
              <ExperienceDisplay key={experience.id} experience={experience} />
            );
          })}
      </Row>
    </Container>
  );
}

export default ResumeDisplay;
