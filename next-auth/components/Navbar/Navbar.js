import React from 'react';
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const {data:session, status } = useSession()
  console.log(session, status)

  return (
    <nav className="header">
      <h1 className="logo">
          <a href="/">NextAuth</a>
      </h1>
      <ul className="main-nav">
        <li>
            <Link href="/">
              Home
            </Link>
        </li>
      { status === "authenticated" && (
        <>
            <li>
                <Link href="/dashboard">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link href="/blog">
                  Blog 
                </Link>
            </li>
            <li>
                 <span>{session.user.name}</span>
            </li>
            <li>
                 <img src={session.user.image} alt="profileImg" style={{width:"30px", height:"30px",borderRadius:"50%"}} />
            </li>
            <li>
                <Link href="/api/auth/signout">
                  <span onClick={()=>{
                    e.preventDefault()
                    signOut()
                  }}>Sign Out</span>
                </Link>
            </li>
        </>
      )}
        {status === "unauthenticated" && (
            <li>
                <Link href="/api/auth/signin">
                  <span onClick={()=>{
                    e.preventDefault()
                    signIn('github')
                  }}>Signin</span>
                </Link>
            </li>
        )}
        {/* {status === "authenticated" && (
            <li>
                <Link href="/api/auth/signout">
                  <span onClick={()=>{
                    e.preventDefault()
                    signOut()
                  }}>Sign Out</span>
                </Link>
            </li>
        )} */}
    </ul>

    </nav>
  )
}

export default Navbar