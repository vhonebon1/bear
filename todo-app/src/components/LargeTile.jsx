import React from 'react'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'

const LargeTile = ({ todo, handleSelectedVideo, hasFilms }) =>
  <div className="large-wrapper">
    { hasFilms &&
      <div
        className="large-tile"
        onClick={(id) => handleSelectedVideo(todo.url)}
        style={{ backgroundImage: `url(http://img.youtube.com/vi/${todo.url}/0.jpg)` }}></div>
    }
  </div>

export default LargeTile
