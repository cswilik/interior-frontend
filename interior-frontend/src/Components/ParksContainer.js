import  React, { useState } from 'react'
import ParkItem from "./ParkItem"
import { useSelector} from 'react-redux'
import { Grid } from 'semantic-ui-react'

function ParksContainer() {
    
    const parks  = useSelector(state => state.parks.parks)
    const [search, setSearch] = useState("")


    
    const filteredParks = parks.filter(park => {
        return (park.name.toLowerCase().includes(search.toLowerCase()))
     })

    
    const parkElements = filteredParks.map(park => {
        return (<Grid.Column   key={park.id}>
        <ParkItem  key={park.id} park={park}/>
        </Grid.Column>)
    })

    function handleSearch(evt) {
        setSearch(evt.target.value)
    }

    



    return( 
        <div>
            <h1 className="welcome-title">Explore The Parks</h1>
            <input className="search-bar"type="search" value={search} placeholder="Search for parks..." onChange={(evt) => {handleSearch(evt)}} />
            <br/>
            <Grid columns={3} divided >
            <Grid.Row >
               {parkElements}
            </Grid.Row>
            </Grid>
        </div>
        )
}

export default ParksContainer;