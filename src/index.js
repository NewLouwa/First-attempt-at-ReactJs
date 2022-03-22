import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Competences from './Components/Competences';


ReactDOM.render(
  <React.StrictMode>
    <div class="container">
      <div class="title-div-container"> <Header /></div>
      <div class="competences-div-container"><Competences /></div>
      <div class="profile-div-container"><Profile /></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

