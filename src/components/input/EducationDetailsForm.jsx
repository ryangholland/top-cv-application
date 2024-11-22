import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function EducationDetailsForm() {
  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label>School</Form.Label>
        <Form.Control type="text" placeholder="Enter school/university" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Degree</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter degree (Bachelors, Masters, etc.)"
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Field of Study</Form.Label>
        <Form.Control type="text" placeholder="Enter field of study" />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label>Start Year</Form.Label>
            <Form.Control type="text" placeholder="Enter start year" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label>End Year</Form.Label>
            <Form.Control type="text" placeholder="Enter end year" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-2">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter location" />
      </Form.Group>

      <br />
      <Row>
        <Col>
          <Button variant="danger">Delete</Button>
        </Col>
        <Col className="text-end">
          <Button variant="secondary" className="mx-2">Cancel</Button>
          <Button variant="primary">Save</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default EducationDetailsForm;
