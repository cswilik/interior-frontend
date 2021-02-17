import React from 'react'
import { useParams, Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import UserTripsContainer from '../UserTripsContainer'
import Image from './juniorbadge.png'
import ImageTwo from './parkrangerbadge.png'
import ImageThree from './ultimaterangerbadge 2.png'





function UserProfile() {
    const params = useParams()
    const id = parseInt(params.id)
    const currentUser = useSelector(state => state.users.currentUser)
    const userProfile = useSelector(({users}) => users.users.find(user => {
      return (user.id === id) 
  }))
    const trips = useSelector(({trips})=> trips.trips.filter( trip => {
       return (trip.user.id === userProfile.id) 
      } 
    ))

    
     const parks = trips.map(trip => {
       return trip.park
      })
  
 
 
 
   

  const userTrips = userProfile.trips.map(trip => {
    return (
      <div className="trip-card-div">
        {/* <Container textAlign='left'> */}
        <Link key={trip.id} to={`../../trips/${trip.id}`}><img  className="trip-card-img" src={trip.img_url} alt="trip"/></Link>
        <h5>{trip.length_of_trip}</h5>
        <p>{trip.review}</p>
        <span>Likes: {trip.likes}</span>
        {/* <Divider/>
        </Container> */}
      </div>
      
    )
  })

    return (
        <div className="dashboard-div">
            <h1 className="welcome-title">{userProfile.name}'s Profile</h1>
            <div className="profile-div">
              <p><b>Bio:</b> {userProfile.bio}</p>
              <br/>
              <p><b>Favorite Park:</b> {userProfile.fav_park}</p>
              <h3>Badges:</h3>
            </div>
              <div className="badges-div">
              {(parks.length <= 1) ? (<p>Visit more parks to earn badges!</p>) : (null)}
              {(parks.length >= 2) ? (<div className="img-badge-div"><img className="junior-badge-img" src={Image} alt="junior badge"/>
              <p>You've visited more than 3 parks! You earned a junior ranger badge!</p></div>) : null}
              {(parks.length >= 2) ? (<div className="img-badge-div"><img className="park-badge-img" src={ImageTwo} alt="park ranger badge"/>
              <p>Wow, you visited 7 parks! You earned a park ranger badge!</p></div>) : null}
              {(parks.length >= 2) ? (<div className="img-badge-div"><img className="junior-badge-img" src={ImageThree} alt="ultimate park ranger"/>
              <p>Holy Yosemite! You have visited over 10 parks!!! Congrats, you earned the </p></div>) : null}
              </div>
            
            <br/>
            <h1>{userProfile.name} has visited {parks.length} park(s) so far!</h1>
          {currentUser.id === userProfile.id ? (<UserTripsContainer/>) : (
            <div className="wrapper-div">{userTrips}</div>
          )}
        </div>

    )
}



export default UserProfile;