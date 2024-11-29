'use client'
import React from "react";
import UserContext from "@/context/UserContext";
import { useState, useContext } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)
  
  
  const submithandler = (e) =>{
    e.preventDefault();
    setUser({userName, setUserName,password, setPassword})


  }

  return (
    <div className="">
      <h1 className="">Login</h1>
      <input type="text" placeholder="User Name"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      />
      <input type="password" placeholder="Password" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button className="" onClick={submithandler} >Submit</button>
    </div>
  );
}
