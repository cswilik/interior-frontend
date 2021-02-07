import  React, { useEffect, useState } from 'react'
import ParkItem from "./ParkItem"
import { useSelector, useDispatch} from 'react-redux'
import {addParks} from '../Redux/park'
import { Grid, Input } from 'semantic-ui-react'

function ParksContainer() {
    const dispatch = useDispatch()
    const parks  = useSelector(state => state.parks.parks)
    const [search, setSearch] = useState("")

    useEffect(()=> {
        fetch('http://localhost:3000/parks')
        .then(r => r.json())
        .then(parksArr => {
            dispatch(addParks(parksArr))
        })
    }, [dispatch])

    
    const filteredParks = parks.filter(park => {
        return (park.name.toLowerCase().includes(search.toLowerCase()))
     })

    
    const parkElements = filteredParks.map(park => {
        return (<Grid.Column>
        <ParkItem key={park.id} park={park}/>
        </Grid.Column>)
    })

    function handleSearch(evt) {
        setSearch(evt.target.value)
    }

    
        // return  (park.name.lowerCase().includes(search.lowerCase()})


    return( 
        <div>
            <h1>Explore The Parks</h1>
            <Input value={search} placeholder="Search for parks..." onChange={(evt) => {handleSearch(evt)}} />
            <Grid columns={2} divided>
            <Grid.Row>
               {parkElements}
            </Grid.Row>
            </Grid>
        </div>
        )
}

export default ParksContainer;