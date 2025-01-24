import { Card } from "react-bootstrap";

interface ItemProps{
    cover: string,
    title: string
}


const RadioItem = function (props:ItemProps) {
  return (
    <>
      <Card className="bg-dark border-0 h-100">
        <Card.Img variant="top" src={props.cover} className=" rounded-4"/>
        <Card.Body>
          <Card.Title className="text-white">{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};


export default RadioItem;