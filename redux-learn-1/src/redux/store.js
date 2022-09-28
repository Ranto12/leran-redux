import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../component/counterSlice'


export const store = configureStore({
    reducer: {
        counter : counterReducer,
    }
})
