import { Col, Row } from "react-bootstrap"

const Footer = function(){



    return(
        <footer className="container-fluid">
            <Row>
                <Col>
                <ul className="d-flex list-unstyled">
                    <li className="ps-2 pe-4 border-end border-secondary">Italia</li>
                    <li className="px-2 pe-4 text-secondary">English (UK)</li>
                </ul>
                </Col>
            </Row>
            <Col>
                <p className=" text-secondary">Copyright &copy; 2024 <span className="text-white">Apple Inc.</span> Tutti i diritti riservati</p>
            </Col>
            <Row>
                <Col>
                <ul className="d-flex list-unstyled justify-content-between flex-wrap">
                    <li><a href="" className=" text-white text-decoration-none px-3">Condizioni dei servizi internet</a></li>
                    <li><a href="" className=" text-white text-decoration-none px-3">Apple Music e privacy</a></li>
                    <li><a href="" className=" text-white text-decoration-none px-3"> Avviso sui cookie</a></li>
                    <li><a href="" className=" text-white text-decoration-none px-3">Supporto</a></li>
                    <li><a href="" className=" text-white text-decoration-none px-3">Feedback</a></li>
                </ul>
                </Col>
            </Row>
        </footer>

    )
}
export default Footer