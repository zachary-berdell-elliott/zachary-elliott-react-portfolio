import React from 'react';

function Resume() {
    return(
        <main>
            <h2>Resume</h2>
            <article className="resume-list">
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
            </article>
            <article className="resume-list">
                <h3>Back End Proficiencies</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>Django</li>
                    <li>Java</li>
                    <li>Spring</li>
                    <li>MySQL (SQL database)</li>
                    <li>MongoDB (NoSQL database)</li>
                    <li>Sequelize (ORM)</li>
                    <li>Mongoose (ORM)</li>
                </ul>
            </article>
            <article className="resume-list">
                <h3>Deployment and VCS</h3>
                <ul>
                    <li>Heroku</li>
                    <li>Amazon Web Services (AWS)</li>
                    <li>GitHub</li>
                    <li>git</li>
                </ul>
            </article>
            <article className="resume-list">
                <h3>Other</h3>
                <ul>
                    <li>GraphQL</li>
                    <li>VSCode</li>
                    <li>Data Structures and Algorithms</li>
                </ul>
            </article>
            <button id="resume-btn">Download Resume</button>
            <div className="no-cover"></div>
        </main>
    )
}

export default Resume;