import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { updateTrip, deleteTrip } from '../Redux/trip.js'
import { Button, Modal, Form } from 'semantic-ui-react'


function EditTrip({trip}) {
    const [open, setOpen] = useState(false)
    const [length, setLength] = useState(trip.length_of_trip)
    const [review, setReview] = useState(trip.review)
    const [accommodations, setAccommodations] = useState(trip.accommodations)
    const [tripEssentials, setTripEssentials] = useState(trip.what_to_pack)
    const [file, setFile] = useState(trip.img_url)
    const dispatch = useDispatch()
    let history = useHistory()
    
    

    const updatedTrip = {
        id: trip.id,
        user_id: trip.user.id,
        park_id: trip.park.id,
        length_of_trip: length,
        accommodations: accommodations,
        what_to_pack: tripEssentials,
        review: review,
        img_url: file
    }

   

    function handleEditTrip(event) {
        event.preventDefault();
        const form =  new FormData()
        form.append("id", updatedTrip.id)
        form.append("user_id", updatedTrip.user_id)
        form.append("park_id", updatedTrip.park_id)
        form.append("length_of_trip", updatedTrip.length_of_trip)
        form.append("accommodations", updatedTrip.accommodations)
        form.append("what_to_pack", updatedTrip.what_to_pack)
        form.append("review", updatedTrip.review)
        form.append("img_url", updatedTrip.img_url)
        fetch(`http://localhost:3000/trips/${trip.id}}`, {
            method: 'PATCH',
            
            body: form
        }).then(resp => resp.json())
        .then(data => {
            console.log(data)
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
            // alert("Trip has been deleted")
        })
    }
    
    function handfileChange(evt) {
        setFile(evt.target.files[0])
    }

    
    
  
   return (
    <Modal onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    closeIcon
    size='small'
    style={{backgroundColor: 'rgb(236,230,214)'}}
    trigger={<button className="styled-button">EditTrip</button>}>
        <h1 className="edit-info">Edit Trip</h1>
        <hr className="hr-line"></hr>
        <div className='edit-form-div'>
            <Form onSubmit={handleEditTrip} >
                <Form.Input value ={length} label ='How long was your stay?' placeholder='A week? 5 days? ' onChange={(evt) => {setLength(evt.target.value)}}/>
                <Form.Input value ={accommodations} fluid label ='What were your accomodations?' placeholder='Airbnb? Backcountry camping?' onChange={(evt) => {setAccommodations(evt.target.value)}} />
                <Form.Input value ={tripEssentials} fluid label ="What are some trip Essentials?" placeholder='sandals? rainjacket? We love to be prepared!' onChange={(evt) => {setTripEssentials(evt.target.value)}} />
                <Form.TextArea value={review} label ='Give us a brief overview of your trip' placeholder='Where did you stay? What were your thoughts? Did you hike,swim, etc?' onChange={(evt) => {setReview(evt.target.value)}} />
                <Form.Input><input type="file" onChange={handfileChange}/></Form.Input>    
                <hr className="hr-line-two"></hr>           
                 <button className="submit-button">Submit</button>
            </Form>
            <button className="btn-danger" onClick={handleDeleteTrip}>Delete Trip</button>
        <br></br>
        
                
        </div>
   </Modal>
   
   )
}

export default EditTrip;