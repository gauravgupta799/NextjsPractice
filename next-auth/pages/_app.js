import Navbar from '@/components/Navbar/Navbar.js'
import '@/styles/globals.css'
import "../components/Navbar/Navbar.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
