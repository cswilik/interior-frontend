import React from 'react'
import { Image, Container, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import EditTrip from './EditTrip'

function UserTripItem({trip}) {
    
    return (
        <div>
            <Container textAlign='left'>
            <Link to={`../trips/${trip.id}`}><Image src={trip.img_url} size='tiny' circular verticalAlign='bottom' /></Link>
            <span>{trip.park.name}</span>
            <h5>Length of Trip: {trip.length_of_trip}</h5>
            <p>{trip.review}</p>
            <span>Likes: {trip.likes}</span>
            <EditTrip trip={trip}/>     
             <Divider/>
            </Container>

        </div>
    )
}

export default UserTripItem;