import React from 'react'

export default function SignUp() {
  return (
    <div style={{backgroundColor: 'beige', margin: '10px', padding: '10px', justifyItems: 'center'}}>
        <p style={{textDecoration: 'underline'}}>SignUp</p>
        <p>
            <input type="text" placeholder='Enter Name'></input>
        </p>
        <p>
            <input type="text" placeholder="Enter email"></input>
        </p>
        <p>
            Date of Birth <input type="date"></input>
        </p>
        <p>
            Location:
            <br />
            <input type="radio" name="location"></input>Hyderabad
            <br />
            <input type="radio" name="location"></input>Bengaluru
            <br />
            <input type="radio" name="location"></input>Chennai
            <br />
            <input type="radio" name="location"></input>Kolkata
            <br />
            <input type="radio" name="location"></input>Delhi
            <br />
            <input type="radio" name="location"></input>Gujarat
        </p>
        <button>SignUp</button>
        <hr></hr>
        <p>
            Already a member?
            <a href='./Login'> Login </a>
            here
        </p>
    </div>
  )
}