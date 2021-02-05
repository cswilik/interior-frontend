import React, {useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { showUserProfile } from '../Redux/user'
import {useSelector, useDispatch} from 'react-redux'
import UserTripsContainer from './UserTripsContainer';

function UserProfile() {
    const params = useParams()
    const [isLoaded, setIsLoaded] = useState(false);
    const userProfile = useSelector(state => state.users.userProfile)
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
            <UserTripsContainer/>
        </div>

    )
}



export default UserProfile;