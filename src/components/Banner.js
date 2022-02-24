import React from 'react'
import {FaCheck, FaHeadphones, FaEllipsisH} from 'react-icons/fa'


const Banner = () => {
  return (
    <div className='banner'>
        <img className='bannerImg' src='https://raw.githubusercontent.com/Vetrivel-VP/spotify-clone/master/src/img/artist.jpg' alt='bannerImg' />

        <div className='content'>
            <div className='breadCrumb'>
                <p>Home <span>/ Afrobeats</span></p>
                <i><FaEllipsisH  /></i>
            </div>

            <div className='artist'>
                <div className='left'>
                    <div className='name'>
                        <h2>Big Wiz</h2>
                        <img src='https://raw.githubusercontent.com/Vetrivel-VP/spotify-clone/master/src/img/check.png' alt='checkImg' />
                    </div>

                    <p><i><FaHeadphones /></i> 51,184,1811 <span>Monthly listeners</span></p>
                </div>

                <div className='right'>
                    <a href='https://www.google.com'>Play</a>
                    <a href='https://www.google.com'>
                        <i><FaCheck /></i>
                        Following
                    </a>
                </div>
            </div>
        </div>

        <div className='bottomLayer'></div>
    </div>
  )
}

export default Banner