import Link from "next/link"

export default function Blog() {
    return (
        <div>
            <h1>Welcome to Blogs</h1> 
            <Link rel="stylesheet" href="/blogs/first">First Blog</Link>
            <br />
            <Link rel="stylesheet" href="/blogs/second">Second Blog</Link>
        </div>
    );
  }