import React from 'react'
import {BackButton} from "./BackButton";
import ReactPlayer from "react-player";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import Picture from "../images/1200px-Circuit_elements.svg.png";
import '../App.css';
import RouteIf from './RouteIf';

function studentPage() {

    var msg = new SpeechSynthesisUtterance();

    return (
        
        <div className="App" style = {{position : "relative" , top : "50px"}}>
            <RouteIf/>
            <div style={{display: "flex" , backgroundColor : "#ffffff"}}>
                <BackButton/>
            </div>
            <Container style={{backgroundColor : "#ffffff"}}>

                <Row>
                    <h1>Basic Electronics</h1>
                </Row>
                <Row>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=uXr4lXYjXuU&ab_channel=TheOrganicChemistryTutor"
                        controls={true}
                        width='40%'
                    />
                </Row>
                <Row style={{margin: "1.3em"}}>
                    <Col md>
                        <Card className="my-1" bg="primary" text="white">
                            <Card.Body>
                        
                                <Card.Title>Lorem ipsum dolor.</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque debitis
                                    dolore
                                    eos esse fugiat harum, impedit, in ipsum modi officiis rem rerum sapiente sed
                                    soluta!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md>
                        <Image className="my-1" src={Picture} fluid rounded/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default studentPage;