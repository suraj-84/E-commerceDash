/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  // local host se direct login pe jane (prevent ke liye)
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth)
    {
navigate('/')
    }
  },[])
  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch('http://localhost:5000/login',{
        method: 'POST',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
   
     } );
result= await result.json();
console.log(result)
if(result.name){
    localStorage.setItem('user',JSON.stringify(result));
    navigate('/');

}else{
    alert('Please enter the correct details')
}


  };
  return (
    <div className="login">
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="btn" type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
