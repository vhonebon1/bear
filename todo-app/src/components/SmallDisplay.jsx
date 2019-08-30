import React from 'react'

const SmallDisplay = () =>
  <div className="listWrapper">
    <ul className={`taskList ${landscape && 'landscape'}`}>
      {todos.map((todo) => {
        return(
          <li className="task" key={todo.id} style={{ backgroundImage: `url(http://img.youtube.com/vi/${todo.url}/0.jpg)`}}>
            <IosPlayOutline className="video-play-icon" onClick={() => handleSelectedVideo(todo.url)} fontSize="100px" color="#fff" />
          </li>
        )
      })}
    </ul>
  </div>



export default SmallDisplay
