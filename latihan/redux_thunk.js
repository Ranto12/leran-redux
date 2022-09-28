import { applyMiddleware, createStore } from "redux"
import {ThunkMiddleware} from 'redux-thunk'

const initialState = {
    loading : false,
    users : [],
    error: ''
}

//define case 
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//case yang akan di gunakan pada reducer
const fetchUsersRequest = ()=>{
    return{
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSucces = users =>{
    return{
        type : FETCH_USERS_SUCCES,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type : FETCH_USERS_FAILURE,
        payload: error
    }
}

/// reducer 
const reducer = (state = initialState , action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST :
            return {
                ...state,
                loading : true
            }
        case FETCH_USERS_SUCCES :
            return {
                loading : false,
                users : action.payload,
                error : ''
            }
        case FETCH_USERS_FAILURE :
            return{
                loading: false,
                users : [],
                error : action.payload
            }
    }
}

const store = createStore(reducer, applyMiddleware(ThunkMiddleware))