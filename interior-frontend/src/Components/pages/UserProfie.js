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
  
 
 
  
      // const tripLikes = trips.map(trip => {
      //   return trip.likes
      // })

   

  const userTrips = userProfile.trips.map(trip => {
    const likesTrips = trips.find(tripTwo => tripTwo.id === trip.id)
    // console.log(likesTrips.likes)
  
    return (
      <div className="trip-card-div">
        <Link key={trip.id} to={`../../trips/${trip.id}`}><img  className="trip-card-img" src={trip.img_url} alt="trip"/></Link>
        <p>Length of Trip: {trip.length_of_trip}</p>
        <p>{trip.review}</p>
        <span>Likes: {likesTrips.likes}</span>
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
              <h3 className="badges-info">Badges:</h3>
            </div>
              <div className="badges-div">
              {(parks.length <= 2) ? (<div className="no-badges-div"><h4><i>***Visit more parks to earn badges***</i></h4></div>) : (null)}
              {(parks.length >= 3) ? (<div className="img-badge-div"><img className="junior-badge-img" src={Image} alt="junior badge"/>
              <p>You've visited more than 3 parks! You earned a junior ranger badge!</p></div>) : null}
              {(parks.length >= 4) ? (<div className="img-badge-div"><img className="park-badge-img" src={ImageTwo} alt="park ranger badge"/>
              <p>Wow, you visited 7 parks! You earned a park ranger badge!</p></div>) : null}
              {(parks.length >= 4) ? (<div className="img-badge-div"><img className="ranger-badge-img" src={ImageThree} alt="ultimate park ranger"/>
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