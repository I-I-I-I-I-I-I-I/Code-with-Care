import React , {useState} from 'react';
import {ListGroup , Button , Modal , Form} from 'react-bootstrap';
import { Formik } from "formik";
import { TextField } from 'material-ui'


const  addStudent = () =>
    {

<Modal>
<Modal.Header closeButton>
    <Modal.Title>Add new student</Modal.Title>
</Modal.Header>

    <Modal.Body>

    </Modal.Body>

<Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
</Modal.Footer>
</Modal>
    }

export default addStudent;