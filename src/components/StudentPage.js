import React from 'react'
import {BackButton} from "./BackButton";
import ReactPlayer from "react-player";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import Picture from "../images/1200px-Circuit_elements.svg.png";
import TextToSpeech from "./TextToSpeech";

var Params = null;

const TTScheck = () => {
    if(Params[0] === "true"){
    return <TextToSpeech/>
    }
}

const ColourBlindCheck = () => {
    let changing = document.getElementsByClassName("colourBlind");
    if(Params[1] === "true")

    {
        for(var x = 0 ; x < changing.length ; x++)
            {
                changing[x].style['border'] = "3px #ffc107 solid";
            }
        
    }
    else{
        for(var x = 0 ; x < changing.length ; x++)
        {
            changing[x].style['border'] = "3px #0d6efd solid";
        }
    }

}

function studentPage(reqs) {
    Params = reqs.reqs.reqs;
    console.log(Params[1]);
    return (
        <div className="App" style={{paddingTop : "3rem" }} onLoad= {() => ColourBlindCheck()}>
            <Container>
                <Row>
                    <Col xs style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <BackButton/>
                    </Col>
                    <Col xs style={{display: 'flex', justifyContent: 'flex-end'}}>

                        <TTScheck/>
                        
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h1>Basic Electronics</h1>
                </Row>
                <Row>
                    <ReactPlayer className = "colourBlind"
                        url="https://www.youtube.com/watch?v=uXr4lXYjXuU&ab_channel=TheOrganicChemistryTutor"
                        controls={true}
                        width='100%'
                    />
                </Row>
                <Row style={{margin: "1.3em"}}>
                    <Col md>
                        <Card className="colourBlind">
                            <Card.Body>
                                <Card.Title>
                                    Lorem ipsum dolor.
                                </Card.Title>
                                <Card.Text class="speak">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque debitis
                                    dolore
                                    eos esse fugiat harum, impedit, in ipsum modi officiis rem rerum sapiente sed
                                    soluta!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md>
                        <Image className="colourBlind" src={Picture} fluid rounded/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default studentPage;