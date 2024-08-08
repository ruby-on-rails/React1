import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


export default function GitHub (){

    const data=  useLoaderData();
//   const [data,setData]= useState();
// useEffect(()=>{ 
  
//   setData(()=>da)
//     fetch("https://api.github.com/users/hiteshchoudhary").then((data)=>data.json()).then((data1)=>{
//         console.log(data1,"data1")
// setData(()=>data1);
//     })

// },[])
    return (
        <>
        <h1>followers :{data.followers}</h1>
        <br>
        </br>
       <img src={data.avatar_url} alt="" />
        </>
    )
}

export const gitHubinfoLoader=async()=>{
const response= await fetch("https://api.github.com/users/hiteshchoudhary");
return response.json();
}