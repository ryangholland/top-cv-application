import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

import PersonalDetailsForm from "./components/input/PersonalDetailsForm";
import EducationGroup from "./components/input/EducationGroup";
import ExperienceGroup from "./components/input/ExperienceGroup";

import { useState } from "react";
import defaultUserData from "./utils/DataStructure";
import ResumeDisplay from "./components/display/ResumeDisplay";

function App() {
  const [userData, setUserData] = useState(defaultUserData);

  const updatePersonalDetails = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        [field]: value,
      },
    }));
  };

  return (
    <Container>
      <h1 className="my-2">CV Builder</h1>
      <Row className="my-2 g-1">
        {/* Resume Input */}
        <Col xs={12} lg={4} className="bg-secondary-subtle p-4">
          <Row className="my-2">
            <Col>
              <Button variant="secondary" className="w-100">
                Load Example
              </Button>
            </Col>
            <Col>
              <Button variant="danger" className="w-100">
                Clear Resume
              </Button>
            </Col>
          </Row>
          <Row className="my-4">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="mb-3">
                <Accordion.Header>Personal Details</Accordion.Header>
                <Accordion.Body>
                  <PersonalDetailsForm />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mb-3">
                <Accordion.Header>Education</Accordion.Header>
                <Accordion.Body>
                  <EducationGroup />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Experience</Accordion.Header>
                <Accordion.Body>
                  <ExperienceGroup />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Col>

        {/* Spacer Column */}
        <Col lg={1}></Col>

        {/* Resume Display */}
        <Col xs={12} lg={7} className="border border-secondary ">
          <ResumeDisplay userData={userData} />
          {/* <div className="p-4 bg-dark text-light">
            <h1 className="text-center mb-3 fw-bold">
              {userData.personalDetails.name}
            </h1>
            <h6 className="text-center">
              {userData.personalDetails.email} |{" "}
              {userData.personalDetails.phone} |{" "}
              {userData.personalDetails.address}
            </h6>
          </div>
          <div className="mt-2 pt-4 px-4 text-center d-flex justify-content-center align-items-center">
            <h5 className="text-center p-2 bg-dark-subtle w-75 fw-bold">
              Education
            </h5>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <Row>
              <Col>yo</Col>
              <Col>yo</Col>
            </Row>
          </div>
          <div className="mt-2 pt-4 px-4 text-center d-flex justify-content-center align-items-center">
            <h5 className="text-center p-2 bg-dark-subtle w-75 fw-bold">
              Professional Experience
            </h5>
          </div>
          <Row>
            <Col>yo</Col>
            <Col>yo</Col>
          </Row> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
