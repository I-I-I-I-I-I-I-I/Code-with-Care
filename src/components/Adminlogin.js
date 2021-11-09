import React from 'react';
import "../login.css";
//Still working on validation for this, submit takes you to the right page for now

function AdminLogin() {

return (

    <div class="login-box">
        <h2>Login</h2>
        
        <form action="/AdminPage">
            <div class="user-box">
                <input type="text" name="email" required=""/>
                <label>Username --PROTOTYPE - CAN BE ANYTHING FOR NOW</label>
            </div>
            <div class="user-box">
                <input type="password" name="password" required=""/>
                <label>Password --PROTOTYPE - CAN BE ANYTHING FOR NOW</label>
            </div>

            <button type = "submit">
                Submit
            </button>
        </form>
        </div>

)
}

export default AdminLogin;
