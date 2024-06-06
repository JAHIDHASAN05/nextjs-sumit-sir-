import React, { Suspense } from "react";
import Post from "../components/Post";


const fecthTitle= async()=>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
         resolve()
        },1000)
    })
    return 'Heavy page title'
}
const Heavy = async() => {
    const title= await fecthTitle()
  return (
    <>
      <h1>{title}</h1>

      <div>   
        <Suspense fallback ={<h1 className="bg-red-600">jahid loading..</h1>}>
         <Post/>
        </Suspense>
    </div>
     
    </>
  );
};

export default Heavy;
