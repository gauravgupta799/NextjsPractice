import {useRouter} from "next/router";

function Post({post}){
    const router= useRouter();
   const {id, title,body} = post;

   if(router.isFallback){
    return <h1>Loading....</h1>
   }

  return (
    <>
    <h2>
        {id} {title}
    </h2>
    <p>{body}</p>
    </>
  )
}

export default Post;

export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
    // const paths = data.map((post) => {
    //     return {
    //         params:{
    //             postId:`${post.id}`
    //         }
    //     }
    // })
    return {
        paths:[
            {
                params:{ postId: '1'}
            },
            {
                params:{ postId: '2'}
            },
            {
                params:{ postId: '3'}
            }
        ],
        fallback: false
    }
}

export async function getStaticProps(context){
    const {params} = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()

    return {
        props:{
            post:data,
        }
    }
}