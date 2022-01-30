import React from 'react';

function Resume() {
    return(
        <main>
            <h2>Resume</h2>
            <h3>Front End Proficiencies</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>AJAX</li>
                <li>Search Engine Optimization (SEO)</li>
            </ul>
            <h3>Back End Proficiencies</h3>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL (SQL database)</li>
                <li>MongoDB (NoSQL database)</li>
            </ul>
            <button id="resume-btn">Download Resume</button>
        </main>
    )
}

export default Resume;