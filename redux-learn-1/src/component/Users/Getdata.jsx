import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Getdata = (setUsers) => {
    const dispatch = useDispatch()

    const getData =() =>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((result)=>{
          dispatch(setUsers(result.data))
        })
        .catch((error)=>{
          console.log(error);
        })
      }
  
      useEffect(() => {
          // getData()
          getData()
      },[])
}

export default Getdata