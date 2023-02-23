import React from 'react'

const Signup = () => {
  return (
    <div className='signup-content'>
        <h1>Signup Page</h1>
    </div>
  )
}

export default Signup

Signup.getLayout = function PageLayout(page){
    return(
        <>
            {page}
        </>
    )
}