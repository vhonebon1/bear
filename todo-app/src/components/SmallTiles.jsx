import React from 'react'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'

const SmallTiles = ({ todos, handleSelectedVideo, hasFilms }) =>
  <div className="smallTile-wrapper">
    { hasFilms &&
      <React.Fragment>
        {todos.map((todo) => {
          return(
            <div className="smallTile" key={todo.id} style={{ backgroundImage: `url(http://img.youtube.com/vi/${todo.url}/0.jpg)`}}>
              <div className="hover-elems">
                <IosPlayOutline className="video-play-icon" onClick={() => handleSelectedVideo(todo.url)} fontSize="100px" color="#fff" />
                <div className="video-title">{todo.title}</div>
              </div>
            </div>
          )
        })}
      </React.Fragment>
    }
  </div>

export default SmallTiles
