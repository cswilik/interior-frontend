import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { newTrip } from '../Redux/trip.js'
// import { setCurrentUser } from '../Redux/user.js'
import { Button, Modal, Form } from 'semantic-ui-react'

function NewTripForm({park}) {
    const [open, setOpen] = useState(false)
    const [length, setLength] = useState("")
    const [review, setReview] = useState("")
    const [file, setFile] = useState(null)
    const currentUser = useSelector(state => state.users.currentUser)
    const dispatch = useDispatch()
    let history = useHistory()

    
    const newTripData = {
    
        user_id: currentUser.id,
        park_id: park.id,
        length_of_trip: length,
        review: review,
        likes: 0,
        img_url: file

    }

   

    
    

    function handleNewTripSubmit(event) {
        event.preventDefault()
        const form =  new FormData()
        form.append("user_id", newTripData.user_id)
        form.append("park_id", newTripData.park_id)
        form.append("review", newTripData.review)
        form.append("length_of_trip", newTripData.length_of_trip)
        form.append("likes", newTripData.likes)
        form.append("img_url", newTripData.img_url)
        // form.append("api_key", "352974619581476");
        fetch('http://localhost:3000/trips', {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            //   },
            body: form
          })
          .then(r => r.json())
          .then(data => { 
              dispatch(newTrip(data))
              history.push(`/trips/${data.id}`)
          })
          
        }
    
        function handfileChange(evt) {
            setFile(evt.target.files[0])
        }

    
    return (
        <Modal as={Form} onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        closeIcon
        trigger={<Button floated="right">Have You Visited?</Button>}
        onSubmit={handleNewTripSubmit}
        >


        <Modal.Header>Tell Us About Your Trip to {park.name}!</Modal.Header> 
        <Modal.Description>
          <br></br>
          
          {/* <Form onSubmit={handleNewTripSubmit} > */}
                <Form.Input value ={length} fluid label ='How long was your stay?' placeholder='A week? 5 days? ' onChange={(evt) => {setLength(evt.target.value)}} />
                <Form.TextArea value={review} label ='Give us a brief overview of your trip' placeholder='Where did you stay? What were your thoughts? Did you hike,swim, etc?' onChange={(evt) => {setReview(evt.target.value)}}/>
                <Form.Input><input type="file" onChange={handfileChange}/></Form.Input>
                <Form.Button>Submit</Form.Button>
            {/* </Form> */}
        </Modal.Description>



        </Modal>
    )
}

export default NewTripForm;