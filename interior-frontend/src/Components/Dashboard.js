import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import UserTripsContainer from './UserTripsContainer'
// import styled from 'styled-components';
import { DashboardDiv} from './style.js';

function Dashboard() {
    const currentUser = useSelector(state => state.users.currentUser)

    
    if (currentUser) {
    return (
        <>
        <div className="dashboard-div">
            <h1>Welcome {currentUser.name}</h1> 
            {(currentUser.name === null || currentUser.name === "" ? <h6 className="callout">⬇Please Fill Out Your Profile  </h6> : null)}
            <Link className="link-styling" to='./editprofile'>Edit Profile</Link> | <Link className="link-styling" to={`./users/${currentUser.id}`}>Public Profile</Link>
            <br></br>
       </div>
       <UserTripsContainer/>
       </>
    )
    
    } else {
        return (<h4>Is Loading...</h4>)
    }
}   



export default Dashboard;



