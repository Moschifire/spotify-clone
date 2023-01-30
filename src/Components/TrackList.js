import React from 'react';
import { BsVolumeUpFill, BsMusicNoteList } from "react-icons/bs"
import { FaDesktop } from "react-icons/fa"

function TrackList() {
  return (
    <div className='trackList'>
        <div className="top">
            <img src="" alt="" />
            <p>
                Sample Name <span>Artiste</span>
            </p>
        </div>
        <div className="bottom">
            <i><BsVolumeUpFill /></i>
            <input type="range" />
            <i><BsMusicNoteList /></i>
            <i><FaDesktop /></i>
        </div>
    </div>
  )
}

export { TrackList }