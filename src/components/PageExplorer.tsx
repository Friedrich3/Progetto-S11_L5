import { Col, Container, Row } from "react-bootstrap";
import ExploreItem from "./ExploreItem";

const PageExplorer = function () {
  return (
    <Container fluid>
      <h3>Altro da Esplorare</h3>
      <Row >
        <Col xs={12} lg={4} className="py-2" >
          <ExploreItem text='Esplora per genere'/>
        </Col>
        <Col xs={12} lg={4} className="py-2">
          <ExploreItem text='Decenni'/>
        </Col>
        <Col xs={12} lg={4} className="py-2">
          <ExploreItem text="Attività e stati d'animo"/>
        </Col>

        <Col xs={12} lg={4} className="py-2">
          <ExploreItem text='WorldWide'/>
        </Col>
        <Col xs={12} lg={4} className="py-2">
          <ExploreItem text='Classifiche'/>
        </Col>
        <Col xs={12} lg={4} className="py-2">
          <ExploreItem text='Audio spaziale'/>
        </Col>

        <Col xs={12} lg={4} className="py-2">
          <ExploreItem text='Video Musicali'/>
        </Col>
        <Col xs={12} lg={4} className="py-2">
          <ExploreItem text='Nuovi Artisti'/>
        </Col>
        <Col xs={12} lg={4} className="py-2">
          <ExploreItem text='Hit del Passato'/>
        </Col>
      </Row>
    </Container>
  );
};
export default PageExplorer;
