import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Welcome to Home</h1> 
            <Link rel="stylesheet" href="/about">About</Link>
            <br />
            <Link rel="stylesheet" href="/profile">Profile</Link>
            <br />
            <Link rel="stylesheet" href="/blogs">Blogs</Link>
        </div>
    );
  }