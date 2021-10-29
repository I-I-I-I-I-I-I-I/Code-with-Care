import React from 'react';
import "../App.css";
import * as ReactBootStrap from 'react-bootstrap';

function App() {
    return (
      <div className="App">
          
                    <ReactBootStrap.Form className="former">
            <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicEmail">
            <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control type="email" placeholder="Enter email" />
            <ReactBootStrap.Form.Text className="text-muted">
                Use your faculty email address
            </ReactBootStrap.Form.Text>
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicPassword">
            <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control type="password" placeholder="Password" />
            </ReactBootStrap.Form.Group>
            <ReactBootStrap.Button variant="primary" type="submit">
            Log-in
            </ReactBootStrap.Button>
            </ReactBootStrap.Form>

      </div>
    );
  }
  
  export default App;
  