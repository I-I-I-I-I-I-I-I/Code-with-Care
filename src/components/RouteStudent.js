import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import * as StudentComponents from "./StudentComponents"

function RouteStudent({names}) {
    console.log("hi")
  return(

      <div>
{/* <Router>
    <Switch>
    
    <Route path = {"/" + names} component=""/>


    <Route exact path="/">
        <Redirect to = "/Arnold"/>
    </Route>
    <Route path="/students">
        
    </Route>
    <Route path="/Adminlogin">
        
    </Route>
    <Route path="/AdminPage">
        
    </Route>
    <Route path="/studentPage">
        
    </Route>
    <Route path="/AdminHandler">
        
    </Route>
</Switch>
</Router> */}
</div>
  );

}
export default RouteStudent;