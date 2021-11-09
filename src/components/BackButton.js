import '../App.css';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import '../button.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaArrowLeft} from "react-icons/all";

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
            <Button className="aButton" variant="warning" size="lg" onClick={() => history.goBack()}>
                <FaArrowLeft style={{marginBottom : "0.2rem"}}/> Back
            </Button>
        </>
    );
};