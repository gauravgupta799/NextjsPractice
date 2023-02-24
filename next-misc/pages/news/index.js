import React from 'react'

const News = ({data}) => {
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default News

export async function getStaticProps(context){
    console.log("Running getStaticProps", context.previewData)
    return{
        props:{
            data: context.preview 
            ? 'List of draft articles' 
            : 'List of published articles',
        },
    }
}