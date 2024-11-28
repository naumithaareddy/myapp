import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Content() {
  const [products,setProducts] = useState([])
  const url = "http://localhost:8080/"
  const getData= async () => {
    const response = await axios.get(url)
    setProducts(response.data)
  }
  const deleteProduct= async (id) => {
    await axios.delete(url+id)
    getData()
  }
  useEffect(()=>{
    getData()
  },[])
  // const products =[
  //   {name: "Product 1", price: "15k", url: "https://picsum.photos/id/237/200"},
  //   {name: "Product 2", price: "35k", url: "https://picsum.photos/id/2/200"},
  //   {name: "Product 3", price: "6", url: "https://picsum.photos/id/7/200"},
  //   {name: "Product 4", price: "16", url: "https://picsum.photos/id/4/200"}
  // ]
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      {products.map((value, index) => (
        <div style={{backgroundColor: 'cyan', margin: '10px', padding: '10px'}}> 
        <img src={value.url} />
          <h3>{value.name}</h3>
          <h4>${value.price}</h4>
          <h5>{value.desc}</h5>
          <button>Add to Cart</button><button onClick={()=>deleteProduct(value._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}