import  React, { useEffect } from 'react'
import ParkItem from "./ParkItem"
import { useSelector, useDispatch} from 'react-redux'
import {addParks} from '../Redux/park'
import { Grid } from 'semantic-ui-react'

function ParksContainer() {
    const dispatch = useDispatch()
    const parks  = useSelector(state => state.parks.parks)
    

    useEffect(()=> {
        fetch('http://localhost:3000/parks')
        .then(r => r.json())
        .then(parksArr => {
            dispatch(addParks(parksArr))
        })
    }, [dispatch])

    const parkElements = parks.map(park => {
        return (<Grid.Column>
        <ParkItem key={park.id} park={park}/>
        </Grid.Column>)
    })
    return( 
        <div>
            <h1>Explore The Parks</h1>
            <Grid columns={2} divided>
            <Grid.Row>
               {parkElements}
            </Grid.Row>
            </Grid>
        </div>
        )
}

export default ParksContainer;