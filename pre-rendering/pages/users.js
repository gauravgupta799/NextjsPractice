import React from 'react'
import User from "../components/user.js"

const UsersList = ({users}) => {
  return (
    <>
    <h2>List of users</h2>
    {
        users.map(user => <User user={user}/>)
    }
    </>
  )
}

export default UsersList;

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return {
        props:{
            users:data,
        }
    }
}