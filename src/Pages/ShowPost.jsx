import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

export default function ShowPost(){
     const {id} = useParams();
     const navigate = useNavigate();
    
     const[post,setPost] = useState(null)

     async function getPost(){
        const res = await fetch(`/api/posts/${id}`);

        const data = await res.json();

        if(res.ok){
            //console.log(data);
            setPost(data);
        }
     }

     async function handleDelete(e){
        e.preventDefault();
        const res = await fetch(`/api/posts/${id}`,
            {
                method:"DELETE"
            }
        );

        //const data = await res.json();

        if(res.ok){
            //console.log(data);
            navigate("/");
        }


     }

     useEffect(()=>{
        getPost();
     },[])

    return(
        <>
          
          {post ? (
            <div key={post.id} className="mt-4 p-4 border rounded-md border-dashed border-slate-400">
                <div className="mb-2 flex items-start justify-between">
                    <div>
                        <h2 className="font-bold text-2xl">{post.title}</h2>
                    </div>
                </div>
                <p className="mb-4">{post.body}</p>
                <div className="flex items-center justify-start gap-4">
                <Link to={`/update/${post.id}`} className="px-3 py-2 text-white rounded-lg text-sm bg-green-400">Update</Link>
                 <form onSubmit={handleDelete} >
                    <button className="px-3 py-2 text-white text-sm rounded-lg bg-red-400">Delete</button>
                 </form>
                 </div> 
            </div>
          ) : (<p>Post Not found</p>)}
        </>
    )
}