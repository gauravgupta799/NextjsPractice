import Link from 'next/link'

const ProductList = ({prodId = 10}) => {
  return (
    <div style= {{marginLeft:"20px"}}>
      <Link href="/">Home</Link>
        <ul>
            <Link href="/products/1"><li>Product 1</li></Link>
            <Link href="/products/2"><li>Product 2</li></Link>
            <Link href="/products/3"><li>Product 3</li></Link>
            <Link href="/products/4" replace><li>Product 4</li></Link>
            <Link href={`/products/${prodId}`}><li>Product 10</li></Link>
        </ul>
    </div>
  )
}

export default ProductList