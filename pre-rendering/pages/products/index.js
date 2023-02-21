import Link from "next/link"

function ProductList({products}){
    return(
        <div>
        <h1>Products List</h1>
        {products.map(product=>{
            return(
                <div key ={product.id}>
                <Link href = {`products/${product.id}`} passHref>
                    <h2>
                    {product.id}
                    {product.title}
                    {product.price}
                    </h2><hr/>
                </Link>
                </div>
            )
        })}
        </div>
    )
}

export default ProductList;

export async function getStaticProps(){
    const res = await fetch("http://localhost:4000/products");
    const data = await res.json();

    return {
        props:{
            products:data,
        }
    }
}
