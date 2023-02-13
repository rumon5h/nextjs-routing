import Link from "next/link";
import { useRouter } from "next/router";

function Home(){
    const router = useRouter();

    const handleClick = () => {
        console.log("Placeing your order");
        router.push('/product')
    }
    return <div>
        <h1><Link href='/product'>Product page</Link></h1>
        <h1>This is home page.</h1>
        <Link href='/blog'>
        Blog
        </Link>
        <button onClick={handleClick}>Place order</button>
    </div>
}

export default Home;