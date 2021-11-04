import React from 'react';
import '../App.css';
import {Card , Button} from "react-bootstrap";
import blank_profile from "../images/blank_profile.png"
import PostData from '../data/studentData.json'

const card = () => {

const creator = (card) => {
    
    if(card.image === "")
        {
            card.image = blank_profile;
        }
    
    return(
    <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src= {card.image} />
    <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>
        {card.desc}
        </Card.Text>
        <Button variant="primary" href = "/studentPage">Log-in</Button>
    </Card.Body>
    </Card>
    );
}

return <div className="cards">{PostData.map(creator)}</div>
    }

export default card;