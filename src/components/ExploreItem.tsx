import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";

interface Testo {
  text: string;
}

const ExploreItem = function (props: Testo) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className=" custom-hover px-4 rounded-3 "
        onClick={toggleCollapse}
      >
        <div className="d-flex justify-content-between">
          <p className="custom-text m-0 py-3 fw-bold">{props.text}</p>
          <span className=" text-end custom-text align-content-center">
            {isOpen ? <ChevronDown /> : <ChevronRight />}
          </span>
        </div>

        <div
          className={`collapse ${isOpen ? "show" : ""}`}
          id="collapseExample"
        >
          <ListGroup>
            <ListGroup.Item className=" bg-transparent custom-text border-0 ">
              Placeholder For Link
            </ListGroup.Item>
            <ListGroup.Item className=" bg-transparent custom-text border-0 ">
              Placeholder For Link
            </ListGroup.Item>
            <ListGroup.Item className=" bg-transparent custom-text border-0">
              Placeholder For Link
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  );
};
export default ExploreItem;
