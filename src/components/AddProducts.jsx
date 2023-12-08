import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProducts() {

  let [product,setProduct] = useState({id:"",title:"",price:"",description:"",category:"",image:"",rate:"",count:""})
  let navigateToManangeProducts = useNavigate()

  let subFun = async(e)=>{
    e.preventDefault()

    //* 1. post() to add the products in the API
    await axios.post(`http://localhost:3000/products`,product)
    setProduct({id:"",title:"",price:"",description:"",category:"",image:"",rate:"",count:""})

    //* 2. After submitting redirecting to manage products
    navigateToManangeProducts("/products/manageproducts")

  }

  let inpFun=({target:{name,value}})=>{
    setProduct({...product,[name]:value})
  }
    return (
    <div>
      <h1 style={{textAlign:"center",marginBlock:"2rem"}}>Add Products</h1>
      <form onSubmit={subFun}>
        <input type="text" value={product.id} onChange={inpFun} name="id" placeholder='Id' /><br />
        <input type="text" value={product.title} onChange={inpFun} name="title" placeholder='Title' /><br />
        <input type="text" value={product.price} onChange={inpFun} name="price" placeholder='Price' /><br />
        <input type="text" value={product.description} onChange={inpFun} name="description" placeholder='Description' /><br />
        <input type="text" value={product.category} onChange={inpFun} name="category" placeholder='Category' /><br/>
        <input type="url" value={product.image} onChange={inpFun} name="image" placeholder='Image Address' /><br />
        <button type="submit">Add</button>
      </form>

    </div>
  )
}

export default AddProducts
