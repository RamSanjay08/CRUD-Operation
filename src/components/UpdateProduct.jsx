import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateProduct() {
    let [product,setProduct] = useState({id:"",title:"",price:"",description:"",category:"",image:"",rate:"",count:""})
    //! It will get the pid from manage products
    let {pid} = useParams()
    let navigateToManangeProducts=useNavigate()

    //! Get the product using Product ID
    let getProducts=async()=>{
        try{
            let {data} = await axios.get(`http://localhost:3000/products/${pid}`)
            setProduct(data)
            console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getProducts()
    },[])

    let subFun = async(e)=>{
        e.preventDefault()
        try{
            let {data} = await axios.put(`http://localhost:3000/products/${pid}`,product)
            setProduct(data)
            navigateToManangeProducts("/products/manageproducts")
        }
        catch(err){
            console.log(err)
        } 
      }

      let inpFun=({target:{name,value}})=>{
        setProduct({...product,[name]:value})
      }

  return (
    <div>
      <h1 style={{textAlign:"center",marginBlock:"2rem"}}>Update Product</h1>
    <div>
      <form onSubmit={subFun}>
        <input type="text" value={product.id} onChange={inpFun} name="id" placeholder='Id' /><br />
        <input type="text" value={product.title} onChange={inpFun} name="title" placeholder='Title' /><br />
        <input type="text" value={product.price} onChange={inpFun} name="price" placeholder='Price' /><br />
        <input type="text" value={product.description} onChange={inpFun} name="description" placeholder='Description' /><br />
        <input type="text" value={product.category} onChange={inpFun} name="category" placeholder='Category' /><br/>
        <button type="submit">Update</button>
      </form>

    </div>

    </div>
    )
  
}

export default UpdateProduct
