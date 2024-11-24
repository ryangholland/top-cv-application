import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { useState } from "react";

function EducationDetailsForm({ selectedEducation, updateEducation }) {
  const [formData, setFormData] = useState(selectedEducation);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label>School</Form.Label>
        <Form.Control
          type="text"
          name="school"
          placeholder="Enter school/university"
          value={formData.school}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Degree</Form.Label>
        <Form.Control
          type="text"
          name="degree"
          placeholder="Enter degree (Bachelors, Masters, etc.)"
          value={formData.degree}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Field of Study</Form.Label>
        <Form.Control
          type="text"
          name="fieldOfStudy"
          placeholder="Enter field of study"
          value={formData.fieldOfStudy}
          onChange={handleChange}
        />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label>Start Year</Form.Label>
            <Form.Control
              type="text"
              name="startYear"
              placeholder="Enter start year"
              value={formData.startYear}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label>End Year</Form.Label>
            <Form.Control
              type="text"
              name="endYear"
              placeholder="Enter end year"
              value={formData.endYear}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-2">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          placeholder="Enter location"
          value={formData.location}
          onChange={handleChange}
        />
      </Form.Group>

      <br />
      <Row>
        <Col xs={3}>
          <Button variant="danger">Delete</Button>
        </Col>
        <Col xs={9} className="text-end">
          <Button variant="secondary" className="mx-1">
            Cancel
          </Button>
          <Button variant="primary" onClick={() => updateEducation(formData)}>
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default EducationDetailsForm;
