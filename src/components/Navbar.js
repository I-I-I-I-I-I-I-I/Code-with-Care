import '../App.css';
import {Nav , Navbar , Container , Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from '../images/default.png'
import {BsPersonCircle , HiLockClosed} from "react-icons/all";

function App() {
    return (
        <div className="Nav">
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Link to = "/students">
                    <Navbar.Brand><img style={{height : "2.5rem"}} src = {logo}/></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/students">
                                <Button href="#students"><BsPersonCircle style={{marginBottom : "0.2rem"}}/> Students</Button>
                            </Link>
                        </Nav>
                        <Nav className="me-lg-1 ms-md-auto">
                            <Link to="/adminLogin">
                                <Button variant="danger" className="dangerButton"><HiLockClosed style={{marginBottom : "0.2rem"}}/> Admin
                                    Login</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default App;
