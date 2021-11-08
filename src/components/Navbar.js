import '../App.css';
import {Nav , Navbar , Container , Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from '../images/default.png'

function App() {
    return (
        <div className="Nav">
            <Navbar variant="dark" bg="dark" expand="lg" className="navbarFull">
                <Container>
                    <Navbar.Brand href="/students" className="logo-right"><img style = {{height : "300px"}}src = {logo}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="container-fluid">
                            <Link to="/students">
                                <Nav.Link href="#students">Students</Nav.Link>
                            </Link>

                            {/* TEMPORARY LINKS */}
                            <Link to="/AdminPage">
                                <Nav.Link href="#AdminPage">MAIN ADMIN DEV
                                    ACCESS</Nav.Link>
                            </Link>
                            <Link to="/studentPage">
                                <Nav.Link href="#studentPage">MAIN STUDENT DEV
                                    ACCESS</Nav.Link>
                            </Link>
                            <Link to="/AdminHandler">
                                <Nav.Link href="#AdminHandler">Admin handler</Nav.Link>
                            </Link>


                        </Nav>
                    </Navbar.Collapse>
                    <Link to="/adminLogin">
                        <Button variant="danger" className="dangerButton">Admin
                            Login</Button>
                    </Link>
                </Container>
            </Navbar>
        </div>
    );
}

export default App;
