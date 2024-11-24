import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function EducationGroup({ education, setSelectedEducation }) {
  return (
    <Col>
      {education.map((educationObject) => {
        return (
          <Button
            key={educationObject}
            className="w-100 mb-2"
            variant="outline-secondary"
            onClick={() => setSelectedEducation(educationObject)}
          >
            {educationObject.school}
          </Button>
        );
      })}
    </Col>
  );
}

export default EducationGroup;
