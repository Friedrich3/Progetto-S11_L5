import { Col, Container, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RadioItem from "./radioItem";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const RadioEpisode = function () {
  return (
    <>
      <Container fluid>
        <Row>
          <h3>
            Nuovi episodi radio <ChevronRight />
          </h3>
          <hr />
          <Col>
            <Carousel responsive={responsive}>
              <div className="px-3"><RadioItem cover="../public/assets/images/2a.png" title="Prologo con Abuelo" /></div>
              <div className="px-3"><RadioItem cover="../public/assets/images/2b.png" title="The Wanderer" /></div>
              <div className="px-3"><RadioItem cover="../public/assets/images/2c.png" title="Michael Bublè & Carly Pearce" /></div>
              <div className="px-3"><RadioItem cover="../public/assets/images/2d.png" title="Stephan Moccio: The Zane Lowe Interview" /></div>
              <div className="px-3"><RadioItem cover="../public/assets/images/2e.png" title="Chart Spotlight: Julia Michaels" /></div>
              <div className="px-3"><RadioItem cover="../public/assets/images/2f.png" title="Karri & Travis Mill" /></div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default RadioEpisode;
