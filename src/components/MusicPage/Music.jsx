import React from "react";
import classes from './Music.module.css';
import ReactAudioPlayer from 'react-audio-player';
import song2 from '../../melodies/He_man.mp3';
import song1 from '../../melodies/Rick-Astley-Never-Gonna-Give-You-Up.m4a'

const Music = () => {
  return (
    <div className={classes.music}>
      Music
      <div>
        <div>
          <ReactAudioPlayer
            src={song1}
            volume={0.1}
            autoPlay
            controls
          />

        </div>
        <div>
          <ReactAudioPlayer
            src={song2}
            volume={0.1}
            controls
          />
        </div>
      </div>
    </div>
  )
}

export default Music;