import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../component/counterSlice'
import UsersAll from '../component/Users/Users'



export const store = configureStore({
    reducer: {
        counter : counterReducer,
        userall: UsersAll
    }
})
