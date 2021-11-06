import React from 'react'
import {BackButton} from "./BackButton";
import ReactPlayer from "react-player";
import {FaVolumeUp} from "react-icons/all";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import Picture from "../images/1200px-Circuit_elements.svg.png";

const speak = (message) => {
    const speech = new SpeechSynthesisUtterance(message);
    [speech.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(speech);
};

const speakAllElements = () => {
    let elements = document.getElementsByClassName("text");
    let fullText = '';
    for (let i = 0; i < elements.length; i++) {
        fullText += elements[i].innerText + '\n';
    }
    speak(fullText);
};

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
                                <Card.Title>
                                    Lorem ipsum dolor.
                                </Card.Title>
                                <Card.Text class="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque debitis
                                    dolore
                                    eos esse fugiat harum, impedit, in ipsum modi officiis rem rerum sapiente sed
                                    soluta!
                                </Card.Text>
                                <Card.Footer>
                                    <Button variant="warning" onClick={() => speakAllElements()}
                                            aria-label="Click this button to speak the text.">
                                        <FaVolumeUp/> Speak text!
                                    </Button>
                                </Card.Footer>
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