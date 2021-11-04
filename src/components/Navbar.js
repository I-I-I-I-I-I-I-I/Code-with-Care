import '../App.css';
import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <ReactBootStrap.Navbar variant="dark" bg="dark" expand="lg" className="navbarFull">
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="#home" className="d-inline-block align-top">Code with Care</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootStrap.Nav className="container-fluid">
                  <Link to="/students">
                <ReactBootStrap.Nav.Link href="#students">Students</ReactBootStrap.Nav.Link>
                </Link>

                {/* TEMPORARY LINKS */}
                <Link to="/AdminPage">
                <ReactBootStrap.Nav.Link href="#AdminPage">MAIN ADMIN DEV ACCESS</ReactBootStrap.Nav.Link>
                </Link>
                <Link to="/studentPage">
                <ReactBootStrap.Nav.Link href="#studentPage">MAIN STUDENT DEV ACCESS</ReactBootStrap.Nav.Link>
                </Link>


              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            <Link to = "/adminLogin">
            <ReactBootStrap.Button variant="danger" className="dangerButton">Admin Login</ReactBootStrap.Button>
            </Link>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
    </div>
  );
}

export default App;
