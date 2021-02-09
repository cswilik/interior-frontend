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
    const [img, setImg] = useState("")
    const currentUser = useSelector(state => state.users.currentUser)
    const dispatch = useDispatch()
    let history = useHistory()

    
    const newTripData = {
        user_id: currentUser.id,
        park_id: park.id,
        length_of_trip: length,
        review: review,
        img_url: img,
        likes: 0

    }
    

    function handleNewTripSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3000/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(newTripData)
          })
          .then(r => r.json())
          .then(data => {
              console.log(data)
              dispatch(newTrip(data))
              history.push(`/trips/${data.id}`)
          })
          
        }
    

    
    return (
        <Modal onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        closeIcon
        trigger={<Button floated="right">Have You Visited?</Button>}>


        <Modal.Header>Tell Us About Your Trip to {park.name}!</Modal.Header> 
        <Modal.Description>
          <br></br>
          <Form onSubmit={handleNewTripSubmit} >
                <Form.Input value ={length} fluid label ='How long was your stay?' placeholder='A week? 5 days? ' onChange={(evt) => {setLength(evt.target.value)}} />
                <Form.TextArea value={review} label ='Give us a brief overview of your trip' placeholder='Where did you stay? What were your thoughts? Did you hike,swim, etc?' onChange={(evt) => {setReview(evt.target.value)}}/>
                <Form.Input value={img} fluid label ='Upload your favorite image from your trip:' placeholder='image url here' onChange={(evt) => {setImg(evt.target.value)}}/>
                <Form.Button>Submit</Form.Button>
            </Form>
        </Modal.Description>



        </Modal>
    )
}

export default NewTripForm;