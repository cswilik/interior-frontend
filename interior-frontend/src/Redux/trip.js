import { createSlice } from "@reduxjs/toolkit"



const tripSlice = createSlice({
    name: "trip",
    initialState: {
        trips: [],
        tripProfile: null,
    },
    reducers: {
        allTrips: (state, action) => {
            state.trips = action.payload
            console.log(state.trips)
        },
        showTripProfile: (state, action)  => {
            state.tripProfile = action.payload
        },
        newTrip: (state, action) => {
            state.trips.push(action.payload)
        },
        updateTrip: (state, action) => {
            const trip = state.trips.find(trip => trip.id === action.payload.id)
           return ( trip.length_of_trip = action.payload.length_of_trip,
            trip.review = action.payload.review,
            trip.img_url = action.img_url)
        },
        deleteTrip: (state, action) => {
            // state.trips.filter(trip => trip.id !== action.payload.id);
            const updatedtrips = state.trips.filter(trip=>trip.id !== action.payload.id)
            state.trips = updatedtrips

        }
    }
})
// actions
export const {showTripProfile, allTrips, newTrip, updateTrip, deleteTrip} = tripSlice.actions

export default tripSlice.reducer;