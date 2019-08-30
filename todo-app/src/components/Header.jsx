import React from 'react'
import IosFilm from 'react-ionicons/lib/IosFilm'

const Header = () =>
  <div className="header-wrapper">
    <div className="header-inner">
      <h3 className="header">Thomas Boden</h3>
      <div className="subtitle-wrapper">
        <IosFilm fontSize="40px" color="#4B4A4E" />
        <h4 className="header sub-header">Film Producer</h4>
      </div>
    </div>
  </div>

export default Header
