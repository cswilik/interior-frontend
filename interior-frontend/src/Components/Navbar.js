import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { NavLink, Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Menu >
                <Menu.Item position='right'>
                    <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink className="nav-link" to="/exploretheparks">ExploreTheParks</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink className="nav-link" to="/retail">Retail</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink className="nav-link" to="/retail">Logout</NavLink>
                </Menu.Item>
            </Menu>
           
        </nav>
    )


}

export default NavBar