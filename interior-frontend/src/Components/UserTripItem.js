import React from 'react'
import {useSelector} from 'react-redux'
import { Image, Container, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function UserTripItem({trip}) {
    const currentUser = useSelector(state => state.users.currentUser)
   

    const park = currentUser.parks.find((park) => {
     return  park.id === trip.park_id 
           
    })

    

    return (
        <div>
            <Container textAlign='left'>
            <Link to={`../trips/${trip.id}`}><Image src={trip.img_url} size='tiny' circular verticalAlign='bottom' /></Link>
            <span>{park.name}</span>
            <h5>Length of Trip: {trip.length_of_trip}</h5>
            <p>{trip.review}</p>
            <span>Likes: {trip.likes}</span>
            <Divider/>
            </Container>

        </div>
    )
}

export default UserTripItem;