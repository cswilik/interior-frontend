import React from 'react'
import {useSelector} from 'react-redux'

function UserTripItem({trip}) {
    const currentUser = useSelector(state => state.users.currentUser)

    const park = currentUser.parks.find((park) => {
     return  park.id === trip.park_id 
           
    })

    

    return (
        <div>
            <h3>{park.name}</h3>
            <img src={trip.img_url} alt="National Park" />
            <p>{trip.review}</p>
            <span>Likes: {trip.likes}</span>

        </div>
    )
}

export default UserTripItem;