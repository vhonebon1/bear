import React from 'react'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'

const SmallTiles = ({ todos, handleSelectedVideo, hasFilms }) =>
  <div className="smallTile-wrapper">
    { hasFilms &&
      <React.Fragment>
        {todos.map((todo) => {
          return(
            <div
              className="smallTile"
              key={todo.id}
              onClick={(id) => handleSelectedVideo(todo.url)}
              style={{ backgroundImage: `url(http://img.youtube.com/vi/${todo.url}/0.jpg)`}}></div>
          )
        })}
      </React.Fragment>
    }
  </div>

export default SmallTiles
