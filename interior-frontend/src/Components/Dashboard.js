import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import UserTripsContainer from './UserTripsContainer'
// import user from '../Redux/user'

function Dashboard() {
    const currentUser = useSelector(state => state.users.currentUser)
    
   

    return (
        // (user.name === null || user.name === "" ? <span className="callout">⬇We don't know your name yet  </span> : null}<br />

        <div>
            <h1>Welcome {currentUser.name}</h1> 
            {(currentUser.name === null || currentUser.name === "" ? <h6 className="callout">⬇Please Fill Out Your Profile  </h6> : null)}
            <Link to='./editprofile'>Edit Profile</Link> | <Link to={`./users/${currentUser.id}`}>Public Profile</Link>
            <UserTripsContainer/>
       </div>
    )
}   

export default Dashboard;



