import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    usersList : [],
    isLoading : false,
    errors : [],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers :{
        setUsers : (state, action) =>{
            state.usersList = action.payload;
        },
        resetUsers: (state) =>{
            state.usersList = initialState.usersList;
        }
    }
})

export const {resetUsers, setUsers} = usersSlice.actions
export default usersSlice.reducer