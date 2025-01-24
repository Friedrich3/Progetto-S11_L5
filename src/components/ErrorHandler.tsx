import { Alert, AlertHeading } from "react-bootstrap"

const ErrorHandler = function (){

    return(
        <>
            <Alert variant="danger">
                <AlertHeading>Content Not found</AlertHeading>
                <p>Sembra che il contenuto che stavi cercando di visualizzare non sia al momento disponibile prova a ricaricare la pagina</p>
            </Alert>
        </>

    )

}
export default ErrorHandler