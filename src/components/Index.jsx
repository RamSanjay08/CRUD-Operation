import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import SignIn from './SignIn'
import SignUp from './SignUp'
import AddProducts from './AddProducts'
import ManageProducts from './ManageProducts'
import Navbar from './Navbar'
import ViewProduct from './ViewProduct'
import UpdateProduct from './UpdateProduct'
import navStyle from "./style.module.css"

function Index() {
  return (
    <BrowserRouter>
    <Navbar navNames={{key1:"Home",key2:"Products",key3:"Sign-In",key4:"Sign-Up"}} 
    navLinks={{url1:"/",url2:"/products",url3:"/signin",url4:"/signup"}} navbarStyle={navStyle.homeNav}/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
                <Route path="/products/addproducts" element={<AddProducts/>}/>

                <Route path="/products/manageproducts" element={<ManageProducts/>}/>

                <Route path='/products/manageproducts/viewproduct/:pid' element={<ViewProduct/>}/>
                {/* <Route path='/products/manageproducts/viewproduct/1' element={<ViewProduct/>}/> */}
                <Route path='/products/manageproducts/updateproduct/:pid' element={<UpdateProduct/>}/>
 
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default Index