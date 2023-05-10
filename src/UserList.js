import React, { useEffect, useState } from 'react'

import axios from "axios"
function UserList() {
    const [users, setUsers]= useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=> {
            setUsers(res.data)
        }
            
            )
        .catch(err=>{
            console.log(err)
        })
    })
  return (
    <div >
        <div className='container'>
          <h1><marquee className="blink"> list of usernames:</marquee> </h1>
        <ul className ='listUsers'>
           {users.map(user => (
            <li key={user.id} className='uniqueUser'> {user.name} : {user.username}</li>
           ))}
        </ul>
        </div>
    </div>
  )
}

export default UserList