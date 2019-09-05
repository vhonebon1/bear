import React from 'react'
import Header from './Header'
import LargeTile from './LargeTile'
import SmallTiles from './SmallTiles'
import VideoPlayer from './VideoPlayer'
import Contact from './Contact'

const HomePage = ({ largeTile, smallTiles, updateTodo, selectedVideo, handleSelectedVideo, handleClearSelected, hasFilms }) =>
  <React.Fragment>
    <div className={`homepage-wrapper ${selectedVideo && "modal"}`}>
      <div className="color-block"></div>
      <Contact />
      <Header />
      { selectedVideo &&
        <VideoPlayer
          selectedVideo={selectedVideo}
          onEnded={handleClearSelected}
          handleClearSelected={handleClearSelected}
        />
      }
    </div>
    <LargeTile
      hasFilms={hasFilms}
      todo={largeTile}
      updateTodo={updateTodo}
      handleSelectedVideo={handleSelectedVideo}
      />
    <SmallTiles
      hasFilms={hasFilms}
      todos={smallTiles}
      updateTodo={updateTodo}
      handleSelectedVideo={handleSelectedVideo}
    />
  </React.Fragment>

export default HomePage
