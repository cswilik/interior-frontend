import React from 'react'
import {  Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import { setCurrentUser } from '../Redux/user'
import {useDispatch, useSelector} from 'react-redux'

function NavBar() {
    const currentUser = useSelector(state => state.users.currentUser)
    const dispatch = useDispatch()


    function login() {
        fetch('http://localhost:3000/login', {
            method: "POST",
        })
        .then(r => r.json())
        .then(userData => dispatch(setCurrentUser(userData)))
        
    }



    return (
        <nav >
            <Menu  className='nav-bar'>
                <NavLink exact to='/'><Icon name='big tree' color='black' /></NavLink>
            {/* <Menu.Item as={ NavLink }  to='./'><Icon name='big tree' /></Menu.Item> */}
                
                <Menu.Item position='right'as={NavLink} exact to='/dashboard' className='main-icon'> Dashboard</Menu.Item>
                <Menu.Item as={NavLink} exact to='/exploretheparks'> Explore the Parks</Menu.Item>
                <Menu.Item as={NavLink} exact to="/retail">Retail</Menu.Item>
                {currentUser ? (
                    <Menu.Item>Logout</Menu.Item>
                ) : (
                    <Menu.Item onClick={login}>Login</Menu.Item>
                )}
                
            </Menu>
           
        </nav>
    )


}

export default NavBar