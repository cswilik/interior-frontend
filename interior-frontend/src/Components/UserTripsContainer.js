import React from 'react'
import {useSelector} from 'react-redux'
import UserTripItem from './UserTripItem'




function UserTripsContainer() {
    const currentUser = useSelector(state => state.users.currentUser)
    const userTrips = useSelector(({trips})=> {
           return trips.trips.filter(trip => {
                return (trip.user.id === currentUser.id)
            })
    })


    const mytripElements = userTrips.map((trip) => {
        return <UserTripItem key={trip.id} trip={trip}/>
    })


    return (
        <div>
            {/* <h3>Trips I've Taken</h3> */}
                <div className="wrapper-div">
                    {mytripElements}
                </div>
        </div>
        
    )
}



export default UserTripsContainer;