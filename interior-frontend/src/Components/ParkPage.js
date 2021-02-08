import React from 'react'
import { useParams, Link } from "react-router-dom";
import {useSelector} from 'react-redux'
// import { setParkProfile } from '../Redux/park'
import { Header, Container, Grid, Image} from 'semantic-ui-react'
import NewTripForm from './NewTripForm'


function ParkPage() {
    const params = useParams()
    let id = parseInt(params.id)
    // const dispatch = useDispatch()
    const park = useSelector(({parks}) => parks.parks.find(park => {
        return (park.id === id) 
    }))

    const tripsToPark = park.trips.map(trip => {
        return (<><Link to={`../trips/${trip.id}`}><Image src={trip.img_url} ize='tiny'/><br></br></Link></> )
    })

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
                            <NewTripForm park ={park}/>
                        {/* <button className="trip-btn">Have You Visited?</button> */}
                        About this park:<Header sub>{park.location}</Header>
                        </Header>
                            <p><b> Entrance Fees:</b><br></br>${park.entrance_fees}</p>
                            <p><b>Description:</b><br></br>{park.description}</p>
                    </Container>
                </Grid.Column>
                    <Grid.Column width={4}>
                        {/* <Link to="../users/20">Link to User's Profile</Link> */}
                        {tripsToPark}
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
                
        </div>
    )


}

export default ParkPage