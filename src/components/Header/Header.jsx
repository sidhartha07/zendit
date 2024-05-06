import React from 'react'
import {userIcon} from '../../assets/index'
import './Header.css'

const Header = () => {
  return (
    <div id='header' className='main-body'>
        <div className="content">
            <img className='profile-icon' src={userIcon} alt="" />
            <p className='name'>David Nowak</p>
        </div>
    </div>
  )
}

export default Header