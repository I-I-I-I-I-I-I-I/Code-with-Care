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
                <Link to = "/Adminlogin">
                <ReactBootStrap.Nav.Link href="#adminLogin" className="ms-auto">Admin Login</ReactBootStrap.Nav.Link>
                </Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
    </div>
  );
}

export default App;
