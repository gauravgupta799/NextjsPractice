

const NewsArticlesList = ({ articles}) => {
  return (
    <div>
        <h1>News Articles List</h1> 
        { articles?.map(article=>{
            return(
                <h3>
                    {article.id} | {article.title}  |  {article.category}
                </h3>
            )
        })}
    </div>
  )
}

export default NewsArticlesList;

export async function getServerSideProps(){
    const res = await fetch('http://localhost:4000/news');
    const data = await res.json();
    // console.log(data)

    return {
        props:{
            articles:data
        }
    }
}