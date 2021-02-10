import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import {useSelector, useDispatch} from 'react-redux'
import {updatedUsers} from '../Redux/user'


function ProfileForm() {
    const currentUser = useSelector(state => state.users.currentUser)
    let history = useHistory()
    const dispatch = useDispatch()
    const [name, setUserName] = useState(currentUser.name)
    const [bio, setUserBio] = useState(currentUser.bio)
    const [favPark, setFavPark] = useState(currentUser.fav_park)

    const profileData = {
        id: currentUser.id,
        name: name,
        bio: bio,
        fav_park: favPark
    }


   function handleSubmit(evt) {
       evt.preventDefault()
        fetch(`http://localhost:3000/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileData)
        })
        .then(r => r.json())
        .then(updatedUser => {
            dispatch(updatedUsers(updatedUser))
            history.push('/dashboard')})

    }

    return(
        <div>
            <h1>Tell Us About Yourself</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Input value ={name} fluid label ='Name' placeholder='Name' onChange={evt => {setUserName(evt.target.value)}}/>
                <Form.TextArea value={bio} label ='Bio' placeholder='Bio' onChange={evt => {setUserBio(evt.target.value)}}/>
                <Form.Input value={favPark} fluid label ='Favorite park' placeholder='whats your favorite park?'onChange={evt => {setFavPark(evt.target.value)}}/>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default ProfileForm;