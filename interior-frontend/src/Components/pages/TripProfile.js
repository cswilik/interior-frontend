import React from 'react'
import { useParams} from "react-router-dom";
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
    

    
    


      
      function handleLikes() {
        
          const updatedLikesObj = {
              likes: (tripProfile.likes)
          }

          console.log(updatedLikesObj)
            fetch(`http://localhost:3000/trips/${params.id}`, {
                method: "PATCH",
                headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(updatedLikesObj)
            })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                dispatch(addLikes(tripProfile))
            })       
        
      }

      if (tripProfile) {
    return (
        <div>
            <h1>{tripProfile.user.name}'s trip to {tripProfile.park.name}</h1>
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