import '../App.css';
import {Container, Navbar, NavbarBrand} from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <NavbarBrand className="m-auto">Made with ❤ by 2814919 and 2711337</NavbarBrand>
            </Container>
            <div>
                <SocialIcon url ="https://twitter.com/"/>
                <SocialIcon url ="https://facebook.com/"/>
                <SocialIcon url ="https://pinterest.com/"/>
                </div>
        </Navbar>
    );
}

export default Footer;