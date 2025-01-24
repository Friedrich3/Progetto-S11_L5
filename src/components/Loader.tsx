import { Col, Spinner } from "react-bootstrap"

const Loader = function (){
    return(
        <>
            <Col xs={12} >
                <div className="d-flex justify-content-center py-4">
                <Spinner variant="info"></Spinner> Loading...

                </div>
            
            </Col>
        </>

    )


}
export default Loader