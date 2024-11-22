import Form from "react-bootstrap/Form";

function PersonalDetailsForm({ personalDetails, updatePersonalDetails }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalDetails(name, value);
  };

  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter full name"
          value={personalDetails.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email address"
          value={personalDetails.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Enter phone number"
          value={personalDetails.phone}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Enter address"
          value={personalDetails.address}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}

export default PersonalDetailsForm;
