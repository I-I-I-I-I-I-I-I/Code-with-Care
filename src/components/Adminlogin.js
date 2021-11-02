import React ,{ Component, useState} from 'react';
import "../login.css";
import AdminPage from './AdminPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const move = () =>
  {
    <Router>
      <Switch>
      <Route path="/AdminPage" component={AdminPage}>
        <AdminPage/>
      </Route>
      </Switch>
  </Router>

  console.log("I'm here")
  }
//Still working on validation for this, submit takes you to the right page for now
function Adminlogin()
  {
    return(
      <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""/>
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div>
       <div onClick={move}>
          <h2>Submit</h2>
      </div>
      </form>
    </div>
    )
  }

export default Adminlogin;