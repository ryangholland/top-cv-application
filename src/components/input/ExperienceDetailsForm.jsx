import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { useState } from "react";

function ExperienceDetailsForm({
  selectedExperience,
  updateExperience,
  setSelectedExperience,
  deleteExperience,
}) {
  const [formData, setFormData] = useState(selectedExperience);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResponsibilityChange = (e, id) => {
    const newText = e.target.value;

    setFormData((prev) => ({
      ...prev,
      responsibilities: prev.responsibilities.map((responsibility) => {
        return responsibility.id === id
          ? { ...responsibility, text: newText }
          : responsibility;
      }),
    }));
  };

  const handleUpdate = () => {
    if (formData.company === "") return;
    updateExperience(formData);
    setSelectedExperience(null);
  };

  const handleDelete = () => {
    deleteExperience(selectedExperience.id);
    setSelectedExperience(null);
  };

  const handleCancel = () => {
    if (selectedExperience.company === "")
      deleteExperience(selectedExperience.id);
    setSelectedExperience(null);
  };

  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          type="text"
          name="company"
          placeholder="Enter company name"
          value={formData.company}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Position Title</Form.Label>
        <Form.Control
          type="text"
          name="position"
          placeholder="Enter position title"
          value={formData.position}
          onChange={handleChange}
        />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="text"
              name="startDate"
              placeholder="Enter start date"
              value={formData.startDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="text"
              name="endDate"
              placeholder="Enter end date"
              value={formData.endDate}
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

      <Form.Group className="mb-2">
        <Form.Label>Responsibilities</Form.Label>

        <Form.Control
          type="text"
          placeholder="Enter responsibility"
          className="mb-1"
          value={formData.responsibilities[0].text}
          onChange={(e) => handleResponsibilityChange(e, 1)}
        />
        <Form.Control
          type="text"
          placeholder="Enter responsibility"
          className="mb-1"
          value={formData.responsibilities[1].text}
          onChange={(e) => handleResponsibilityChange(e, 2)}
        />
        <Form.Control
          type="text"
          placeholder="Enter responsibility"
          className="mb-1"
          value={formData.responsibilities[2].text}
          onChange={(e) => handleResponsibilityChange(e, 3)}
        />
      </Form.Group>

      <br />
      <Row>
        <Col xs={3}>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Col>
        <Col xs={9} className="text-end">
          <Button variant="secondary" className="mx-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={formData.company === ""}
            onClick={handleUpdate}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ExperienceDetailsForm;
