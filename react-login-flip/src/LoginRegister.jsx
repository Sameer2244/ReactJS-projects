import React, { useEffect, useRef } from "react";
import "./loginregister.css";
export default function LoginRegister() {
  
  useEffect(()=>{
    document.title="Login and Registration"
  },[])
  
  const flipDiv=useRef(null)
  const toRegister=()=>{
    flipDiv.current.className="flipper flip-action"
  }
  const toLogin=()=>{
    flipDiv.current.className="flipper"
  }
  return (
    <div className="flipper" ref={flipDiv}>
      <div className="flippable">
        <Login toRegister={toRegister}/>
      </div>
      <div className="register flippable">
        <Register toLogin={toLogin}/>
      </div>
    </div>
  );
}


const Login = ({toRegister}) => {
  return (
    <div className="container">
      <h2 className="title">Welcome back</h2>
      <p className="title">Enter details to login..</p>
      <div className="input-container">
        <span><input placeholder="Enter email..." /></span>
      </div>
      <div className="input-container">
        <input placeholder="Enter password..." type="password" />
      </div>
      <button >Login</button>
      <p>Don't have an account? <strong onClick={toRegister}>Register</strong></p>
    </div>
  );
};


const Register = ({toLogin}) => {
  return (
    <div className="container">
      <h2 className="title">Create account</h2>
      <div className="input-container">
        <input placeholder="Enter username..." />
      </div>
      <div className="input-container">
        <input placeholder="Enter email..."/>
      </div>
      <div className="input-container">
        <input placeholder="Enter password..."type="password"  />
      </div>
      <button>Register</button>
      <p>Already have an account? 
        <strong onClick={toLogin}>Login</strong></p>
    </div>
  );
};