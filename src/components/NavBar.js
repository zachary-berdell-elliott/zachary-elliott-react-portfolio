import React from 'react';

function NavBar() {
    //Array with objects that are used to render the anchor tags
    const links = [{title: 'About Me', href: 'about-me'}, 
    {title: 'Portfolio', href: 'portfolio'},
    {title: 'Contact Me', href: 'contact-me'},
    {title: "Resume", href: 'resume'},
    {title: 'Services', href: 'services'}]; 

    const currentPage = window.location.href.split('/');
    const currHref = currentPage[currentPage.length - 1];

    //Renders the nav bar 
    return (
        <nav className="header-nav">
            <ul>
            {/* Creates an anchor tag for each item in the array and adds logic to make it render for the current page */}
            {links.map(link => (
                    <li key={link.title}>
                        <a href={link.href.toLowerCase()}
                            className={currHref === link.href ? 'nav-link active' : 'nav-link'}
                            aria-selected={currHref === link.href ? 'true' : 'false'} >
                            {link.title}
                        </a>
                    </li>
            ))}
            </ul>
        </nav>
    );
}

export default NavBar;