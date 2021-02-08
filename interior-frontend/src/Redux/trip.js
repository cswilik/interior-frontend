import { createSlice } from "@reduxjs/toolkit"



const tripSlice = createSlice({
    name: "trip",
    initialState: {
        trips: [],
  
    },
    reducers: {
        allTrips: (state, action) => {
            state.trips = action.payload
            console.log(state.trips)
        },
        newTrip: (state, action) => {
            state.trips.push(action.payload)
        },
        updateTrip: (state, action) => {
            const trip = state.trips.find(trip => trip.id === action.payload.id)
            trip.length_of_trip = action.payload.length_of_trip
            trip.review = action.payload.review
            trip.img_url = action.payload.img_url
        },
        deleteTrip: (state, action) => {
            // state.trips.filter(trip => trip.id !== action.payload.id);
            const updatedtrips = state.trips.filter(trip=>trip.id !== action.payload.id)
            state.trips = updatedtrips

        },
        addLikes: (state, action) => {
            const trip = state.trips.find(trip => trip.id === action.payload.id)
            trip.likes += 1
            return (console.log(trip.likes))
            
        }
    }
})
// actions
export const {showTripProfile, allTrips, newTrip, updateTrip, deleteTrip, addLikes} = tripSlice.actions

export default tripSlice.reducer;