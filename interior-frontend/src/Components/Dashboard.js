import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import UserTripsContainer from './UserTripsContainer'
import styled from 'styled-components';

function Dashboard() {
    const currentUser = useSelector(state => state.users.currentUser)
    
     // if currentUser.trips.length >= 10 then currentUser.junior_badge === true
        // if currentUser.trips.length >= 30 then currentUser.ranger_badge === true
         // if currentUser.trips.length >= 63 then currentUser.master_badge === true


    if (currentUser) {
    return (
        <DashboardDiv>
            <DashboardTitle>Welcome {currentUser.name}</DashboardTitle> 
            {(currentUser.name === null || currentUser.name === "" ? <h6 className="callout">⬇Please Fill Out Your Profile  </h6> : null)}
            <ProfileLink to='./editprofile'>Edit Profile</ProfileLink> | <ProfileLink to={`./users/${currentUser.id}`}>Public Profile</ProfileLink>
            <br></br>
            <UserTripsContainer/>
       </DashboardDiv>
    )
    
    } else {
        return (<h4>Is Loading...</h4>)
    }
}   

const DashboardDiv = styled.div` 
    margin-top: 20px;
`
const DashboardTitle = styled.h1`
    margin-top: 30px;
    font-family: ''Cantarell', serif;
`
const ProfileLink = styled(Link)`
font-family: 'Oxygen', sans-serif; 
font-style: none;
color: black;
:hover { font-style: italic;
    color: black } 
`
export default Dashboard;



