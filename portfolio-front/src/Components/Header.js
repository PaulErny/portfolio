import React from 'react'
import pp from '../images/pp.jpeg'
import './styles.css'

function Header() {
  return (
    <div className="header"> 
      <div className="picture">
        <img src={pp} alt="profile"></img>
      </div>
      <div className="title">Paul Erny</div>
      <div className="header-text">
        <p>3rd year student at Epitech Bordeaux, preaparing a Computer Science degree. <br />
        New technologies and Apple enthousiast.</p>
      </div>
    </div>
  );
}

export default Header;