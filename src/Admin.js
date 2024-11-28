import React, { useState } from 'react';
import axios from 'axios';

export default function Admin() {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [url, setUrl] = useState()
    const [desc, setDesc] = useState()
    const api = "http://localhost:8080/"
    const addProduct= async()=>{
        await axios.post(api,{name:name, price:price, url:url, desc:desc})
    }
  return (
    <div style={{backgroundColor: 'beige', margin: '10px', padding: '10px', justifyItems: 'center'}}>
        <p style={{textDecoration: 'underline'}}>Admin</p>
        <h5>Enter Product Name</h5>
       <p>
        <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
        </p>
        <br></br>
        <h5>Enter Price of the Product</h5>
       <p>
        <input type='text' onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price'></input>
        </p>
        <br></br>
        <h5>Enter URL of the Product</h5>
        <p>
        <input type='text' onChange={(e)=>setUrl(e.target.value)} placeholder='Enter URL'></input>
        </p>
        <br></br>
        <h5>Enter Description for the Product</h5>
        <p>
        <input type='text' onChange={(e)=>setDesc(e.target.value)} placeholder='Enter Description'></input>
        </p>
       <button onClick={addProduct}>Save</button>
    </div>
  );
}