import React from 'react'
import {useSelector} from 'react-redux'
import { Image, Container, Divider } from 'semantic-ui-react'

function UserTripItem({trip}) {
    const currentUser = useSelector(state => state.users.currentUser)

    const park = currentUser.parks.find((park) => {
     return  park.id === trip.park_id 
           
    })

    

    return (
        <div>
            <Container textAlign='left'>
            <Image src={trip.img_url} size='tiny' circular verticalAlign='bottom' />
            <span>{park.name}</span>
            <p>{trip.review}</p>
            <span>Likes: {trip.likes}</span>
            <Divider/>
            </Container>

        </div>
    )
}

export default UserTripItem;