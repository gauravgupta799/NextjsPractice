import React, {useState, useEffect} from 'react';
import {getSession,useSession} from "next-auth/react";

const Blog = ({data}) => {
 const {session} = useSession();
//  console.log(session)
  return (
    <div>
      <h1>Blogs Page: {data}</h1>
    </div>
  )
}

export default Blog

export async function getServerSideProps(context){
  const session = await getSession(context);
  if(!session){
    return {
      redirect:{
        destination:"/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent:false,
      }
    }
  }
 
  return {
    props:{
      session,
      data: session ? "List of 100 personalized blogs":"List of free blogs"
    }
  }
}