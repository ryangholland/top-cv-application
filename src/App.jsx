import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

import PersonalDetailsForm from "./components/input/PersonalDetailsForm";
import EducationGroup from "./components/input/EducationGroup";
import ExperienceGroup from "./components/input/ExperienceGroup";
import EducationDetailsForm from "./components/input/EducationDetailsForm";

import { useState } from "react";
import defaultUserData from "./utils/DataStructure";
import ResumeDisplay from "./components/display/ResumeDisplay";
import ExperienceDetailsForm from "./components/input/ExperienceDetailsForm";

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
                  {/* <EducationGroup /> */}
                  <EducationDetailsForm />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Experience</Accordion.Header>
                <Accordion.Body>
                  {/* <ExperienceGroup /> */}
                  <ExperienceDetailsForm />
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
        </Col>

      </Row>
    </Container>
  );
}

export default App;
