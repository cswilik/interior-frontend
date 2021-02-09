import React, { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { Header, Container, Grid, Image, Button} from 'semantic-ui-react'
import NewTripForm from './NewTripForm'
import { setCurrentUser } from '../Redux/user';
import { addParks } from '../Redux/park';




function ParkPage() {
    const dispatch = useDispatch()
    const params = useParams()
    let id = parseInt(params.id)
    const park = useSelector(({parks}) => parks.parks.find(park => {
        return (park.id === id) 
    }))
    const tripsToPark = park.trips.map(trip => {
        return (<><Link to={`../trips/${trip.id}`}><Image src={trip.img_url} ize='tiny'/><br></br></Link></> )
    })
    const currentUser = useSelector(({users}) => users.currentUser)
    const currentUserPark = currentUser.trips.find(trip => {
        return (trip.park_id === park.id)
    })
    const trips = useSelector(({trips}) => (trips.trips))

   useEffect(() => {
       fetch('http://localhost:3000/login', {
           method: "POST"
       })
       .then(r => r.json())
       .then(data => {
            dispatch(setCurrentUser(data))
       })
   }, [trips, dispatch])


   useEffect(() => {
    fetch('http://localhost:3000/parks')
    .then(r => r.json())
    .then(parksArr => {
        dispatch(addParks(parksArr))
    })
}, [trips, dispatch])

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
                        
                        <Header as='h2'>
                         {currentUserPark ? (<Button as={Link} exact to={`../trips/${currentUserPark.id}`} floated='right'>See Your Trip</Button>) : (<NewTripForm park ={park}/>)  }
                    
                        
                        About this park:<Header sub>{park.location}</Header>
                        </Header>
                            <p><b> Entrance Fees:</b><br></br>${park.entrance_fees}</p>
                            <p><b>Description:</b><br></br>{park.description}</p>
                    </Container>
                </Grid.Column>
                    <Grid.Column width={4}>
                        {tripsToPark}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
                
        </div>
    )


}

export default ParkPage