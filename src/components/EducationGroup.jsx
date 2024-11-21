import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function EducationGroup() {
  return (
    <Col>
      <Button className="w-100 mb-2" variant="outline-secondary">
        Education 1
      </Button>
      <Button className="w-100 mb-2" variant="outline-secondary">
        Education 2
      </Button>
      <div className="d-flex justify-content-center mt-2">
        <Button variant="secondary">&#43; Add Education</Button>
      </div>
    </Col>
  );
}

export default EducationGroup;