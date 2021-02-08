import React from 'react'
import { useParams, Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import { Header, Container, Grid, Image} from 'semantic-ui-react'
import NewTripForm from './NewTripForm'
import trip from '../Redux/trip';


function ParkPage() {
    const params = useParams()
    let id = parseInt(params.id)
    const park = useSelector(({parks}) => parks.parks.find(park => {
        return (park.id === id) 
    }))
    const tripsToPark = park.trips.map(trip => {
        return (<><Link to={`../trips/${trip.id}`}><Image src={trip.img_url} ize='tiny'/><br></br></Link></> )
    })
    const currentUser = useSelector(({users}) => users.currentUser)
    console.log(currentUser)

    // const currentUserParks = currentUser.trips.map(trip => {
    //     (trip.park.id === park.id)
    // })

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
            <Header.Content>{park.name}</Header.Content>
            </Header>
           <Grid celled>
                <Grid.Row>
                <Grid.Column width={12}>
                    <Container textAlign= "left">
                        
                        <Header as='h2'>
                            {/* if current user has visited park, link to their trip page? */}
                            <NewTripForm park ={park}/>
                        
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