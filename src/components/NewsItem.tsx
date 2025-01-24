import { Card } from "react-bootstrap";

interface ItemProps{
    cover: string,
    title: string
}


const NewsItem = function (props:ItemProps) {
  return (
    <>
      <Card className="bg-dark border-0 h-100">
        <Card.Body>
          <small className="fw-bold text-secondary">NUOVA STAZIONE RADIO</small>
          <Card.Title className="text-white">{props.title}</Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={props.cover} className=" rounded-4"/>
      </Card>
    </>
  );
};


export default NewsItem;
