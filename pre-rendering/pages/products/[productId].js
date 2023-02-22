
import {useRouter} from "next/router";

function Product({product}){
    const router = useRouter();

    if(router.isFallback){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>
                {product.id}&nbsp;
                 {product.title} &nbsp;&nbsp;
                 {product.price}
            </h2>
            <h4>{product.description}</h4>
            <hr/>
        </div>
    )
}

export default Product;


export async function getStaticPaths(){
    return {
        paths:[
            {
                params:{ productId:'1'},             
            }
        ],
        fallback:true,
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const res = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await res.json();

    return {
        props:{
            product:data
        }
    }
}
