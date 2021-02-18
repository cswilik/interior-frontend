import React from 'react'
import {Link} from 'react-router-dom'


function ParkItem({park}) {
    return (
       <div className="park-item-div">
            <Link className="park-link-styling" to={`../parks/${park.id}`}><h1>{park.name}</h1></Link>
            <h2 className="park-location">{park.location}</h2>
            <br/>
            <p>{park.description}</p>
            <br></br>
       </div>
            
    )
}

export default ParkItem