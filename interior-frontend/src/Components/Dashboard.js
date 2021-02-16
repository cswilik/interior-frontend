import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import UserTripsContainer from './UserTripsContainer'
// import styled from 'styled-components';
import { DashboardDiv, ProfileLink} from './style.js';

function Dashboard() {
    const currentUser = useSelector(state => state.users.currentUser)

    
    if (currentUser) {
    return (
        <>
        <DashboardDiv>
            <h1>Welcome {currentUser.name}</h1> 
            {(currentUser.name === null || currentUser.name === "" ? <h6 className="callout">⬇Please Fill Out Your Profile  </h6> : null)}
            <ProfileLink to='./editprofile'>Edit Profile</ProfileLink> | <ProfileLink to={`./users/${currentUser.id}`}>Public Profile</ProfileLink>
            <br></br>
       </DashboardDiv>
       <UserTripsContainer/>
       </>
    )
    
    } else {
        return (<h4>Is Loading...</h4>)
    }
}   



export default Dashboard;



