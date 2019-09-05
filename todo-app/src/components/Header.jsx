import React from 'react'
import IosFilm from 'react-ionicons/lib/IosFilm'

const Header = () =>
  <div className="header-wrapper">
    <h3 className="header">Thomas Boden</h3>
    <div className="subtitle-wrapper">
      <div className="subtitle-inner">
        <IosFilm fontSize="40px" color="#4C4C4C" />
        <h4 className="header sub-header">Film Producer</h4>
      </div>
    </div>
  </div>

export default Header
