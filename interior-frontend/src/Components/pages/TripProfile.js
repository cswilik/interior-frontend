import React, {useEffect, useState } from 'react'
import { useParams, useHistory, useLocation } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import trip, { showTripProfile } from '../../Redux/trip.js'
import { Image, Container, Divider } from 'semantic-ui-react'
import EditTrip from '../EditTrip.js';

function TripProfile() {
    const params = useParams()
    const [isLoaded, setIsLoaded] = useState(false);
    const currentUser = useSelector(state => state.users.currentUser)
    const tripProfile = useSelector(state => state.trips.tripProfile)
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    // console.log(tripProfile)
    console.log(location)

    useEffect(() => {
        fetch(`http://localhost:3000/trips/${params.id}`)
          .then(resp => resp.json())
          .then(data => {
            dispatch(showTripProfile(data))
            setIsLoaded(true)
          })
      }, [params.id, dispatch])

      


  if (!isLoaded) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{tripProfile.user.name}'s trip to {tripProfile.park.name}</h1>
            <Image src={tripProfile.img_url} size="medium"/>
            <h4>Length of Trip: {tripProfile.length_of_trip}</h4>
            <p><b>Review:</b> {tripProfile.review}</p>
            <button>Likes:{tripProfile.likes}</button>
            {currentUser.id === tripProfile.user.id ? (<EditTrip trip = {tripProfile}/> ) : (null)}
        </div>
    )
}

export default TripProfile;