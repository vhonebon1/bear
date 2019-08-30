import React from 'react'
import Header from './Header'
import FilmsDisplay from './FilmsDisplay'
import VideoPlayer from './VideoPlayer'

const HomePage = ({ todos, largeTile, smallTiles, updateTodo, selectedVideo, handleSelectedVideo, handleClearSelected }) =>
  <React.Fragment>
    <div className={`homepage-wrapper ${selectedVideo && "modal"}`}>
      <Header />
      { selectedVideo ?
        <VideoPlayer
          selectedVideo={selectedVideo}
          onEnded={handleClearSelected}
          handleClearSelected={handleClearSelected}
        /> :
        <FilmsDisplay
          todos={todos.length > 0 ? [todos[0]] : [{}]}
          updateTodo={updateTodo}
          handleSelectedVideo={handleSelectedVideo}
        />
      }
    </div>
    <FilmsDisplay
      todos={todos.length > 0 ? todos.slice(1) : [{}]}
      updateTodo={updateTodo}
      handleSelectedVideo={handleSelectedVideo}
      landscape
    />
  </React.Fragment>

export default HomePage
