import  React, { useState } from 'react'
import ParkItem from "./ParkItem"
import { useSelector} from 'react-redux'

import { Grid, Input } from 'semantic-ui-react'

function ParksContainer() {
    
    const parks  = useSelector(state => state.parks.parks)
    const [search, setSearch] = useState("")


    
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