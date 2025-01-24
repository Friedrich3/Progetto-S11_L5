import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";

function App() {


  return (
    <Container fluid  className="custom-background">
      <Row >
        <Col className=" p-0" xs={12} lg={2}>
          <Header />
        </Col>
        <Col className="p-0" xs={12} lg={10}>
              <MainComponent />
              <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
