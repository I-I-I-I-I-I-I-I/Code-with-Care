import React , {Component, useContext} from 'react'
import AdminPage from './AdminPage';
import '../login.css'
import { createContext } from 'react';


const Context = createContext("w'");


export function AdminLogin() {

        const value = useContext(Context);

    return (
        
        <div class="login-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="email" required="" />
                    <label>Username</label>
                    {value}
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

function AdminHandler() {
    const value = useContext(Context);
const isValid = false;
let screen;
if (isValid) {
    screen = 
    <AdminPage/>
  } else {
    screen =
    <Context.Provider value={value}>
        <AdminLogin/>
    </Context.Provider>
  }

    return(
        <div>
        {screen}
        </div>

    );

    }


export default AdminHandler;



