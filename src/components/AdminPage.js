import React , {Component , useState} from 'react';
import "../App.css";
import StudentContainer from './StudentContainer';
import {ListGroup , Button , Modal , Form} from 'react-bootstrap';
import StudentPage from './StudentPage';
import PostData from '../data/studentData.json';
import studentPage from './StudentPage';

    const listMaker = (listElement) => {
        return (
                <option value = {listElement.image}>{listElement.name}</option>
        )
    }


function AdminPage() {

    const [show , setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function CloseHandler() {

        handleClose();
        alert("STUDENT CHANGES SUBMITTED \n ---PROTOTYPE WARNING--- \n This feature is not fully functional yet, any students saved will not be fully incorporated into the site");

    }
    var x = "Arnold Dickinson";
    return (
        
        <div className="App" style = {{overflow : "auto"}}>
            <h1>Admin Page</h1>  

            <div id="Studentselect" style={{resize : "both" , overflow : "auto" , height : "60rem" , position : 'relative' , margin : "20px" , border : "20px" , width : "50.1rem"}}>
                <div className="studentSelect" style= {{position : "relative" , top : "3 rem" , right : "0rem" , width : "10px"}}> 
                    </div>
                    <h6>Preview Student windows</h6>
                <div className="studentPreviewBox" style={{ overflow : "scroll",position : "inherit" , border : "2px solid black" , width : "50rem" , height : "30rem" , top : "2rem"}}>
                <select id="StudentNameReturn" name="students">
                    {PostData.map(listMaker)}
                    </select>
                    <StudentPage reqs = {PostData.find(({ name }) => name === "Arnold Dickinson")}/>
                </div>

           </div>

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
                                <option value="large_font">Large font</option>
                                <option value="dyslexia">Dyslexia assist</option>
                            </select>
                            <br></br>
                            <br></br>
                            <h8>Student photo (optional) : </h8>
                            <input type="file"></input>
                            </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={CloseHandler}>Save changes</Button>
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
  