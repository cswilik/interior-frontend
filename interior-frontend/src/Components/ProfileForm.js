import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {updatedUsers} from '../Redux/user'


function ProfileForm() {
    const currentUser = useSelector(state => state.users.currentUser)
    let history = useHistory()
    const dispatch = useDispatch()
    const [name, setUserName] = useState(currentUser.name)
    const [bio, setUserBio] = useState(currentUser.bio)
    const [favPark, setFavPark] = useState(currentUser.fav_park)
    const apiURL = 'https://interiornps.herokuapp.com/'

    const profileData = {
        id: currentUser.id,
        name: name,
        bio: bio,
        fav_park: favPark
    }


   function handleSubmit(evt) {
        const token = localStorage.getItem("token")
       evt.preventDefault()
        fetch(`${apiURL}users/${currentUser.id}`, {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(profileData)
        })
        .then(r => r.json())
        .then(updatedUser => {
            dispatch(updatedUsers(updatedUser))
            history.push('/dashboard')
        })

    }

    return(
        <div className="login-div">
            <h1 className="edit-info">Tell Us About Yourself</h1>
            <form onSubmit={handleSubmit}>
                <label ><b>Name:</b><br/><input className="login-details" type='text' value ={name} placeholder='Name' onChange={evt => {setUserName(evt.target.value)}}/></label><br></br>
                <label ><b>Bio</b><br/><textarea  className="login-details" type='text' value={bio} placeholder='Bio' onChange={evt => {setUserBio(evt.target.value)}}/></label><br></br>
                <label ><b>Whats your Favorite Park?</b><br/><input className="login-details" type='text' value={favPark}  placeholder='whats your favorite park?' onChange={evt => {setFavPark(evt.target.value)}}/></label><br></br>
                <button className="styled-button">Submit</button>
            </form>
        </div>
    )
}

export default ProfileForm;