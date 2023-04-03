import React from 'react'
import {UncontrolledDropdown, DropdownMenu, DropdownToggle} from "reactstrap"

export default function Tenant() {
  return (
    <li className="mb-0 ms-3 list-group-item web-version">
    <UncontrolledDropdown>
      <DropdownToggle
        type="button"
        className="user-info"
        style={{background: "transparent", color:"#212529",  border: "none"}}
      >
         
       <h6 className='mx-3 font-size-18'>Kiracılar İçin</h6>
      </DropdownToggle>
      <DropdownMenu
        className="user-dropdown-menu  shadow border-0 mt-3"
     
      >
        <div className="px-1 py-2">
          <span
            className="dropdown-item font-size-16 font-weight-400 px-4 py-2 "
          >
           Ev Sahipleri İçin KiramKolay
          </span>
        </div>
        <div className="px-1 py-2">
          <span
            className="dropdown-item font-size-16 font-weight-400 px-4 py-2 "
          >
           Ev Sahibi Alanı
          </span>
        </div>
        <div className="px-1 py-2">
          <span
            className="dropdown-item font-size-16 font-weight-400 px-4 py-2 "
          >
           İlan Verme
          </span>
        </div>
      </DropdownMenu>
      
    </UncontrolledDropdown>
  </li>
  )
}
