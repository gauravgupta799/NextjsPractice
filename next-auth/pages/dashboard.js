import React, {useState, useEffect} from 'react';
import {getSession, signIn} from "next-auth/react";

const Dashboard = () => {
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const securePage = async() => {
      const session = await getSession();
      if(!session) {
        signIn();
      }else{
        setLoading(false);
      }
    }
    securePage();
  },[])

  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <div>
        <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard