import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function ExperienceDetailsForm() {
  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Enter company name" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Position Title</Form.Label>
        <Form.Control type="text" placeholder="Enter position title" />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" placeholder="Enter start date" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" placeholder="Enter end date" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-2">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter location" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Responsibilities</Form.Label>
        {/* Display 2 responsibilities at first. 
        When second is filled in, display third, etc. */}
        <Form.Control
          type="text"
          placeholder="Enter responsibility"
          className="mb-1"
        />
        <Form.Control
          type="text"
          placeholder="Enter responsibility"
          className="mb-1"
        />
        <Form.Control
          type="text"
          placeholder="Enter responsibility"
          className="mb-1"
        />
      </Form.Group>

      <br />
      <Row>
        <Col>
          <Button variant="danger">Delete</Button>
        </Col>
        <Col className="text-end">
          <Button variant="secondary" className="mx-2">
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ExperienceDetailsForm;
