import React from 'react'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'

const FilmsDisplay = ({ todos, updateTodo, deleteTodo, handleSelectedVideo, handleClearSelected }) =>
  <div className="listWrapper">
    <ul className="taskList">
      {todos.map((todo) => {
        return(
          <li className="task" key={todo.id} style={{ backgroundImage: `url(http://img.youtube.com/vi/${todo.url}/0.jpg)`}}>
            <IosPlayOutline className="video-play-icon" onClick={() => handleSelectedVideo(todo.url)} fontSize="100px" color="#fff" />
          </li>
        )
      })}
    </ul>
  </div>

export default FilmsDisplay
