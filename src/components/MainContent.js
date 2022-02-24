import React, { useEffect } from 'react'
import { FaUsers } from 'react-icons/fa'
import '../styles/maincontent.css'
import { AudioList } from './AudioList'
import Banner from './Banner'

const MainContent = () => {

  useEffect(() => {
    const allLi = document
    .querySelector(".menuList")
    .querySelectorAll('li');

    function changeMenuActive() {
        allLi.forEach((n) => n.classList.remove('active'));
        this.classList.add('active');
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className='mainContent'>
      <Banner />

      <div className='menuList'>
        <ul> 
          <li>
            <a href='https://www.google.com'>Popular</a>
          </li>
          <li>
            <a href='https://www.google.com'>Albums</a>
          </li>
          <li>
            <a href='https://www.google.com'>Songs</a>
          </li>
          <li>
            <a href='https://www.google.com'>Fans</a>
          </li>
          <li>
            <a href='https://www.google.com'>About</a>
          </li>
        </ul>

        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>

      <AudioList />
    </div>
  )
}

export {MainContent}