import React from 'react'
// import { Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import EditTrip from './EditTrip'
import styled from "styled-components";

function UserTripItem({trip}) {

    // size='small' circular verticalAlign='bottom'
    
    return (
        <div>
            <Card>
                <Link to={`../trips/${trip.id}`}><Image src={trip.img_url} alt={trip.park.name} /></Link>
                <span>{trip.park.name}</span>
                <h5>Length of Trip: {trip.length_of_trip}</h5>
                <p>{trip.review}</p>
                <span>Likes: {trip.likes}</span>
                <EditTrip trip={trip}/>     
                {/* <Divider/> */}
            </Card>
        </div>
    )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 250px;
  margin: 10px;
  padding: 15px;
  border: 1px solid;
  border-radius: 10px;`

const Image = styled.img`
width: 80%;
height: 100%;
border-radius: 70%;

`


export default UserTripItem;