import React from 'react';
import '../assets/Header.css'
import troll from '../images/troll.png'

export default function Header() {
  return (
    <div className="header-div">
      <img src={troll} className="header-photo" />
      <h1 className="header-title">Meme Generator</h1>
    </div>
  )
}
