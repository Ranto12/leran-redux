import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect, useCallback} from 'react'
import {setUsers} from './Users'
import axios from 'axios'
import Card from './Card'

const User = () => {
  const {usersList} = useSelector((state)=> state.userall)
    const dispatch = useDispatch()
    const getData = useCallback(async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(setUsers(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getData()
    },[])

  return (
    <div>
      {usersList && usersList.map((el, i)=>{
        return(
          <Card key={i} id={i}/>
        )
      })}
    </div>
  )
}

export default User