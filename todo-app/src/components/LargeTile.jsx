import React from 'react'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'

const LargeTile = ({ todo, handleSelectedVideo, hasFilms }) =>
  <div className="tileWrapper">
    { hasFilms &&
      <div
        className="tile large"
        key={todo.id}
        onClick={(id) => handleSelectedVideo(todo.url)}
        style={{ backgroundImage: `url(http://img.youtube.com/vi/${todo.url}/0.jpg)` }}></div>
    }
  </div>

export default LargeTile
