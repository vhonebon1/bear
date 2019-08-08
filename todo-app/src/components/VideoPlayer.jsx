import React, { Component } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ selectedVideo, onEnded }) =>
  <ReactPlayer
    url={`https://www.youtube.com/watch?v=${selectedVideo}&start_radio=1&list=RDDDWKuo3gXMQ`}
    playing
    onEnded={onEnded}
  />

export default VideoPlayer;
