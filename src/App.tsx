import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import NewsSection from "./components/NewsSection";
import MusicPlayer from "./components/MusicPlayer";
import RadioEpisode from "./components/RadioEpisode";
import NewReleases from "./components/NewReleases";

function App() {
  return (
    <Container fluid  className="bg-dark">
      <Row >
        <Col className=" p-0" xs={12} lg={2}>
          <Header />
        </Col>
        <Col className="p-0" xs={12} lg={10}>
              <main className=" container-fluid">
                    <MusicPlayer />
                    <NewsSection />
                    <RadioEpisode />
                    <NewReleases />
              </main>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
