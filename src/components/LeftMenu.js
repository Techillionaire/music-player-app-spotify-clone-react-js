import React from 'react'
import '../styles/leftmenu.css';
import { RiNeteaseCloudMusicLine } from "react-icons/ri"; 
import { FaEllipsisH } from "react-icons/fa";
import { BiSearch } from 'react-icons/bi'
import { Menu } from './Menu';
import { MenuList } from './MenuList';
import { MenuPlayList } from './MenuPlayList';
import { TrackList } from './TrackList';
import { PlayList } from './PlayList';

const LeftMenu = () => {
  return (
    <div className='leftMenu'>
        <div className='logoContainer'>
            <i><RiNeteaseCloudMusicLine /></i>
            <h2>Gbedufy</h2>
            <i><FaEllipsisH /></i> 
        </div>

        <div className='searchBox'>
            <input type='text' placeholder='Search...' />
            <i className='searchIcon'><BiSearch /></i>
        </div>

        <Menu title={"Menu"} menuObject={MenuList}/>

        <MenuPlayList playListObject={PlayList}/>

        <TrackList />
    </div>
  )
}

export {LeftMenu}