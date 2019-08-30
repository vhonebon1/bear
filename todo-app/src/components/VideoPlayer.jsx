import React from 'react'
import ReactPlayer from 'react-player'
import IosClose from 'react-ionicons/lib/IosClose'

const VideoPlayer = ({ selectedVideo, onEnded, handleClearSelected }) =>
  <div className="video-wrapper">
    <div className="video-inner">
      <div className="video-close">
        <IosClose onClick={() => handleClearSelected()} fontSize="40px" color="#ffffff" />
      </div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${selectedVideo}&start_radio=1&list=RDDDWKuo3gXMQ`}
        playing
        onEnded={onEnded}
        width='80vw'
        height='70vh'
      />
    </div>
  </div>

export default VideoPlayer;
