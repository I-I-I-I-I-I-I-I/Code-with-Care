import React from 'react';
import '../App.css';
import {Card , Button} from "react-bootstrap";

const card = () => {

const studentList = [
    {name : "Patrick" , desc : "LOREM SOMETHING YAYAYA" , image : "./logo512.png"},
    {name : "Betty" , desc : "Tester 4335 quazimodo" , image : "./logo512.png"},
    {name : "Carson" , desc : "Jingo Jango limbo lambo" , image : "./logo512.png"},
    {name : "Ringo" , desc : "Zing zing azepp" , image : "./logo512.png"},
    {name : "Bingo" , desc : "Not to be confused with Ringo" , image : "./logo512.png"},
    {name : "Headphones" , desc : "Keeps my ears happy" , image : "./logo512.png"},
    {name : "Jessie" , desc : "my dog" , image : "./logo512.png"},
    {name : "Ringo" , desc : "another ringo, just a coincidence" , image : "./logo512.png"},
  ]

const creator = (card) => {
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