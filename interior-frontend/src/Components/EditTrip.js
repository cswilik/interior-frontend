import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { updateTrip, deleteTrip } from '../Redux/trip.js'
import {  Modal } from 'semantic-ui-react'


function EditTrip({trip}) {
    const [isLoading, setIsLoading] = useState(true)
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
        setIsLoading(false)
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
            setIsLoading(true)
            dispatch(updateTrip(data))
            // history.push(`./trips/${data.id}`)
            history.push('../dashboard')
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
            <form onSubmit={handleEditTrip} >
                <label ><b>How long was your stay?</b><br/><input className='form-input'type='text' value ={length}  onChange={(evt) => {setLength(evt.target.value)}}/></label><br></br>
                <label ><b>What were your accomodations?</b><br/><input className='form-input-long' type='text' value ={accommodations}   onChange={(evt) => {setAccommodations(evt.target.value)}} /></label><br></br>
                <label><b>What are some trip essentials?</b><br/><input className='form-input-long' type='text' value ={tripEssentials}   onChange={(evt) => {setTripEssentials(evt.target.value)}} /></label><br></br>
                <label><b>Give us a brief overview of your trip:</b><br/><textarea className='form-input-long' type='textarea' value={review} onChange={(evt) => {setReview(evt.target.value)}} /></label><br></br>
                <label><b>Upload one of your favorite photos:</b></label><br/>
                <input className="form-input-img"type="file" onChange={handfileChange}/><br/><br/>  
                {/* <hr className="hr-line-two"></hr>   */}
                <button className="submit-button" type="submit" disabled={!isLoading}>{isLoading ? ('Submit'): ('Loading...')}</button> <br></br>           
            </form>
            <br></br>
            
            <button className="btn-danger" onClick={handleDeleteTrip}>Delete Trip</button>
        <br></br>
        
                
        </div>
   </Modal>
   
   )
}

export default EditTrip;