import React from 'react'
import {useSelector} from 'react-redux'
import UserTripItem from './UserTripItem'


function UserTripsContainer() {
    const currentUser = useSelector(state => state.users.currentUser)
    const mytrips =currentUser.trips
    console.log(currentUser.parks)
    
    const mytripElements = mytrips.map((trip) => {
        return <UserTripItem key={trip.id} trip={trip}/>
    })

    return (
        <div>
            <h3>Trips I've Taken</h3>
            {mytripElements}
        </div>
        
    )
}

export default UserTripsContainer;