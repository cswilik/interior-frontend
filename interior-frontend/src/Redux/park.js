import { createSlice } from "@reduxjs/toolkit"



const parkSlice = createSlice({
    name: "park",
    initialState: {
        parks: [],
        parkProfile: null
    },
    reducers: {
        addParks: (state, action) => {
            // payload= [park, park]
            state.parks = action.payload
        },
        setParkProfile: (state, action) => {
            state.parkProfile = action.payload
        }
    }
})

// actions
export const {addParks, setParkProfile} = parkSlice.actions

// reducer
export default parkSlice.reducer