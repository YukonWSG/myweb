import React from 'react';
import bg from './assets/minecraftbg.jpg';
import dp from './assets/akodp.jpg'
import './index.css';

function Body() {
  return (
    <div className="body">
      {/* Background image */}
      <img className="bg" src={bg} alt="Background" />
      
      {/* Display picture */}
      <img className="dp" src={dp} alt="Display Picture" />
      
      {/* Main text content */}
      <div className="content">
        <h2>  ____________ </h2>
        <h1>I'm Joshua Rovic Sanota</h1>
        <p>
        Joshua Rovic Sanota is a computer science student striving to keep up and grow in a challenging field. Despite the hurdles, he's giving it all and learning one step at a time.
        </p>
      </div>
    </div>
  );
}

export default Body;
