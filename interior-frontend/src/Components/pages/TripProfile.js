import React from 'react'
import { useParams, Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import  { addLikes } from '../../Redux/trip.js'
import EditTrip from '../EditTrip.js';


function TripProfile() {
    
    const params = useParams()
    let id = parseInt(params.id)
    const currentUser = useSelector(state => state.users.currentUser)
    const tripProfile = useSelector(({trips}) => trips.trips.find(trip => {
        return (trip.id === id) 
    }))
    const dispatch = useDispatch()
    
    const user = useSelector(state => state.users.users.find(user =>  {
       if (tripProfile) {
           return (user.id === tripProfile.user.id)
       } else return ""
    }))
    
    
    


    
      function handleLikes() {
        const updatedLikesObj = {
            id: tripProfile.id,
            likes: (tripProfile.likes + 1)
        }
            fetch(`http://localhost:3000/likes`, {
                method: "PATCH",
                headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(updatedLikesObj)
            })
            .then(r => r.json())
            .then(data => {
                dispatch(addLikes(data))
                
            })       
        
      }

      if (tripProfile && user) {
        
    return (
        <div className="trip-page-div">
            <h1 className="trip-title">{user.name}'s trip to {tripProfile.park.name}</h1>
            <Link className="link-styling"to={`../users/${tripProfile.user.id}`}>{user.name}'s  Profile</Link>
            <div className= "trip-img-div">
                <img className="trip-img" src={tripProfile.img_url} alt={tripProfile.park.name}/>
                <div className="trip-info-div">
                <p><b>Length of Trip:</b>{tripProfile.length_of_trip}</p>
                <p><b>Review:</b> {tripProfile.review}</p>
                <p><b>Accommodations:</b> {tripProfile.accommodations}</p>
                <p><b>Trip Essentials:</b> {tripProfile.what_to_pack}</p>
                <button className="likes-styled-button" onClick={handleLikes}>Likes: {tripProfile.likes}</button><br></br>
                </div>
            </div>
                <br></br>
                {currentUser.id === tripProfile.user.id ? (<EditTrip trip = {tripProfile}/> ) : (null)}
        </div>
    )} else {
        return (<h4>Is Loading...</h4>)
    }
    
}

export default TripProfile;