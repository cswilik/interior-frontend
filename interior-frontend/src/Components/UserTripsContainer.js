import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import UserTripItem from './UserTripItem'
import styled from "styled-components";



function UserTripsContainer() {
    // const [juniorBadge, setJuniorBadge] = useState(false)
    const currentUser = useSelector(state => state.users.currentUser)
    const userTrips = useSelector(({trips})=> {
           return trips.trips.filter(trip => {
                return (trip.user.id === currentUser.id)
            })
    })


    //  if (userTrips.length >= 2) { setJuniorBadge(true)}
    

    // const badgeImg = (juniorBadge) ?
    //     <img src="https://cdn.shopify.com/s/files/1/0253/6757/6685/products/Junior-Ranger-Badge__S_1_784x.jpg?v=1578616275" alt="junior badge"/> : null
         
        
        // if userTrips.length >= 10 then currentUser.junior_badge === true
        // if userTrips.length >= 30 then currentUser.ranger_badge === true
         // if userTrips.length >= 63 then currentUser.master_badge === true

    const mytripElements = userTrips.map((trip) => {
        return <UserTripItem key={trip.id} trip={trip}/>
    })


    return (
        <div>
            <h3>Trips I've Taken</h3>
                <Wrapper>
                    {mytripElements}
                </Wrapper>
        </div>
        
    )
}

const Wrapper = styled.div` 
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 `

export default UserTripsContainer;