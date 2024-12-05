import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Create(){
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        title:"",
        body:"",
    });

    //handle errors

    async function handleCreate(e){
        e.preventDefault();
        // console.log(formData);
        const res = await fetch("/api/posts",{
            method:"POST",
            body:JSON.stringify(formData)
        });

        const data = await res.json();
         
        if(res.ok){
            console.log(data);
            navigate("/");
        }

        }



    return(
        <>
         <h1 className="title">Create a new post</h1>
         <form onSubmit={handleCreate} className="w-1/2 mx-auto space-y-6">
            <div>
                <input type="text" placeholder="Title" value={formData.title} onChange={(e)=>setFormData({...formData,title:e.target.value})}/>
            </div>

            <div>
                <textarea rows="6" placeholder="Body" value={formData.body} onChange={(e)=>setFormData({...formData,body:e.target.value})}></textarea>
            </div>

            <div>
                <button className="primary-btn">Create</button>
            </div>
         </form>
        </>
    )
}