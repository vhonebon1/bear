import React from 'react'
import Header from './Header'
import TodosDisplay from './TodosDisplay'
import VideoPlayer from './VideoPlayer'

const HomePage = ({ todos, updateTodo, selectedVideo, handleSelectedVideo, handleClearSelected }) =>
  <div className={`homepage-wrapper ${selectedVideo && "modal"}`}>
    <Header />
    { selectedVideo ?
      <VideoPlayer
        selectedVideo={selectedVideo}
        onEnded={console.log('hey')}
        handleClearSelected={handleClearSelected}
      /> :
      <TodosDisplay
        todos={todos}
        updateTodo={updateTodo}
        handleSelectedVideo={handleSelectedVideo}
      />
    }
  </div>

export default HomePage
