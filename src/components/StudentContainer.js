import React from 'react';
import '../App.css';
import {ListGroup} from 'react-bootstrap'
import PostData from '../data/studentData.json'

const StudentContainer = () => {

    const listMaker = (listElement) => {

        return (
                <ListGroup.Item>{listElement.name}</ListGroup.Item>
        )

    }

    return <div className="StudentList">{PostData.map(listMaker)}</div>

}

export default StudentContainer;
