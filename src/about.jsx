import React from "react";
import './index.css';
import bg from './assets/minecraftbg.jpg';
import About from './About.jsx';

function About() {
    return (
        <div className="body">
            {/* Background image */}
            <img className="bg" src={bg} alt="Background" />
            
            <div className="about">
                <h1>ABOUT ME</h1>
                <p>Hello, I'm Joshua Rovic Sanota, a student who is trying his best to be a programmer despite my lack of knowledge, motivation, self-esteem, and lack of self confidence.</p>

                <h2>JOURNEY</h2>
                <p>
                    Ever since I was a kid i've always wondered how the games I played work. Now that I'm a Computer Science college student, I'm able to learn or even know how to create the games I play or the websites I visit all my life.  
                </p>

                <h2>MISSION</h2>
                <p>
                My Mission is to die happy
                </p>

                <h2>WHAT'S IN THIS SITE?</h2>
                <p>
                    This website is a reflection of my journey, interests, and the things I am passionate about. You’ll find sections about my education, hobbies, and personal projects that I’ve worked on. I hope you enjoy browsing through and learning more about me.
                </p>
            </div>
        </div>
    );
}

export default About;
