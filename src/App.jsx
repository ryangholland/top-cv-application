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
import { defaultUserData, emptyUserData } from "./utils/DataStructure";
import ResumeDisplay from "./components/display/ResumeDisplay";
import ExperienceDetailsForm from "./components/input/ExperienceDetailsForm";

function App() {
  const [userData, setUserData] = useState(defaultUserData);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const updatePersonalDetails = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        [field]: value,
      },
    }));
  };

  const createNewEducation = () => {
    const newEducationObject = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      fieldOfStudy: "",
      startYear: "",
      endYear: "",
      location: "",
    };

    setUserData((prev) => ({
      ...prev,
      education: [...prev.education, newEducationObject],
    }));

    setSelectedEducation(newEducationObject);
  };

  const updateEducation = (newEducation) => {
    setUserData((prev) => ({
      ...prev,
      education: prev.education.map((educationObject) =>
        educationObject.id === newEducation.id ? newEducation : educationObject
      ),
    }));
  };

  const deleteEducation = (id) => {
    setUserData((prev) => ({
      ...prev,
      education: prev.education.filter(
        (educationObject) => educationObject.id !== id
      ),
    }));
  };

  const createNewExperience = () => {
    const newExperience = {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibilities: [
        {
          id: 1,
          text: "",
        },
        {
          id: 2,
          text: "",
        },
        {
          id: 3,
          text: "",
        },
      ],
      location: "",
    };

    setUserData((prev) => ({
      ...prev,
      workExperience: [...prev.workExperience, newExperience],
    }));

    setSelectedExperience(newExperience);
  };

  const updateExperience = (newExperience) => {
    setUserData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.map((experience) =>
        experience.id === newExperience.id ? newExperience : experience
      ),
    }));
  };

  const deleteExperience = (id) => {
    setUserData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter(
        (experience) => experience.id !== id
      ),
    }));
  };

  const loadExample = () => {
    setUserData(defaultUserData);
  };

  const clearResume = () => {
    setUserData(emptyUserData);
  };

  return (
    <Container>
      <h1 className="my-2">CV Builder</h1>
      <Row className="my-2 g-1">
        {/* Resume Input */}
        <Col xs={12} lg={4} className="bg-secondary-subtle p-4">
          <Row className="my-2">
            <Col>
              <Button
                variant="secondary"
                className="w-100"
                onClick={loadExample}
              >
                Load Example
              </Button>
            </Col>
            <Col>
              <Button variant="danger" className="w-100" onClick={clearResume}>
                Clear Resume
              </Button>
            </Col>
          </Row>
          <Row className="my-4">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="mb-3">
                <Accordion.Header>Personal Details</Accordion.Header>
                <Accordion.Body>
                  <PersonalDetailsForm
                    personalDetails={userData.personalDetails}
                    updatePersonalDetails={updatePersonalDetails}
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mb-3">
                <Accordion.Header>Education</Accordion.Header>
                <Accordion.Body>
                  {!selectedEducation && (
                    <>
                      {userData.education.length > 0 && (
                        <EducationGroup
                          education={userData.education}
                          setSelectedEducation={setSelectedEducation}
                        />
                      )}
                      <div className="d-flex justify-content-center mt-2">
                        <Button
                          variant="secondary"
                          onClick={createNewEducation}
                        >
                          &#43; Add Education
                        </Button>
                      </div>
                    </>
                  )}

                  {selectedEducation && (
                    <EducationDetailsForm
                      selectedEducation={selectedEducation}
                      updateEducation={updateEducation}
                      setSelectedEducation={setSelectedEducation}
                      deleteEducation={deleteEducation}
                    />
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Experience</Accordion.Header>
                <Accordion.Body>
                  {!selectedExperience && (
                    <>
                      {userData.workExperience.length > 0 && (
                        <ExperienceGroup
                          workExperience={userData.workExperience}
                          setSelectedExperience={setSelectedExperience}
                        />
                      )}
                      <div className="d-flex justify-content-center mt-2">
                        <Button
                          variant="secondary"
                          onClick={createNewExperience}
                        >
                          &#43; Add Experience
                        </Button>
                      </div>
                    </>
                  )}

                  {selectedExperience && (
                    <ExperienceDetailsForm
                      selectedExperience={selectedExperience}
                      updateExperience={updateExperience}
                      setSelectedExperience={setSelectedExperience}
                      deleteExperience={deleteExperience}
                    />
                  )}
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
