import React from 'react';
import '../App.css';
import {Button, Card} from "react-bootstrap";
import PostData from '../data/studentData.json'
import {Link} from "react-router-dom";
import Images from './Images'
import RouteStudent from './RouteStudent';

function Redirect(namess) {
    <RouteStudent names = {namess} />
}

const card = () => {

    const creator = (card) => {

        return (

            <Card style={{width: '18rem' , margincolor : '#0d6efd' , border : "5px solid" , marginBottom : "3rem"}} border="warning">
                <Link to={card.image} style={{color: 'inherit', textDecoration: 'inherit'}} onClick={Redirect(card.image)}>
                    <Images names = {card.image}/>
                    <Card.Body>
                        <Card.Title>{card.name}</Card.Title>
                        <Card.Text>
                            {card.desc}
                        </Card.Text>
                        <Button variant="warning" href={"/ + {card.image}"}>Log-in</Button>
                    </Card.Body>
                </Link>
            </Card>
        );
    }

    return <div className="cards">{PostData.map(creator)}</div>
}

export default card;