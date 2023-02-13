import Link from "next/link";

const { useRouter } = require("next/router")

function ProductDetails(){
    const router = useRouter();
    const {productId} = router.query;

    return <>
    
    <h1>This is details about product number {productId}</h1>
    <h2><Link href='/product'>Product</Link></h2>
    </>
}

export default ProductDetails