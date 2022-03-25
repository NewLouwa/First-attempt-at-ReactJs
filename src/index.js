import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Competences from './Components/Competences';
//
//
//

ReactDOM.render(
  <React.StrictMode>
    <div className="main-container">
      <div className="header-box"><Header /> </div>
        <div className="body-container">
          <div className="profile-box"><Profile /></div>
          <div className="skills-box"><Competences /></div>
        </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

