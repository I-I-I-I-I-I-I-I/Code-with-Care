import React, { Component } from "react";
import './nav.css'
import {menuItems} from "./menuItems"


class navBarMain extends Component {

    render() {
        return(
            <nav className = "navbarItem">
                <h1 className="navbar-logo">Techlix<i className="fab fa-react"></i></h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {menuItems.map((item , index) => {
                        return(
                    <li key={index}><a className={item.cName} href = {item.url}>
                            {item.title}
                    </a></li>
                    )
                     })}
                </ul>
            </nav>
        )
    }

}

export default navBarMain;