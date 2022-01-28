import React, { useState } from 'react';

function NavBar() {
    const links = [{title: 'About Me', href: 'about-me'}, 
    {title: 'Portfolio', href: 'portfolio'},
    {title: 'Contact Me', href: 'contact-me'},
    {title: "Resume", href: 'resume'}];

    return (
        <nav>
            {links.map(link => {
                <a href={link.href} className={currentPage === link.title ? 'nav-link active' : 'nav-link'}>{link.title}</a>
            })}
        </nav>
    );
}