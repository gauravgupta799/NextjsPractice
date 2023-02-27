import React from 'react';
import Link from "next/link";
import {signIn, signOut} from "next-auth/react";

const Navbar = () => {
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
            <Link href="/api/auth/signin">
              <span onClick={()=>{
                e.preventDefault()
                signIn('github')
              }}>Signin</span>
            </Link>
        </li>
        <li>
            <Link href="/api/auth/signout">
              <span onClick={()=>{
                e.preventDefault()
                signOut()
              }}>Sign Out</span>
            </Link>
        </li>
    </ul>

    </nav>
  )
}

export default Navbar