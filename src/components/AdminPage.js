import React , {Component , useState} from 'react';
import "../App.css";
import StudentContainer from './StudentContainer';
import {ListGroup , Button , Modal , Form} from 'react-bootstrap';

function AdminPage() {

    const [show , setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

   const addButtonHandle = () => {
       return null;
    }

///////////////////////////////////////////////////////

 const onChangeHandler = event => {

        this.setState({
            selectedFile : event.target.files[0],
            loaded : 0,
        })
        }

//WHEN SUBMIT BUTTON IS CLICKED

  const onClickHandler = () => {
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
    }
///////////////////////////////////////////////////////

    return (
        
        <div className="App">
            <h1>Admin Page</h1>  
                    <Modal show = {show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add new student</Modal.Title>
                        </Modal.Header>

                            <Modal.Body>
                            <h8>Student Name : </h8><input placeholder = "Student Name"></input>
                            <br></br>
                            <br></br>
                            <h8>Student requirements : </h8>
                            <select name = "Student needs">
                                <option value="colourblind">Colourblind</option>
                                <option value="TTS">Requires Text-to-Speech</option>
                                <option value="colourblind">Colourblind</option>
                            </select>
                            </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleClose}>Save changes</Button>
                        </Modal.Footer>
                    </Modal>
            <ListGroup className="Lists">
            <h4>Students in your class!</h4>
                <StudentContainer>
                </StudentContainer>
                <ListGroup.Item>
                    <div>
                    <Button onClick = {handleShow} style={{paddingBottom : '0px' , marginBottom : '0px' , borderBottom : '0px'}}>
                        <p style={{marginBottom : '7px'}}>Add new Student</p>
                    </Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>

        </div>
    );

}

export default AdminPage;
  