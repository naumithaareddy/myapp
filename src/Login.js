import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const Navigate = useNavigate();
    const handleSignUp = () => {
        Navigate("/signup");
    };
  return (
    <div style={{backgroundColor: 'beige', margin: '10px', padding: '10px', justifyItems: 'center'}}>
       <p>
        <input type='text' placeholder='Enter the Email Address'></input>
        </p>
       <p>
        <input type='password' placeholder='Enter Password'></input>
        </p>
       <button>Login</button>
       <hr></hr>
       <p>New? <button onClick={handleSignUp}>Create Account</button></p>
    </div>
  );
}