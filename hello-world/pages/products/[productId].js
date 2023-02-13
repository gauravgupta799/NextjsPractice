import {useRouter} from "next/router"
const ProductDetail = () => {
    const router = useRouter();
    const prodId = router.query.productId
  return (
    <div>
      <h2>Details about product {prodId}</h2>
    </div>
  )
}

export default ProductDetail
