import React from 'react'
import {UncontrolledDropdown, DropdownMenu, DropdownToggle} from "reactstrap"
import list from "../images/Path 3760.png"

export default function MobileNavbar() {
  return (
    <div>
        <li className="mb-0 list-group-item mobile-version">
    <UncontrolledDropdown>
      <DropdownToggle
        type="button"
        className="user-info"
        style={{background: "transparent", color:"#212529",  border: "none"}}
      >
         
       <img src={list} className="navbar-menu" />
      </DropdownToggle>
      <DropdownMenu
        className="user-dropdown-menu  shadow border-0 mt-3"
     
      >
        <div className="px-1 py-2">
          <span
            className="dropdown-item font-size-16 font-weight-400 px-4 py-2 "
          >
           Kiracılar İçin
          </span>
        </div>
        <div className="px-1 py-2">
          <span
            className="dropdown-item font-size-16 font-weight-400 px-4 py-2 "
          >
           Ev Sahipleri İçin
          </span>
        </div>
        <div className="px-1 py-2">
          <span
            className="dropdown-item font-size-16 font-weight-400 px-4 py-2 "
          >
           Kiralama Rehberi
          </span>
        </div>
        <div className="px-1 py-2">
          <span
            className="dropdown-item font-size-16 font-weight-400 px-4 py-2 "
          >
           Yardım
          </span>
        </div>
      </DropdownMenu>
      
    </UncontrolledDropdown>
  </li>
    </div>
  )
}
