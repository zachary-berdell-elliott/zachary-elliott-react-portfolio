import React from 'react';

function NavBar(props, { currentPage, handlePageChange }) {
    //Array with objects that are used to render the anchor tags
    const links = [{title: 'About Me', href: 'about-me'}, 
    {title: 'Portfolio', href: 'portfolio'},
    {title: 'Contact Me', href: 'contact-me'},
    {title: "Resume", href: 'resume'}]; 
    //Renders the nav bar 
    return (
        <nav>
            <ul>
            {/* Creates an anchor tag for each item in the array and adds logic to make it render for the current page */}
            {links.map(link => (
                    <li key={link.title}>
                        {console.log(currentPage)}
                        <a href={link.href.toLowerCase()}
                            className={currentPage === link ? 'nav-link active' : 'nav-link'}
                            onClick={() => handlePageChange(link.title)}>
                            {link.title}
                        </a>
                    </li>
            ))}
            </ul>
        </nav>
    );
}

export default NavBar;