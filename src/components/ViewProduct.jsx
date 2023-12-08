import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import navStyle from "./style.module.css"


function ViewProduct() {
    
    let [apiData,setApiData] = useState([])
    //! It will get the pid from manage products
    let {pid} = useParams()
    console.log(pid)

  useEffect(()=>{
    apiFun()
  },[])
  
  async function apiFun()
  {
    //! Getting the data using Product ID
    let {data} = await axios.get(`http://localhost:3000/products/${pid}`)
    console.log(data)
    setApiData(data)
  }
  return (
    <div>
      <h1 style={{textAlign:"center",marginBlock:"2rem"}}>View Products</h1>
          <table>
            <thead>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Desccription</th>
              <th>Category</th>
              <th>Image</th>
            </thead>
            <tbody>
            <tr>
                <td>{apiData.id}</td>
                <td>{apiData.title}</td>
                <td>{apiData.price}</td>
                <td>{apiData.description}</td>
                <td>{apiData.category}</td>
                <td><img style={{marginTop:"2rem"}} width="100px" src={apiData.image} alt="" /></td>
            </tr>
            </tbody>
        </table>
          <span style={{}}>
            <Navbar navNames={{key1:"Manage Product Page"}}
                  navLinks={{url1:"/products/manageproducts"}}  navbarStyle={navStyle.prodNav}/>
          </span>
    </div>
  )
}

export default ViewProduct
