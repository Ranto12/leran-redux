import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect, useCallback} from 'react'
import {setUsers} from './Users'
import axios from 'axios'

const User = () => {
  const {usersList} = useSelector((state)=> state.userall)
    const dispatch = useDispatch()
    const getData = useCallback(async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/user')
            dispatch(setUsers(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getData()
    },[])

    console.log( usersList);

  return (
    <div>User</div>
  )
}

export default User