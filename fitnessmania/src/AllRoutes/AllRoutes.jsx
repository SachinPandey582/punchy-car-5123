import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from '../Forms/Form'
import Form1 from '../Forms/Form1'
import Navbar1 from '../Navbar/Navbar1'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import MyHome from '../Pages/MyHome'
import PrivateContext from '../PrivateContext/PrivateContext'

const AllRoutes = () => {  
  return (
    <div>
        <Routes>
        <Route path='/' element={ <PrivateContext><Home/></PrivateContext>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/popup" element={<Form/>}></Route>
        <Route path="/form1" element={<Form1/>}></Route>
        <Route path="/navbar1" element={<Navbar1/>}></Route>
        <Route path="/myhome" element={<MyHome/>}></Route>
        
        </Routes>
    </div>
  )
}

export default AllRoutes