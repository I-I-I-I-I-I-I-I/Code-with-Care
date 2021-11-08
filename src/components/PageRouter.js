import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from "./AdminPage";
import StudentPage from "./StudentPage";
import Adminlogin from "./Adminlogin";

export default function PageRouter(props) {
  return (

    <Router>
      <Switch>
        <Route path="/AdminPage" component={AdminPage}><AdminPage/></Route>
      </Switch>
    </Router>
  );
}