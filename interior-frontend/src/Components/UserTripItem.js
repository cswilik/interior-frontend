import React from 'react'

import { Link } from 'react-router-dom'
import EditTrip from './EditTrip'


function UserTripItem({trip}) {

    
    return (
            <div className="trip-card-div">
                <Link to={`../trips/${trip.id}`}><img className="trip-card-img" src={trip.img_url} alt={trip.park.name} /></Link>
                <h2>{trip.park.name}</h2>
                <p>Length of Trip: {trip.length_of_trip}</p>
                <p>{trip.review}</p>
                <span>Likes: {trip.likes}</span>
                <EditTrip trip={trip}/>     
            </div>
    )
}




export default UserTripItem;