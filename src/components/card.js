import React from 'react';
import '../App.css';
import {Card , Button} from "react-bootstrap";
import blank_profile from "../images/blank_profile.png"

const card = () => {

const studentList = [
    {name : "Patrick" , desc : "LOREM SOMETHING YAYAYA" , image : ""},
    {name : "Betty" , desc : "Tester 4335 quazimodo" , image : ""},
    {name : "Carson" , desc : "Jingo Jango limbo lambo" , image : ""},
    {name : "Ringo" , desc : "Zing zing azepp" , image : ""},
    {name : "Bingo" , desc : "Not to be confused with Ringo" , image : ""},
    {name : "Headphones" , desc : "Keeps my ears happy" , image : ""},
    {name : "Jessie" , desc : "my dog" , image : ""},
    {name : "Ringo" , desc : "another ringo, just a coincidence" , image : ""},
  ]

const creator = (card) => {
    
    if(card.image == "")
        {
            card.image = blank_profile
        }
    
    return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {card.image} />
    <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>
        {card.desc}
        </Card.Text>
        <Button variant="primary">Click me!</Button>
    </Card.Body>
    </Card>
    );
}

return <div className="cards">{studentList.map(creator)}</div>
    }

export default card;