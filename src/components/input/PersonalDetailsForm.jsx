import Form from "react-bootstrap/Form";

function PersonalDetailsForm() {
  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email address" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="Enter phone number" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" />
      </Form.Group>
    </Form>
  );
}

export default PersonalDetailsForm;
