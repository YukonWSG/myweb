import React from "react";
import './index.css';
import bg from './assets/minecraftbg.jpg';
import zzz from './assets/zzz.jpeg';
import gaming from './assets/gaming.jpg';


// Reusable Hobby Card Component
function HobbyCard({ image, title, description, buttonText, buttonClass }) {
  return (
    <div className="hobby-card">
      <img className="hobby-img" src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={buttonClass}>{buttonText}</button>
    </div>
  );
}

function Hobbies() {
  return (
    
    <div className="body">
    {/* Background image */}
    <img className="bg" src={bg} alt="Background" />
    
    <div className="hobby-container">
      <h1>Hobbies</h1> {/* Main title */}
      
      {/* Hobby Cards Row */}
      <div className="hobby-cards-row">
        {/* Guitar Section */}
        <HobbyCard
          image={zzz}
          title="Sleeping"
          description=" I like to sleep"
          buttonText="Sleep Sleep Sleep"
          buttonClass="learn-chords-btn"
        />

        {/* Basketball Section */}
        <HobbyCard
          image={gaming}
          title="Playing Video Games"
          description="Playing video games is sometimes bad and sometimes good for my mental health, for example i play league of legends and I somehow lost a winning game, That would affect my self confidence for not carrying my team good enough. "
          buttonText="League of Legends"
          buttonClass="learn-ball-btn"
        />
      </div>
    </div>
    </div>
  );
}

export default Hobbies;
