import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import UserTripsContainer from './UserTripsContainer'
// import user from '../Redux/user'

function Dashboard() {
    const currentUser = useSelector(state => state.users.currentUser)
    console.log(currentUser)
    return (
        <div>
            <h1>Welcome, {currentUser.name}</h1> 
            <Link to='./editprofile'>Edit Profile</Link> | {/* <Link to='/:id'>Public Profile</Link> */}
            <UserTripsContainer/>
       </div>
    )
}

export default Dashboard;