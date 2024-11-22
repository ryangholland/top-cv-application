import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function ExperienceGroup() {
  return (
    <Col>
      <Button className="w-100 mb-2" variant="outline-secondary">
        Experience 1
      </Button>
      <Button className="w-100 mb-2" variant="outline-secondary">
        Experience 2
      </Button>
    </Col>
  );
}

export default ExperienceGroup;
