import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { updateTrip, deleteTrip } from '../Redux/trip.js'
import { Button, Modal, Form } from 'semantic-ui-react'

function EditTrip({trip}) {
    const [open, setOpen] = useState(false)
    const [length, setLength] = useState(trip.length_of_trip)
    const [review, setReview] = useState(trip.review)
    const [img, setImg] = useState(trip.img_url)
    const dispatch = useDispatch()
    let history = useHistory()
    
    

    const updatedTrip = {
        id: trip.id,
        user_id: trip.user.id,
        park_id: trip.park.id,
        length_of_trip: length,
        review: review,
        img_url: img
    }

    function handleEditTrip(event) {
        event.preventDefault();
        fetch(`http://localhost:3000/trips/${trip.id}}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTrip),
        }).then(resp => resp.json())
        .then(data => {
            dispatch(updateTrip(data))
            // history.push(`./trips/${data.id}`)
            history.goBack()
        })
    }

    function handleDeleteTrip(event) {
        event.preventDefault();
        fetch(`http://localhost:3000/trips/${trip.id}}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
        }).then(resp => resp.json())
        .then(data => {
            dispatch(deleteTrip(data))
            history.push('../dashboard')
        })
    }
    

    
    
  
   return (
    <Modal onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    closeIcon
    trigger={<Button floated="right">EditTrip</Button>}>
        <Modal.Header>Edit Trip</Modal.Header>
        <Modal.Description>
        <Form onSubmit={handleEditTrip} >
                <Form.Input value ={length} fluid label ='How long was your stay?' placeholder='A week? 5 days? ' onChange={(evt) => {setLength(evt.target.value)}}/>
                <Form.TextArea value={review} label ='Give us a brief overview of your trip' placeholder='Where did you stay? What were your thoughts? Did you hike,swim, etc?' onChange={(evt) => {setReview(evt.target.value)}} />
                <Form.Input value={img} fluid label ='Upload your favorite image from your trip:' placeholder='image url here'  onChange={(evt) => {setImg(evt.target.value)}}/>
                <Form.Button>Submit</Form.Button>
            </Form>
            <br></br>
            <Button color="red" onClick={handleDeleteTrip}>Delete Trip</Button>
                
        </Modal.Description>
   </Modal>
   
   )
}

export default EditTrip;