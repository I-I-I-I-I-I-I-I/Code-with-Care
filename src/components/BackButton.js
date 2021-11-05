import '../App.css';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import '../button.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
            <Button className="backButton" variant="warning" size="lg" onClick={() => history.goBack()}>Back</Button>
        </>
    );
};