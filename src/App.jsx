import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AllPosts from "./Pages/AllPosts";
import Create from "./Pages/Create";
import ShowPost from "./Pages/ShowPost";
import UpdatePost from "./Pages/UpdatePost";

export default function App(){

  return(
      <>
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Layout/>}>
                  <Route index element={<AllPosts/>}/>
                  <Route path="/create" element={<Create/>}/>
                  <Route path="/show/:id" element={<ShowPost/>}/>
                  <Route path="/update/:id" element={<UpdatePost/>}/>
               </Route>
           </Routes>
        </BrowserRouter>
      </>
  )
}