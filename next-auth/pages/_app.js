import Navbar from '@/components/Navbar/Navbar.js'
import '@/styles/globals.css'
import "../components/Navbar/Navbar.css";
import {  SessionProvider } from 'next-auth/react';


export default function App({ Component, pageProps }) {
  return (
    <>
    <SessionProvider session={pageProps.session}>
      <Navbar/>
      <Component {...pageProps.session} />
    </SessionProvider>
    </>
  )
}
