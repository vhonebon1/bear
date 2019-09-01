import React from 'react'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'

const LargeTile = ({ todo, handleSelectedVideo, hasFilms }) =>
  <div className="listWrapper">
    <ul className="taskList">
      { hasFilms &&
        <li className="task" key={todo.id} style={{ backgroundImage: `url(http://img.youtube.com/vi/${todo.url}/0.jpg)`}}>
          <div className="hover-elems">
            <IosPlayOutline className="video-play-icon" onClick={() => handleSelectedVideo(todo.url)} fontSize="100px" color="#fff" />
            <div className="video-title">{todo.title}</div>
          </div>
        </li>
      }
    </ul>
  </div>

export default LargeTile
