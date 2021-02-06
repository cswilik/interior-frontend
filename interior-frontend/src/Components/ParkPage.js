import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { setParkProfile } from '../Redux/park'
import { Header, Container, Grid, Modal, Button} from 'semantic-ui-react'
import NewTripForm from './NewTripForm'


function ParkPage() {
    const params = useParams()
    const [isLoaded, setIsLoaded] = useState(false);
    const parkProfile = useSelector(state => state.parks.parkProfile)
    const dispatch = useDispatch()

    console.log(parkProfile)

    useEffect(() => {
        fetch(`http://localhost:3000/parks/${params.id}`)
          .then(resp => resp.json())
          .then(data => {
            dispatch(setParkProfile(data))
            setIsLoaded(true)
          })
      }, [params.id, dispatch])


  if (!isLoaded) return <h2>Loading...</h2>;
    return (
        <div >
           <Header style={{
            backgroundImage: `url(${parkProfile.img_url})`,
            height: `40vw`,
            width: `100%`,
            backgroundSize: `cover`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `center `
            }} textAlign="center" >
            <Header.Content>{parkProfile.name}</Header.Content>
            </Header>
           <Grid celled>
                <Grid.Row>
                <Grid.Column width={12}>
                    <Container textAlign= "left">
                        
                        <Header as='h2'>
                            <NewTripForm/>
                        {/* <button className="trip-btn">Have You Visited?</button> */}
                        About this park:<Header sub>{parkProfile.location}</Header>
                        </Header>
                            <p><b> Entrance Fees:</b><br></br>${parkProfile.entrance_fees}</p>
                            <p><b>Description:</b><br></br>{parkProfile.description}</p>
                    </Container>
                </Grid.Column>
                    <Grid.Column width={4}>
                        <h1>Stuff in here</h1>
                        <h1>Stuff in here</h1>
                        <h1>Stuff in here</h1>
                        <h1>Stuff in here</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
                
        </div>
    )


}

export default ParkPage