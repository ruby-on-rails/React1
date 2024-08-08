import React from "react"
import { useParams } from "react-router-dom"

export default function User(){
const {userId}= useParams();
    return (
        <>
        
        <div>
            {userId ? (
                <h2>User ID: {userId}</h2>
            ) : (
                <h2>User ID: Default Value</h2>
            )}
        </div>
        </>
    )
}