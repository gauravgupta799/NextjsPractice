
function ArticleListByCategory({articles, category}){
    return (
        <div>
            <h1>Newa filtered By Category <i>{category}</i></h1><hr/>
            {articles?.map((article) =>{
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title}
                        </h2>
                        <p>{article.description}</p>
                        <hr />
                    </div>
                )
            })}

        </div>
    )
}

export default ArticleListByCategory;

export async function getServerSideProps(context){
    const {params} = context;
    const {category} = params;
    const res = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await res.json();

    return {
        props:{
            articles:data,
            category,
        },
    }
}