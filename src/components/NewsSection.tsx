import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsItem from "./NewsItem";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    slidesToSlide: 0.5, // optional, default to 1.
  },
};

const NewsSection = function () {
  return (
    <>
      <Container fluid className="mt-5 pt-4">
        <Row>
          <h2>Novità</h2>
          <hr />
          <Col>
            <Carousel responsive={responsive}>
              <div className="px-2 h-100">
                <NewsItem cover='../public/assets/images/1a.png' title="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"/>
              </div>
              <div className="px-2 h-100">
                <NewsItem cover="../public/assets/images/1b.png" title="Ecco la nuova casa della musica latina"/>
              </div>
              <div className="px-2 h-100">
                <NewsItem cover="../public/assets/images/1c.png" title="Ascolta tutta la musica dei piu' famosi club"/>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewsSection;
