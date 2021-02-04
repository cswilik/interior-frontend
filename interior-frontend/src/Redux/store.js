import { configureStore} from "@reduxjs/toolkit"
import parkReducer from './park'
import userReducer from './user'

const store = configureStore({
    reducer: {
        parks: parkReducer,
        users: userReducer
    }
})

export default store 