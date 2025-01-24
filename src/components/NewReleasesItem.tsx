import { Card } from "react-bootstrap";
import { SearchResponse } from "../types/SearchFetch";

interface Song{
    song: SearchResponse
    setCurrentSong: (song: SearchResponse|null) => void;
}
const NewReleasesItem = function(props: Song){

  const changeSong = function(){
     props.setCurrentSong(props.song)

  }

    return(
        <>
         <Card className="bg-transparent border-0 h-100" onClick={changeSong}>
        <Card.Img variant="top" src={props.song.album.cover_medium} className=" rounded-4"/>
        <Card.Body>
          <Card.Title className="text-white">{props.song.title_short}</Card.Title>
          <Card.Text className="text-white">{props.song.artist.name}</Card.Text>
        </Card.Body>
      </Card>
        </>
    )

}

export default NewReleasesItem