
function Post({post}){
   const {id, title,body} = post;
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