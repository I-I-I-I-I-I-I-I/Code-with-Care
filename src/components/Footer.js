import '../App.css';
import {Container, Navbar, NavbarBrand} from "react-bootstrap";

function Footer() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <NavbarBrand className="m-auto">Made with ❤ by 2814919 and 2711337</NavbarBrand>
            </Container>
        </Navbar>
    );
}

export default Footer;