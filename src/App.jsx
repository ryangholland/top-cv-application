import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container className="text-center my-4">
      <Row>
        <Col xs={12} lg={4} className="bg-light">Input</Col>
        <Col xs={12} lg={8} className="bg-secondary">Result</Col>
      </Row>
    </Container>
  );
}

export default App;
