import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ selectedVideo, onEnded, handleClearSelected }) =>
  <div className="video-wrapper">
    <div className="video-inner">
      <div className="video-close">
        <img onClick={() => handleClearSelected()} src="./close.svg" />
      </div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${selectedVideo}&start_radio=1&list=RDDDWKuo3gXMQ`}
        playing
        onEnded={onEnded}
      />
    </div>
  </div>

export default VideoPlayer;
