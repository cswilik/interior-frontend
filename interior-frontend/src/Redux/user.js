import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        currentUser: null,
        userProfile: null
    },
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        updatedUsers: (state, action) => {
            const user = state.users.find((user) => user.id === action.payload.id);
            // console.log(current(user))   
              // user.name = action.payload.name
            // user.bio = action.payload.bio
            // user.fav_park = action.payload.fav_park
        },
        showUserProfile: (state, action) => {
            state.userProfile = action.payload
        }
        
    }
})


// actions
export const {addUsers, setCurrentUser, updatedUsers, showUserProfile} = userSlice.actions

// reducer
export default userSlice.reducer;