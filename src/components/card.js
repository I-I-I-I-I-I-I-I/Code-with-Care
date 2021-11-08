import React from 'react';
import '../App.css';
import {Button, Card} from "react-bootstrap";
import blank_profile from "../images/blank_profile.png"
import PostData from '../data/studentData.json'
import {Link} from "react-router-dom";
import Images from './Images'

function imageHandler(card) {

    if (card.image === "") {
        card.image = blank_profile;
        return card;
    }
    else {

        card.image = <Images names = {card.image}/>

    }

}

const card = () => {

    const creator = (card) => {

        return (

            <Card style={{width: '18rem'}}>
                <Link to="/studentPage" style={{color: 'inherit', textDecoration: 'inherit'}}>
                    <Images names = {card.image}/>
                    <Card.Body>
                        <Card.Title>{card.name}</Card.Title>
                        <Card.Text>
                            {card.desc}
                        </Card.Text>
                        <Button variant="primary" href="/studentPage">Log-in</Button>
                    </Card.Body>
                </Link>
            </Card>
        );
    }

    return <div className="cards">{PostData.map(creator)}</div>
}

export default card;