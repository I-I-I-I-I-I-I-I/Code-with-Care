import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from "./AdminPage";


export default function PageRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path="/AdminPage" component={AdminPage}><AdminPage/></Route>
      </Switch>
    </Router>
  );
}