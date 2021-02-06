import React from 'react'
import {Link} from 'react-router-dom'
// import { Grid, Image } from 'semantic-ui-react'

function ParkItem({park}) {
    return (
       <div>
            <Link to={`../parks/${park.id}`}><h1>{park.name}</h1></Link>
            <h2>{park.location}</h2>
            <p>{park.description}</p>
            <br></br>
       </div>
            
    )
}

export default ParkItem