import {useRouter} from "next/router";

const ProductsDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
    return (
      <div>
          <h1> Details About product {productId}. </h1>
      </div>
    )
  }
  
  export default  ProductsDetails