import React from 'react'
import {BackButton} from "./BackButton";
import ReactPlayer from "react-player";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import Picture from "../images/1200px-Circuit_elements.svg.png";

function studentPage() {
    return (
        <div className="App">
            <div style={{display: "flex"}}>
                <BackButton/>
            </div>
            <Container>
                <Row>
                    <h1>Basic Electronics</h1>
                </Row>
                <Row>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=uXr4lXYjXuU&ab_channel=TheOrganicChemistryTutor"
                        controls={true}
                        width='100%'
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
                                    Aut
                                    dolorem dolorum earum expedita harum, laborum minima modi odio qui ullam? Ea ipsum
                                    porro
                                    vel.
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