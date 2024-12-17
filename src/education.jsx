import React from "react";
import './index.css';
import bg from './assets/minecraftbg.jpg';
import ccdps from './assets/goldenacreselem.jpg';
import calhigh from './assets/calhigh.jpg';
import ncf from './assets/ncf.jpg';

function Education() {
    return (
        <div className="body">
            {/* Background image */}
            <img className="bg" src={bg} alt="Background" />
            <div className="education">
                <h1>Educational Background</h1>

                {/* CCDPS Image */}
                <img className="ccdps" src={ccdps} alt="Golden Acres Elementary School" />
                <img className="calhigh" src={calhigh} alt="Calabanga National Science High School" />
                <img className="ncf" src={ncf} alt="Naga College Foundation" />

                {/* Elementary Section */}
                <h2 className="elementary">Elementary</h2>
                <p className="elementary-description">
                   I was an active student in Golden Acres Elementary School in Las Piñas
                </p>

                {/* High School Section */}
                <h2 className="highschool">High School</h2>
                <p className="highschool-description">
                    As a Transferee student from a school in Biñan, I found it hard to adjust on trying to fit in the school since I only know tagalog language back then but as I graduated at the same school, I met a lot of good friends and I was able to get an award.
                </p>

                {/* College Section */}
                <h2 className="college">College</h2>
                <p className="college-description">
                    I am currently studying at Naga College Foundation taking the course Computer Science.
                </p>
            </div>
        </div>
    );
}

export default Education;
