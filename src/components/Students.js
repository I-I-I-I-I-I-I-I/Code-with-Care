import React from 'react';
import "../App.css";
import Card from "./card";
import Images from "./Images"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Allana from './StudentComponents/Allana';
import Arnold from './StudentComponents/Arnold';

function Students() {

    function Redirect(namess) {
        console.log("jio");
    }
    

    return (
        <div className="App" style = {{ position : "relative" ,top : "4rem" }}>
            <h1 style={{textDecoration : "underline"}}>Wanda's Class</h1>
            <Card/>

            <Arnold/>

        </div>
    )
}

export default Students;
  