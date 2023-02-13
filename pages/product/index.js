import Link from "next/link"

function ProductList({productId = 100}){
    return <>
    <h1><Link href={`/product/${productId}`}>Product 100</Link></h1>
    <h2><Link href='/'>Home</Link></h2>
    <h1>Product 1</h1>
    <h1>Product 2</h1>
    <h1>Product 3</h1>
    </>
}

export default ProductList