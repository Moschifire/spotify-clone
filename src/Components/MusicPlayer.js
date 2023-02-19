import React, { useState, useRef, useEffect } from 'react'
import "../Styles/MusicPlayer.css"
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepBackward, FaStepForward } from "react-icons/fa"
import { BsDownload } from "react-icons/bs"

function MusicPlayer({ song, imgSrc }) {

  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const seconds = audioPlayer.current.duration;

    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);
  

  const audioPlayer = useRef(); // For audio tag
  const range = useRef(); // For range

  const changeLoved = () => {
    setLoved(!isLove);
  };
  const changePlayPause = () => {
    
    const prevValue = isPlaying
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }

    setPlaying(!prevValue);
  }

  return (
    <div className='musicPlayer'>
      <div className="songImage">
        <img src={imgSrc} alt="" />
      </div>
      <div className="songAttributes">
        <audio src={song} preload = "metadata" ref={audioPlayer} />
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeLoved}>{isLove ? <i><FaRegHeart /></i> : <i><FaHeart /></i>}</div>
            <div className="download"><i><BsDownload /></i></div>
          </div>
          <div className="middle">
            <div className="back">
              <i><FaStepBackward /></i>
              <i><FaBackward /></i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? <i><FaPause /></i> : <i><FaPlay /></i>}
            </div>
            <div className="forward">
              <i><FaForward /></i>
              <i><FaStepForward /></i>
            </div>
          </div>
          <div className="right"><i><FaShareAlt /></i></div>
        </div>
        <div className="bottom">
          <div className="currentTime">00:00</div>
          <input type="range" className="range" ref={range} />
          <div className="duration">{duration}</div>
        </div>
      </div>
    </div>
  )
}

export { MusicPlayer }