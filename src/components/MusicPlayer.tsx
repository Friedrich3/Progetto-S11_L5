import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  FastForwardFill,
  PauseFill,
  PlayFill,
  RewindFill,
} from "react-bootstrap-icons";
import { SearchResponse } from "../types/SearchFetch";

interface EachSong {
  song: SearchResponse | null;
}

const MusicPlayer = function (props: EachSong) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    currentAudio?.pause();
    setIsPlaying(false);
    const audio = new Audio(props.song?.preview);
    setCurrentAudio(audio);
    return () => {
      audio.pause();
      setCurrentAudio(null);
    };

    //audio.src = props.song?.preview
    //audio.src = props.song!.preview
  }, [props.song]);

  const playMusic = function () {
    // audio.src = 'newsong.mp3' SERVE PER CAMBIARE CANZONE
    if (isPlaying) {
      currentAudio?.pause();
    } else {
      currentAudio?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Container fluid className="custom-position">
        <Row className="d-none d-lg-flex py-2 row-cols-3">
          <Col className="d-flex justify-content-start align-items-center ">
            <div className="d-flex">
              <img
                src={props.song?.album.cover_small}
                alt="Cover Canzone"
                height="50px"
              />
              <div className="ps-2">
                <p className="m-0">{props.song?.title_short}</p>
                <p className="m-0">{props.song?.artist.name}</p>
              </div>
            </div>
            <div>
              <RewindFill className=" fs-4" />
              {isPlaying ? (
                <PauseFill onClick={playMusic} className=" fs-1 me-3 ms-3" />
              ) : (
                <PlayFill onClick={playMusic} className=" fs-1 me-3 ms-3" />
              )}
              <FastForwardFill className=" fs-4" />
            </div>
          </Col>

          <Col className="justify-content-center bg-secondary d-flex align-content-center py-1 col-3">
            <img src="../public/assets/logos/apple.svg" alt="Logo Apple" />
          </Col>
          <Col className="d-flex justify-content-end pe-4 col-3 ">
            <Button type="button" variant="outline-secondary">
              Accedi
            </Button>
          </Col>
        </Row>

        <Row className="d-flex d-lg-none py-2">
          <Col className="d-flex justify-content-between align-items-center ">
            <div className="d-flex">
              <img src={props.song?.album.cover_small} alt="" />
              <div className="ps-2">
                <p className="m-0">{props.song?.title_short}</p>
                <p className="m-0">{props.song?.artist.name}</p>
              </div>
            </div>
            <div>
              <RewindFill className=" fs-4" />
              {isPlaying ? (
                <PauseFill onClick={playMusic} className=" fs-1 me-3 ms-3" />
              ) : (
                <PlayFill onClick={playMusic} className=" fs-1 me-3 ms-3" />
              )}
              <FastForwardFill className=" fs-4" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MusicPlayer;
