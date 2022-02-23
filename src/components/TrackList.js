import React from 'react'
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa'


const TrackList = () => {
  return (
    <div className='tracklist'>
      <div className='top'>
        <img src='https://raw.githubusercontent.com/Vetrivel-VP/spotify-clone/master/src/img/track.png' alt='trackImg' />
        <p className='trackName'>Essence<span className='trackSpan'>Wizkid</span></p>
      </div>

      <div className='bottom'>
        <i><BsFillVolumeUpFill /></i>
        <input type="range"  />
        <i><BsMusicNoteList /></i>
        <i><FaDesktop /></i>
      </div>
    </div>
  )
}

export {TrackList}