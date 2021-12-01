import React, { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { Header, Container, Grid, Button} from 'semantic-ui-react'
import NewTripForm from './NewTripForm'
import { setCurrentUser } from '../Redux/user';
import { addParks } from '../Redux/park';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'





function ParkPage() {
    const apiURL = 'https://interiornps.herokuapp.com/'
    const dispatch = useDispatch()
    const params = useParams()
    let id = parseInt(params.id)
    const park = useSelector(({parks}) => parks.parks.find(park => {
        return (park.id === id) 
    }))
    const tripsToPark = park.trips.map(trip => {
        return (<><Link key={trip.id} exact='true' to={`../trips/${trip.id}`}><img className="park-trips-img" alt="users trips to this park"key={trip.id} src={trip.img_url} size='medium'/><br></br></Link></> )
    })
    const currentUser = useSelector(({users}) => users.currentUser)
    console.log(currentUser.trips)
    const currentUserPark = currentUser.trips.find(trip => {
        return (trip.park_id === park.id)
    })
    const trips = useSelector(({trips}) => (trips.trips))
     
   

    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`${apiURL}dashboard`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(data => dispatch(setCurrentUser(data)))
    }, [dispatch])


   useEffect(() => {
    fetch(`${apiURL}parks`)
    .then(r => r.json())
    .then(parksArr => {
        dispatch(addParks(parksArr))
    })
}, [trips, dispatch])

    const style = {
        width: '300px',
        height: '300px',
        boxShadow: '3px 3px 3px 3px #888888'
    }

   

    return (
        <div >
           <Header style={{
            backgroundImage: `url(${park.img_url})`,
            height: `40vw`,
            width: `100%`,
            backgroundSize: `cover`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `center `
            }} textAlign="center" >
            <Header.Content className="park-title">{park.name}</Header.Content>
            </Header>
           <Grid celled>
                <Grid.Row>
                <Grid.Column width={12}>
                    <Container textAlign= "left">
                        
                        <Header className="park-info" as='h2' >
                         {currentUserPark ? (<Button className="new-trip-button" as={Link} exact='true' to={`../trips/${currentUserPark.id}`} floated='right'>See Your Trip</Button>) : (<NewTripForm park ={park}/>)  }
                    
                        
                        About this park:<Header sub>{park.location}</Header>
                        {/* I don't have the Google account trial any longer */}
                        {/* <div className='map-div'>
                        <Map google={window.google} zoom={9}
                            center={{
                                lat: park.lat,
                                lng: park.long
                              }}
                              style={style}
                              >
                                  <Marker position={{lat: park.lat, lng: park.long}}/>
                        </Map>
                        </div> */}
                        <br></br>
                        </Header >
                            
                            <p className="park-info"><b> Entrance Fees:</b><br></br>${park.entrance_fees}</p>
                            <p className="park-info"><b>Description:</b><br></br>{park.description}</p>
                            <p className="park-info"><b>Weather Info:</b><br></br>{park.weather}</p>
                    </Container>
                </Grid.Column>
                    <Grid.Column width={4}>
                        <h3 className="park-info">See Trips to this park:</h3>
                        {(tripsToPark.length === 0) ? (<p>No one has visited this park yet!</p>): (null)}
                        {tripsToPark}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
                
        </div>
    )


}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
   }) (ParkPage)
// export default ParkPage