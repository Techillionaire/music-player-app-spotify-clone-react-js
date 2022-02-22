import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'

const MenuPlayList = ({ playListObject }) => {
  return (
    <div className='playListContainer'>
        <div className='nameContainer'>
            <p>Playlist</p>
            <i><FaPlus /></i>
        </div>

        <div className='playListScroll'>

            {
                playListObject && playListObject.map((list) => (
                    <div className='playlist'>
                        <i className='list'><BsMusicNoteList /></i>
                        
                        <p key={list.id}>{list.name}</p>
                        
                        <i className='trash'><BsTrash /></i>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export {MenuPlayList} 