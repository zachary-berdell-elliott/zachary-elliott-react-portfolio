import React from 'react';

function NavBar(props, { currentPage, handlePageChange }) {
    //Array with objects that are used to render the anchor tags
    const links = [{title: 'AboutMe', href: 'AboutMe'}, 
    {title: 'Portfolio', href: 'Portfolio'},
    {title: 'ContactMe', href: 'ContactMe'},
    {title: "Resume", href: 'Resume'}]; 
    //Renders the nav bar 
    return (
        <nav>
            <ul>
            {/* Creates an anchor tag for each item in the array and adds logic to make it render for the current page */}
            {links.map(link => (
                    <li key={link.title}>
                        {console.log(currentPage)}
                        <a href={link.href.toLowerCase()}
                            className={props.currentPage === link ? 'nav-link active' : 'nav-link'}
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