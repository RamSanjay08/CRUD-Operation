import React, { useEffect, useState } from 'react'
import { Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import navStyle from "./style.module.css"

function Products() {

  let [apiData,setApiData] = useState([])
  useEffect(()=>{
    apiFun()
  },[])
  async function apiFun()
  {
    let {data} = await axios.get("http://localhost:3000/products")
    setApiData(data)
  }
    
  return (
    <div>
      <h1 style={{textAlign:"center",marginBlock:"2rem"}}>Products</h1>
          <table>
            <thead>
              <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Desccription</th>
              <th>Category</th>
              <th>Image</th>
              </tr>
            </thead>

            {
              apiData.map(({title,id,price,description,category,image},ind)=>{
                return <tbody key={ind}>
                        <tr>
                          <td>{id}</td>
                          <td>{title}</td>
                          <td>{price}</td>
                          <td>{description}</td>
                          <td>{category}</td>
                          <td><img width="100px" src={image} alt="" /></td>
                        </tr>
                      </tbody>
              })
            }
      
        </table>
        <Navbar navNames={{key1:"Add Product Page",key2:"Manage Product Page"}}
              navLinks={{url1:"addproducts",url2:"manageproducts"}}  navbarStyle={navStyle.prodNav}/>
          <Outlet/>
    </div>
  )
}

export default Products