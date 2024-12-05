import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllPosts(){

    const [posts,setPosts] = useState([]);

    async function getAllPosts(){
       const res = await fetch("/api/posts");

       const data = await res.json();

       if(res.ok){
        //console.log(data);
        setPosts(data);
       }
    }

    useEffect(()=>{
       getAllPosts();
    },[])

    return(
        <>
          <h1 className="title">All Posts</h1>
          {posts.length > 0 ? (posts.map((post)=>(
            <div key={post.id} className="mb-4 p-4 border rounded-md border-dashed border-blue-300">
                <div className="mb-2 flex items-start justify-between">
                    <div>
                        <h2 className="font-bold text-2xl">{post.title}</h2>
                    </div>
                </div>
                <p className="mb-4">{post.body}</p>
                <Link to={`/show/${post.id}`} className=" text-sm text-slate-100 rounded-md bg-black px-3 py-1">Read More</Link>
            </div>
          ))) : (<p>Post Not found</p>)}
        </>
    )
}