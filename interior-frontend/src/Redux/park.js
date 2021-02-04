import { createSlice } from "@reduxjs/toolkit"



const parkSlice = createSlice({
    name: "park",
    initialState: {
        parks: []
    },
    reducers: {
        addParks: (state, action) => {
            // payload= [park, park]
            state.parks = action.payload
        }
    }
})

// actions
export const {addParks} = parkSlice.actions

// reducer
export default parkSlice.reducer