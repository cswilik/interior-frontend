import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { newTrip } from '../Redux/trip.js'
// import { setCurrentUser } from '../Redux/user.js'
import {  Modal } from 'semantic-ui-react'

function NewTripForm({park}) {
    const [isLoading, setIsLoading] = useState(true)
    const [open, setOpen] = useState(false)
    const [length, setLength] = useState("")
    const [accommodations, setAccommodations] = useState("")
    const [tripEssentials, setTripEssentials] = useState("")
    const [review, setReview] = useState("")
    const [file, setFile] = useState(null)
    const currentUser = useSelector(state => state.users.currentUser)
    const dispatch = useDispatch()
    let history = useHistory()

    
    const newTripData = {
    
        user_id: currentUser.id,
        park_id: park.id,
        length_of_trip: length,
        accommodations: accommodations,
        what_to_pack: tripEssentials,
        review: review,
        likes: 0,
        img_url: file

    }

   

    
    

    function handleNewTripSubmit(event) {
        event.preventDefault()
        setIsLoading(false)
        const form =  new FormData()
        form.append("user_id", newTripData.user_id)
        form.append("park_id", newTripData.park_id)
        form.append("review", newTripData.review)
        form.append("length_of_trip", newTripData.length_of_trip)
        form.append("accommodations", newTripData.accommodations)
        form.append("what_to_pack", newTripData.what_to_pack)
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
              console.log(data)
              setIsLoading(true)
              dispatch(newTrip(data))
              history.push(`/trips/${data.id}`)
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
        style={{backgroundColor: 'rgb(236,230,214)'}}
        trigger={<button className="new-trip-button">Have You Visited?</button>}
        >


            <h1 className="edit-info">Tell Us About Your Trip to {park.name}!</h1> 
            <hr className="hr-line"></hr>
            <div className='edit-form-div'>
                <form onSubmit={handleNewTripSubmit} >
                    <label ><b>How long was your stay?</b><br/><input className='form-input'type='text' value ={length} placeholder='A week? 5 days? ' onChange={(evt) => {setLength(evt.target.value)}} /></label><br/>
                    <label ><b>What were your accomodations?</b><br/><input className='form-input-long' value ={accommodations} placeholder='Airbnb? Backcountry camping?' onChange={(evt) => {setAccommodations(evt.target.value)}} /></label><br/>
                    <label ><b>What are some trip Essentials?</b><br/><input className='form-input-long' value ={tripEssentials}  placeholder='sandals? rainjacket? We love to be prepared!' onChange={(evt) => {setTripEssentials(evt.target.value)}} /></label><br/>
                    <label><b>Give us a brief overview of your trip:</b><br/><textarea className='form-input-long' type='textarea' value={review} placeholder='Where did you stay? What were your thoughts? Did you hike,swim, etc?' onChange={(evt) => {setReview(evt.target.value)}}/></label><br/>
                    <input className="form-input-img" type="file" onChange={handfileChange}/>
                    <br/>
                    <button className="submit-button" type="submit" disabled={!isLoading}>{isLoading ? ('Submit'): ('Loading...')}</button> <br></br>  
                </form>
            </div>
        </Modal>
    )
}

export default NewTripForm;