import React from 'react'
import {BackButton} from "./BackButton";
import ReactPlayer from "react-player";
import {Card, Col, Container, Image, Row , Button} from "react-bootstrap";
import Picture from "../images/1200px-Circuit_elements.svg.png";
import TextToSpeech from "./TextToSpeech";

var Params = null;

const TTScheck = () => {
    if(Params[0] === "true"){
    return <TextToSpeech/>
    }
    return null;
}


//This checks the array to see if the child is suffering from colourblindness
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
    
    return (
        <div className="App" style={{paddingTop : "3rem" }} onLoad= {() => ColourBlindCheck()}>
            <h1>{reqs.reqs.name}'s learning portal!</h1>
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
                                    Circuitry 101
                                </Card.Title>
                                <Card.Text class="speak">
                                Electric circuits are paths for transmitting electric current, or moving electricity. Such circuits allow electricity to be used to provide power to lights, appliances, and many other devices. Scientists have studied electricity for hundreds of years. But it was not until the early 1800s that they learned how to create a continuous flow of electricity and then to channel that electricity through the use of a circuit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md>
                        <Image className="colourBlind" src={Picture} fluid rounded/>
                    </Col>
                    <Col>
            <h3>Contact Ms. Thomas!</h3>
            <select>
                <option value = "" disabled selected>--Click me!--</option>
                <option>This lesson is too hard</option>
                <option>I want another lesson!</option>
            </select>
            <Button type="submit" onClick = { () => alert("Sent!")}>Send!</Button>
            </Col>
                </Row>
            </Container>


        </div>
    );
}

export default studentPage;