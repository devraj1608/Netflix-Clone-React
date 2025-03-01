import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import Serch_icon from '../../assets/images/search_icon.png'
import bell_icon from '../../assets/images/bell_icon.png'
import profile_img from '../../assets/images/profile_img.png'
import caret_icon from '../../assets/images/caret_icon.png'
import { logout } from '../../firebase'
function Navbar() {

  const navRaf = useRef();
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>=80){
        navRaf.current.classList.add("nav-dark")
      }
      else{
        navRaf.current.classList.remove("nav-dark")
      }
    })
  },[])

  return (
    <div ref={navRaf} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Show</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">New & Popular</a></li>
          <li><a href="#">My List</a></li>
          <li><a href="#">Browse by Language</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={Serch_icon} alt="" className='icons' />
        <p>Childern</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
        <img src={profile_img} alt="" className='profile' />
        <img src={caret_icon} alt="" className='' />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out Of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
