import React, {useContext , Component , createContext} from 'react';
import "../login.css";
//Still working on validation for this, submit takes you to the right page for now

function handleChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }

function AdminLogin() {

return (
    
    <div class="login-box">
        <h2>Login</h2>
        
        <form>
            <div class="user-box">
                <input type="text" name="email" required="" />
                <label>Username</label>
            </div>
            <div class="user-box">
                <input type="password" name="password" required=""/>
                <label>Password</label>
            </div>

            <button type = "submit">
                Submit
            </button>
        </form>
        </div>
)
}

export default AdminLogin;
