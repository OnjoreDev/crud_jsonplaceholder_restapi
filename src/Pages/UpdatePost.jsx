import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function UpdatePost(){
    //obtain id from the route params 
    const{id} = useParams();
    
    //navigate back to home
    const navigate = useNavigate();

    //form object
    const[formData,setFormData] = useState({
        title:"",
        body:"",
    })

    async function getPost(){
        //send a get request to the api
       const res = await fetch(`/api/posts/${id}`)

       //save the response in a data constant
       const data = await res.json();

       if(res.ok){
        console.log(data);
        //populate fields with data from api
        setFormData({
            title:data.title,
            body:data.body
        })
       }


    }
     
    async function handleUpdate(e){
        e.preventDefault();
        const res = await fetch(`/api/posts/${id}`,{
            method:"PUT",
            body:JSON.stringify(formData)
        });

        const data = await res.json();

        if(res.ok){
            console.log(data);
            alert("Update Successful");
            navigate("/");
        }
    }
    
    //on mounted request the post with a specific id
    useEffect(()=>{
        getPost();
       
    },[])


    return(
        <>
         <h1 className="title">Update a  post</h1>
         <form onSubmit={handleUpdate}className="w-1/2 mx-auto space-y-6">
            <div>
                <input type="text" placeholder="Title" value={formData.title} onChange={(e)=>setFormData({...formData,title:e.target.value})}/>
            </div>

            <div>
                <textarea rows="6" placeholder="Body" value={formData.body} onChange={(e)=>setFormData({...formData,body:e.target.value})}></textarea>
            </div>

            <div>
                <button className="primary-btn">Update</button>
            </div>
         </form>
        </>
    )
}