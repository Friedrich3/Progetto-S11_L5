import { Card } from "react-bootstrap";
import { SearchResponse } from "../types/SearchFetch";

interface Song{
    song: SearchResponse
}
const NewReleasesItem = function(props: Song){


    return(
        <>
         <Card className="bg-transparent border-0 h-100">
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