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
                <SocialIcon fgColor="white" url ="https://twitter.com/"/>
                <SocialIcon fgColor="white" url ="https://facebook.com/"/>
                <SocialIcon fgColor="white" url ="https://pinterest.com/"/>
                </div>
        </Navbar>
    );
}

export default Footer;