import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function ExperienceGroup({ workExperience, setSelectedExperience }) {
  return (
    <Col>
      {workExperience.map((experience) => {
        return (
          <Button
            key={experience.id}
            className="w-100 mb-2"
            variant="outline-secondary"
            onClick={() => setSelectedExperience(experience)}
          >
            {experience.company}
          </Button>
        );
      })}
    </Col>
  );
}

export default ExperienceGroup;
