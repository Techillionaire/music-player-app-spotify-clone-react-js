import React, { useState } from 'react'
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepBackward, FaStepForward } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'
import '../styles/musicPlayer.css'

const MusicPlayer = ({song, imgSrc}) => {

    const [isLove, setIsLove] = useState(false);
    const [ isPlaying, setIsPlaying ] = useState(false);

    const changeLoved = () => {
        setIsLove(!isLove)
    }

    const changePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

  return (
    <div className='musicPlayer'>
        <div className='songImage'>
            
        </div>

        <div className='songAttributes'>
            <audio src={song} preload='metadata' />

            <div className='top'>
                <div className='left'>
                    <div className='loved' onClick={changeLoved}>
                        {
                            isLove ? (
                                <i><FaHeart /></i>
                            ) : (
                                <i><FaRegHeart /></i>
                            )
                        }
                    </div>

                    <div className='download'>
                        <i><BsDownload /></i>
                    </div>
                </div>
                <div className='middle'>
                    <div className='back'>
                        <i><FaStepBackward /></i>
                        <i><FaBackward /></i>
                    </div>

                    <div className='playPause' onClick={changePlayPause}>
                        {
                            isPlaying ? (
                                <i><FaPause /></i>
                            ) : (
                                <i><FaPlay /></i>
                            )
                        }
                    </div>

                    <div className='forward'>
                        <i><FaForward /></i>
                        <i><FaStepForward /></i>
                    </div>
                </div>
                <div className='right'>
                    <i><FaShareAlt /></i>
                </div>
            </div>

            <div className='bottom'>

            </div>
        </div>
    </div>
  )
}

export {MusicPlayer}