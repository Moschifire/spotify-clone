import React from 'react'
import Artist from "../img/artist.jpeg";
import Check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa"

function Banner() {
  return (
    <div className='banner'>
        <img src={Artist} alt="" className='bannerImg' />

        <div className="content">
            <div className="breadCrumb">
                <p>Home <span>/Popular Artiste</span></p>
                <i><FaEllipsisH /></i>
            </div>
            <div className="artist">
                <div className="left">
                    <div className="name">
                        <h2>Olamide</h2>
                        <img src={Check} alt="" />
                    </div>
                    <p><i><FaHeadphones /></i> 5,000,230 <span>Monthly Listeners</span></p>
                </div>
                <div className="right">
                    <a href="#">Play</a>
                    <a href="#"><i><FaCheck /></i> Following</a>
                </div>
            </div>
        </div>
        <div className="bottomLayer"></div>
    </div>
  )
}

export { Banner }