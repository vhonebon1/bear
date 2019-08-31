import React from 'react'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'

const LargeTile = ({ todo, updateTodo, deleteTodo, handleSelectedVideo, handleClearSelected, hasFilms }) =>
  <div className="listWrapper">
    <ul className="taskList">
      { hasFilms &&
        <li className="task" key={todo.id} style={{ backgroundImage: `url(http://img.youtube.com/vi/${todo.url}/0.jpg)`}}>
          <IosPlayOutline className="video-play-icon" onClick={() => handleSelectedVideo(todo.url)} fontSize="100px" color="#fff" />
        </li>
      }
    </ul>
  </div>

export default LargeTile
