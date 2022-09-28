import { useSelector} from 'react-redux'
import {setUsers} from './Users'
import Card from './Card'
import Getdata from './Getdata'

const User = () => {
    const {usersList} = useSelector((state)=> state.userall)
    Getdata(setUsers)
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