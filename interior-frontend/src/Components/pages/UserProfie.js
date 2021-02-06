import React, {useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import { showUserProfile } from '../../Redux/user'
import {useSelector, useDispatch} from 'react-redux'
// import { Image, Container, Divider } from 'semantic-ui-react'
// import EditTrip from '../EditTrip'
import UserTripsContainer from '../UserTripsContainer'


function UserProfile() {
    const params = useParams()
    const [isLoaded, setIsLoaded] = useState(false);
    const userProfile = useSelector(state => state.users.userProfile)
    const currentUser = useSelector(state => state.users.currentUser)
    const dispatch = useDispatch()

    console.log(userProfile)

    useEffect(() => {
        fetch(`http://localhost:3000/users/${params.id}`)
          .then(resp => resp.json())
          .then(data => {
            dispatch(showUserProfile(data))
            setIsLoaded(true)
          })
      }, [params.id, dispatch])


  if (!isLoaded) return <h2>Loading...</h2>;


    return (
        <div>
            <h1>{userProfile.name}'s Profile</h1>
            <h4>{userProfile.bio}</h4>
            <h4>{userProfile.fav_park}</h4>
          {currentUser.id === userProfile.id ? (<UserTripsContainer/>): null} 
        </div>

    )
}



export default UserProfile;