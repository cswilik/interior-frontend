import React from 'react'
import { useParams, Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import { Image, Container, Divider } from 'semantic-ui-react'
import UserTripsContainer from '../UserTripsContainer'





function UserProfile() {
    const params = useParams()
    const id = parseInt(params.id)
    const currentUser = useSelector(state => state.users.currentUser)
    const userProfile = useSelector(({users}) => users.users.find(user => {
      return (user.id === id) 
  }))
    const trips = useSelector(({trips})=> trips.trips.filter( trip => {
       return (trip.user.id === currentUser.id) 
      } 
    ))
     const parks = trips.map(trip => {
       return trip.park
      })
  
 
 
 
   

  const userTrips = userProfile.trips.map(trip => {
    return (
      <div>
        <Container textAlign='left'>
        <Link key={trip.id} to={`../../trips/${trip.id}`}><Image src={trip.img_url} size='tiny' circular verticalAlign='bottom'></Image></Link>
        <h5>{trip.length_of_trip}</h5>
        <p>{trip.review}</p>
        <span>Likes: {trip.likes}</span>
        <Divider/>
        </Container>
      </div>
    )
  })

    return (
        <div>
            <h1>{userProfile.name}'s Profile</h1>
            <h4><b>Bio:</b> {userProfile.bio}</h4>
            <h4><b>{userProfile.name}'s Favorite Park:</b> {userProfile.fav_park}</h4>
            
            <p>{userProfile.name} has visited {parks.length} park(s) so far!</p>
          {currentUser.id === userProfile.id ? (<UserTripsContainer/>) : (
            userTrips
          )}
        </div>

    )
}



export default UserProfile;