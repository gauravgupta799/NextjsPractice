
import {useRouter} from "next/router";

function Product({product}){
    const router = useRouter();

    if(router.isFallback){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>
                {product.id} {product.title} {product.price}
            </h2>
            <p>{product.description}</p>
            <hr/>
        </div>
    )
}

export default Product;


export function getStaticPaths(){
    return {
        paths:[
            {
                params:{ productId:'1'},
                params:{ productId:'2'},
                params:{ productId:'3'},             
            }
        ],
        fallback:true,
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const res = await fetch (`http://localhost:4000/products/${params.id}`);
    const data = await res.json();

    return {
        props:{
            product:data
        }
    }
}
