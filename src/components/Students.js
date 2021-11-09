import React from 'react';
import "../App.css";
import Card from "./card";

function Students() {
    

    return (
        <div className="App" style = {{ position : "relative" ,top : "4rem" }}>
            <h1 style={{textDecoration : "underline"}}>Wanda's Class</h1>
            <Card/>

        </div>
    )
}

export default Students;
  