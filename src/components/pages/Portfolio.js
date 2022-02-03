import React from 'react';

function Portfolio() {
    const projects = [
        {
            name: 'Movie Finder',
            technologies: 'JavaScript/JQUERY, AJAX, CSS/Bulma, HTML',
            image: '',
            description: 'This is a project that was done collaborating with a group of 5 people. The project allows a user to enter a movie and be presented with information about the movie, the places the user can stream the movie, and a feature to add the movie to a watchlist so they can click on it and be presented with the information for the movie. It used CSS/Bulma, AJAX, JavaScript/JQuery, and HTML.',
            GitHubLink: '',
            projectLink: '',
            mainProject: true
        },
        {
            name: 'Day Planner',
            technologies: 'Moment.js, JavaScript/JQuery, CSS/Bootstrap',
            image: '',
            description: 'This is a homework assignment where a feature for employees to schedule their day on the standard business hours was implemented. The data can be saved for each block by clicking a button next to the text area. The technologies that were used include Bootstrap, JQuery, and Moment.js.',
            GitHubLink: '',
            projectLink: '',
            mainProject: false
        },
        {
            name: 'Weather Dashboard',
            technologies: 'JavaScript/JQuery, Moment.js, CSS/Bootstrap, HTML, AJAX',
            image: '',
            description: 'This is a homework assignment where a weather dashboard was built that will display the forecast to the user. A feature was added to make an AJAX call to the Open Weather API and return data for the current weather and the weather for the next 5 days. The technologies used in the project include HTML, CSS/Bootstrap, JavaScript/JQuery, Moment.js, and the Open Weather API.',
            GitHubLink: '',
            projectLink: '',
            mainProject: false
        },
        {
            name: 'TripShare',
            technologies: 'JavaScript/JQuery, AJAX, CSS, HTML, Node.js, Handlebars, Express.js, Cloudinary, Sequelize, MySQL',
            image: '',
            description: 'This project was completed with a group of four. It is a travel blog website that allows a user to create an account and make travel blog posts. Users click the login page then they are presented with an option to either log in or sign up. They are then redirected to the page that allows them to create blog posts and view and delete their past blog posts. They then enter a title, text, and upload an image. On the front page, the user can comment and like or dislike a blog post. The technologies used include HTML, CSS, Node.js, Handlebars, Express.js, Multer, Sequelize, and MySQL.',
            GitHubLink: '',
            projectLink: '',
            mainProject: true
        },
        {
            name: 'Employee Tracker',
            technologies: 'JavaScript, Node.js, MySQL, Inquirer',
            image: '',
            description: 'This is a Node.js application that allows a user to track employees. It has features for storing employees, roles, departments, and managers. The application runs in the terminal and uses MySQL for the SQL database. The user can add to, delete from, and make edits to the tables. The technologies used in this application include Node.js, MySQL, and Inquirer.',
            GitHubLink: '',
            projectLink: '',
            mainProject: false
        },
        {
            name: 'Ecommerce Backend',
            technologies: 'Sequelize, MySQL, Node.js, Express.js',
            image: '',
            description: 'This is a homework assignment where the backend for an ecommerce website was built. It needed to have the Sequelize models and Express.js routes built. The application allows basic actions to be performed like grabbing all items, grabbing an item by id, updating an item, and deleting an item. The technologies used include Node.js, Express.js, Sequelize, and MySQL.',
            GitHubLink: '',
            projectLink: '',
            mainProject: false
        }
    ]
}

export default Portfolio;