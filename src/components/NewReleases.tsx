import { Col, Container, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewReleasesItem from "./NewReleasesItem";
import { useEffect, useState } from "react";

import { SearchResponse } from "../types/SearchFetch";

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
const url1 =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=linkin%20park";
const url2 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=LISA";

const NewReleases = function () {
  const [searchUrl1, setSearchUrl1] = useState<null | SearchResponse[]>(null);
  const [searchUrl2, setSearchUrl2] = useState<null | SearchResponse[]>(null);

  useEffect(() => {
    fetchUrl1();
    fetchUrl2();
  }, []);

  const fetchUrl1 = async function () {
    try {
      const response = await fetch(url1);
      if (response.ok) {
        const data = await response.json();
        setSearchUrl1(data.data);
      } else {
        throw new Error("Errore FetchUrl1");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
  const fetchUrl2 = async function () {
    try {
      const response = await fetch(url2);
      if (response.ok) {
        const data = await response.json();
        setSearchUrl2(data.data);
      } else {
        throw new Error("Errore FetchUrl2");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <h3>
            Nuove Uscite <ChevronRight />
          </h3>
          <hr />
          {searchUrl1 && (
            <Col xs={12}>
              <Carousel responsive={responsive}>
                {searchUrl1.map((element, index) => {
                  if (index < 10) {
                    return (
                      <div className="px-3" key={element.id}>
                        <NewReleasesItem song={element} />
                      </div>
                    );
                  }
                  return;
                }).filter(item=> item !== undefined)}
              </Carousel>
            </Col>
          )}

          {searchUrl2 && (
            <Col xs={12}>
              <Carousel responsive={responsive}>
                {searchUrl2.map((element, index) => {
                  if (index < 10) {
                    return (
                      <div className="px-3" key={element.id}>
                        <NewReleasesItem song={element} />
                      </div>
                    );
                  }
                  return;
                }).filter(item=> item !== undefined)}
              </Carousel>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};
export default NewReleases;
