import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

const Card = ({id}) => {
    //cara memanggil state dari redux yaitu dengan menggunakan useSelector dan state kemudian meretunr sebuah state pada store dan initial state pada reducer
    const userlist = useSelector((state)=> state.userall.usersList)

    //mengambil nilai dengan mengunakan use memo dan mengambil nilai dari userlist dengan mengunakan id
    const user = useMemo(() => {
        return userlist[id]
    }, [userlist, id])

    console.log(user);
  return (
    <div>
        <div style={{height: '100px', backgroundColor: 'red', width: '100px', marginBottom: '10px', display: 'flex'}}>

        </div>
    </div>
  )
}

export default Card