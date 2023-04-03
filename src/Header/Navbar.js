import React from 'react'
import logo from "../images/logo.svg"
import MobileNavbar from './MobileNavbar'
import Tenant from './Tenant'
import User from './User'

export default function Navbar() {
  return (
    <>
    <div className='navbar d-flex justify-content-between px-4 '>
      <div className='d-flex align-items-center'>

    <MobileNavbar/>
    <img className='logo' src={logo} alt="no img"></img>
    <span className='font-size-30 font-weight-500 logo-title ms-1 web-version'>güvenlekirala</span>
      </div>
   
    <div className='d-flex align-items-center '>
 
        {/* <h6 className='mx-3 font-size-18'>Kiracılar İçin</h6> */}
        <Tenant/>
        <h6 className='mx-3 font-size-18 web-version'>Ev Sahipleri İçin</h6>
        <h6 className='mx-3 font-size-18 web-version'>Kiralama Rehberi</h6>
        <h6 className='mx-3 font-size-18 web-version'>Yardım</h6>
        <User/>
   
    </div>
    </div>
    
   
    </>
  )
}
