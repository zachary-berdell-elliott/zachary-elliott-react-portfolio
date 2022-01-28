import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
    //Array with objects that are used to render the anchor tags
    const links = [{title: 'About Me', href: 'about-me'}, 
    {title: 'Portfolio', href: 'portfolio'},
    {title: 'Contact Me', href: 'contact-me'},
    {title: "Resume", href: 'resume'}];

    //Renders the nav bar 
    return (
        <nav>
            {/* Creates an anchor tag for each item in the array and adds logic to make it render for the current page */}
            {links.map(link => {
                <a href={link.href} 
                className={currentPage === link.title ? 'nav-link active' : 'nav-link'}
                onClick={() => handlePageChange(link.title)}>
                    {link.title}
                </a>
            })}
        </nav>
    );
}

export default NavBar;