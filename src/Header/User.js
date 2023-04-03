import React from 'react'
import {UncontrolledDropdown, DropdownMenu, DropdownToggle} from "reactstrap"
import profileImg from "../images/Path 2566.png"
import list from "../images/Path 3760.png"
import favori from "../images/Favori.png"
import logout from "../images/Group -1.png"
import notification from "../images/Group -2.png"
import agreement from "../images/Group -3.png"
import wallet from "../images/Group -4.png"
import profile from "../images/Group -5.png"
import appointment from "../images/home_black_-1.png"
import listGroup from "../images/Icon awesome-list-ul.png"
import chat from "../images/question_answer_black_24dp.png"
import setting from "../images/settings_black_24dp.png"
import hands from "../images/Group 3488 (1).png"

export default function User() {
  return (
    <li className="mb-0 ms-3 list-group-item">
      <UncontrolledDropdown>
        <DropdownToggle
          type="button"
          className="user-info"
          style={{background: "transparent", borderRadius: "25px", border: "1px solid #e8e8e8"}}
        >
            <div className='d-flex justify-content-center align-items-center'>
            <img
            src={list}
            alt='profile'
            className="list-icon me-2"
          />
            <img
            id="topbarRight-image"
            src={profileImg}
            alt='profile'
            className="profile-icon"
          />
            </div>
         
        </DropdownToggle>
        <DropdownMenu
          className="shadow border-0 mt-3 pb-0"
          end
        >
          <div className="px-1 py-2 d-flex align-items-center dropdown-item px-4">
          <img src={profile} className="dropdown-icon"/>
            <span
              className="font-size-16 font-weight-400 ps-3 py-2 "
            >
             Profilim
            </span>
          </div>
          <div className="px-1 py-2 d-flex align-items-center dropdown-item px-4">
          <img src={listGroup} className="dropdown-icon"/>
            <span
              className="font-size-16 font-weight-400 ps-3 py-2 "
            >
             Başvurularım
            </span>
          </div>
          <div className="px-1 py-2 d-flex align-items-center dropdown-item px-4">
            <img src={favori} className="dropdown-icon"/>
            <span
              className=" font-size-16 font-weight-400 ps-3 py-2 "
            >
             Favori İlanlarım
            </span>
          </div>
          <div className="px-1 py-2 d-flex align-items-center dropdown-item px-4">
          <img src={appointment} className="dropdown-icon"/>
            <span
              className=" font-size-16 font-weight-400 ps-3 py-2 "
            >
             Randevularım
            </span>
          </div>
          <div className="px-1 py-2 d-flex align-items-center dropdown-item px-4">
          <img src={wallet} className="dropdown-icon"/>
            <span
              className="font-size-16 font-weight-400 ps-3 py-2 "
            >
             Cüzdanım
            </span>
          </div>
          <div className="px-1 py-2 d-flex align-items-center dropdown-item px-4">
          <img src={chat} className="dropdown-icon"/>
            <span
              className=" font-size-16 font-weight-400 ps-3 py-2 "
            >
             Chat
            </span>
          </div>
          <div className="px-1 py-2 d-flex align-items-center dropdown-item px-4">
          <img src={agreement} className="dropdown-icon"/>
            <span
              className=" font-size-16 font-weight-400 ps-3 py-2 "
            >
             Sözleşmelerim
            </span>
          </div>
          <div className='dropdown-divider-div'>
          <hr className='dropdown-divider'></hr>
          </div>
         
          <div className="px-1 py-2 d-flex align-items-center dropdown-item px-4">
          <img src={notification} className="dropdown-icon"/>
            <span
              className="font-size-16 font-weight-400 ps-3 py-2 "
            >
             Bildirimler
            </span>
          </div>
          <div className="px-1 py-2 d-flex align-items-center dropdown-item px-4">
          <img src={setting} className="dropdown-icon"/>
            <span
              className=" font-size-16 font-weight-400 ps-3 py-2 "
            >
             Hesabım
            </span>
          </div>
          <div className="px-1 py-2 d-flex align-items-center dropdown-item px-4">
          <img src={logout} className="dropdown-icon"/>
            <span
              className=" font-size-16 font-weight-400 ps-3 py-2 "
            >
             Çıkış Yap
            </span>
          </div>
          <div className="px-1 py-2 ev-sahibi d-flex align-items-center dropdown-item px-4">
          <img src={hands} className="dropdown-icon"/>
            <span
              className="font-size-16 font-weight-400 ps-3 py-2 "
            >
             Ev Sahibi moduna geç
            </span>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    </li>
  )
}
