import { configureStore} from "@reduxjs/toolkit"
import parkReducer from './park'
import userReducer from './user'
import tripReducer from './trip'

const store = configureStore({
    reducer: {
        parks: parkReducer,
        users: userReducer,
        trips: tripReducer
    }
})

export default store 