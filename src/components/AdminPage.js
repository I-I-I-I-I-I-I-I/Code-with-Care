import React , {Component} from 'react';
import "../App.css";
import StudentContainer from './StudentContainer';
import {ListGroup , Button , Modal , Form} from 'react-bootstrap';


export default class AdminPage extends Component {

    onSubmit = () => {
        console.log(this.state.studentName);
        JSON.stringify(this.state);
    };

///////////////////////////////////////////////////////

constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        studentName : ""
      }
   
  }

     onChangeHandler = event => {

        this.setState({
            selectedFile : event.target.files[0],
            loaded : 0,
        })
        }

//WHEN SUBMIT BUTTON IS CLICKED

    onClickHandler = () => {
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
    }
///////////////////////////////////////////////////////
    render() {
    return (
        
        <div className="App">
            <h1>Admin Page</h1>   
            <ListGroup className="Lists">
            <h4>Students in your class!</h4>
                <StudentContainer>
                </StudentContainer>
                <ListGroup.Item>
                    <div>
                    <Button style={{paddingBottom : '0px' , marginBottom : '0px' , borderBottom : '0px'}}>
                        <p style={{marginBottom : '7px'}}>Add new Student</p>
                    </Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>

            <input type="file" name="file" onChange={this.onChangeHandler}/>
            <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 

        {/* <Form.Group className="m-0">
            <Form.Control
                className = "studentName"
                as = "textarea"
                rows="3"
                placeholder="student name"
                value = {this.state.studentName}
                onChange = {e => this.setState({ studentName : e.target.value})}
                type="text"
                />
            <Button
                className = "btnSender"
                variant = "outline-success"
                onClick = {this.onSubmit}
                >
                Add Student
            </Button>
        </Form.Group> */}

        </div>
    );
    }
}
  