import Link from "next/link"
export default function ProductList() {
    return (
        <div>
        <h1>Welcome to Products</h1> 
        <Link rel="stylesheet" href="products/1">1</Link>
        <br></br>
        <Link rel="stylesheet" href="products/2 ">2</Link>
        <br></br>
        <Link rel="stylesheet" href="products/3 ">3</Link>
        </div>
    );
  }