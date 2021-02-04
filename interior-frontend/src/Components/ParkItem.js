import React from 'react'
// import { Grid, Image } from 'semantic-ui-react'

function ParkItem({park}) {
    return (
       <div>
            <h1>{park.name}</h1>
            <h2>{park.location}</h2>
            <p>{park.description}</p>
            <br></br>
       </div>
            
    )
}

export default ParkItem