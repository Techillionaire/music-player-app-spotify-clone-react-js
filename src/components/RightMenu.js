import React from 'react'
import '../styles/rightmenu.css'
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from 'react-icons/fa'

const RightMenu = () => {
  return (
    <div className='rightMenu'>
      <div className='goPro'>
        <i>
          <FaCrown />
          <p>Go <span>Pro</span></p>
        </i>
        <i>
          <FaBell />
        </i>
        <i>
          <FaRegHeart />
        </i>
      </div>

      <div className='profile'>
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>

        <div className='profileImage'>
          <img src='https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmask.jpg?alt=media&token=22f0d7be-74b8-4c0d-849d-b777370e9559' alt='' />
        </div>
      </div>
        
    </div>
  )
}

export {RightMenu}