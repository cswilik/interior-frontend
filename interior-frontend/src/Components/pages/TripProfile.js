import React from 'react'
import { useParams, Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import  { addLikes } from '../../Redux/trip.js'
import { Image } from 'semantic-ui-react'
import EditTrip from '../EditTrip.js';


function TripProfile() {
    const params = useParams()
    let id = parseInt(params.id)
    const currentUser = useSelector(state => state.users.currentUser)
    const tripProfile = useSelector(({trips}) => trips.trips.find(trip => {
        return (trip.id === id) 
    }))
    const dispatch = useDispatch()
    
    const user = useSelector(state => state.users.users.find(user =>  user.id === tripProfile.user.id))
    
    const updatedLikesObj = {
        id: tripProfile.id,
        likes: (tripProfile.likes + 1)
    }

      
      function handleLikes() {
            fetch(`http://localhost:3000/likes`, {
                method: "PATCH",
                headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(updatedLikesObj)
            })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                dispatch(addLikes(data))
            })       
        
      }

      if (tripProfile) {
    return (
        <div>
            <h1>{user.name}'s trip to {tripProfile.park.name}</h1>
            <Link to={`../users/${tripProfile.user.id}`}>{user.name}'s  Profile</Link>
            <Image src={tripProfile.img_url} size="medium"/>
            <h4>Length of Trip: {tripProfile.length_of_trip}</h4>
            <p><b>Review:</b> {tripProfile.review}</p>
            <button onClick={handleLikes}>Likes:{tripProfile.likes}</button>
            {currentUser.id === tripProfile.user.id ? (<EditTrip trip = {tripProfile}/> ) : (null)}
        </div>
    )} else {
        return (<h4>Is Loading...</h4>)
    }
    
}

export default TripProfile;