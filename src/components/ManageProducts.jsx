import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ManageProducts() {
  let [apidata, setapidata] = useState([]);
  let navigate = useNavigate()

  //! 1. Mapping the data
  useEffect(() => {
    apiFun();
  }, []);
  
  let apiFun=async ()=>{
    let { data } = await axios.get("http://localhost:3000/products");
    setapidata(data);
  }

  //! Redirect to View products page or component and sending the Product ID
  let viewFun = (pid)=>{
    console.log(pid)
    navigate(`/products/manageproducts/viewproduct/${pid}`)
    // navigate(`/products/manageproducts/viewproduct/1`)
  }

  //! Redirect to Update products page or component and sending the Product ID
  let updateProdFun = (pid)=>{
    navigate(`/products/manageproducts/updateproduct/${pid}`)
  }

  //! Deleting the data
  let delProFun = async(pid)=>{
    await axios.delete(`http://localhost:3000/products/${pid}`);
    // window.location.reload()
    apiFun()
  }

  let st = {
      textAlign:"justify",
      padding: "2rem"
  }

  return (
    <div>
      <h1 style={{textAlign:"center",marginBlock:"2rem"}}>Manage Products Page</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>View</th>
          <th>Update</th>
          <th>Delete</th>
        </thead>

{/* Mapping the data */}

        {apidata.map(({ id, title, price }) => {
          return (
            <tbody>
              <td style={{textAlign:"center"}}>{id}</td>
              <td style={st}>{title}</td>
              <td style={st}>{price}</td>

              {/* View Button */}

              <td>
                <button onClick={()=>{
                  viewFun(id)
                }}>View</button>
              </td>

              {/* Update Button */}

              <td style={st}>
                <button onClick={()=>{
                  updateProdFun(id)
                }}>Update</button>
              </td>

              {/* Delete Button */}

              <td style={st}>
                <button onClick={()=>{
                  delProFun(id)
                }}>Delete</button>
              </td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ManageProducts;
