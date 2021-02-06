import { createSlice } from "@reduxjs/toolkit"


const tripSlice = createSlice({
    name: "trip",
    initialState: {
        tripProfile: null,
    },
    reducers: {
        showTripProfile: (state, action)  => {
            state.tripProfile = action.payload
        }
    }
})
// actions
export const {showTripProfile} = tripSlice.actions

export default tripSlice.reducer;