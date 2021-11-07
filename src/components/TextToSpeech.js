import {Button} from "react-bootstrap";
import {FaVolumeUp} from "react-icons/all";
import React from "react";

const speak = (message) => {
    const speech = new SpeechSynthesisUtterance(message);
    [speech.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(speech);
};

const speakAllElements = () => {
    let elements = document.getElementsByClassName("speak");
    let fullText = '';
    for (let i = 0; i < elements.length; i++) {
        fullText += elements[i].innerText + '\n';
    }
    speak(fullText);
};

/**
 * For this component to work, you need to give other components the class 'speak'.
 * This will collect all of the text in the document with the class 'speak' and put it into one large string.
 * The string will be passed into the speak lambda function and audio will begin to play on the button press.
 * @returns {JSX.Element}
 */
function TextToSpeech() {
    return (
        <Button className="aButton" variant="warning" size="lg" onClick={() => speakAllElements()}
                aria-label="Click this button to speak the text.">
            <FaVolumeUp/> Speak text!
        </Button>
    );
}

export default TextToSpeech;