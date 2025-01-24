import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  FastForwardFill,
  PauseCircleFill,
  PauseFill,
  PlayCircleFill,
  PlayFill,
  RewindFill,
} from "react-bootstrap-icons";
import { SearchResponse } from "../types/SearchFetch";



interface EachSong{
    song: SearchResponse | null
}


const MusicPlayer = function (props :EachSong ) {
  const [isPlaying, setIsPlaying] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [audio, setAudio] = useState(new Audio(''))


  useEffect(()=>{
    audio.src = props.song!.preview
  },[props.song])

  const playMusic = function () {
   // audio.src = 'newsong.mp3' SERVE PER CAMBIARE CANZONE
    if(isPlaying){
        audio.pause()
    }else{
        audio.play()
    }
    setIsPlaying(!isPlaying);
    
  };

  return (
    <>
      <Container fluid className="custom-position">
        <Row className="d-none d-lg-flex py-2">
          <Col className="d-flex justify-content-evenly align-items-center">
            <RewindFill className=" fs-3" />
            {isPlaying ? (
              <PauseCircleFill onClick={playMusic} className=" fs-3" />
            ) : (
              <PlayCircleFill onClick={playMusic} className=" fs-3" />
            )}
            <FastForwardFill className=" fs-3" />
          </Col>

          <Col className="justify-content-center bg-secondary d-flex align-content-center py-1">
            {/* {currentSong.length === 0 ? ( */}
              <img src="../public/assets/logos/apple.svg" alt="Logo Apple" />
            {/*  ) : (
              <div className="d-flex ">
                 <img src="" alt="" />
                <p>Titolo Canzone</p>
               </div>
             )} */}
          </Col>
          <Col className=" text-end">
            <Button type="button" variant="outline-secondary">
              Accedi
            </Button>
          </Col>
        </Row>

        <Row className="d-flex d-lg-none py-2">
        <Col className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <img src="https://placecats.com/50/50" alt="" />
                <div className="ps-2">

                <p className="m-0">Titolo</p>
                <p className="m-0">Artista</p>
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
