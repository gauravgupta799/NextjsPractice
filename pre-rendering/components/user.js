import React from 'react'

const User = ({user}) => {
  return (
    <div key ={user.id}>
        <h2>{user.name}: {user.email}</h2>
    </div>
  )
}

export default User