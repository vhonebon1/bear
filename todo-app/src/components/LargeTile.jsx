import React from 'react'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'

const LargeTile = ({ todo, handleSelectedVideo, hasFilms }) =>
  <div className="large-wrapper">
    { hasFilms &&
      <div className="large-tile" style={{ backgroundImage: `url(http://img.youtube.com/vi/${todo.url}/0.jpg)` }}>
        <div className="hover-elems">
          <IosPlayOutline className="video-play-icon" onClick={() => handleSelectedVideo(todo.url)} fontSize="100px" color="#fff" />
          <div className="video-title">{todo.title}</div>
        </div>
      </div>
    }
  </div>

export default LargeTile
