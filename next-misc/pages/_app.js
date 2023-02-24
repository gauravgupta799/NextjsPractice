import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import Head from 'next/head'
import '@/styles/globals.css'
import '@/styles/layout.css'


export default function App({ Component, pageProps }) {
  
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
 
  return (
    <>
      <Head>
        <title>Codeverse</title>
        <meta name="description" content="Awesome Youtube channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
