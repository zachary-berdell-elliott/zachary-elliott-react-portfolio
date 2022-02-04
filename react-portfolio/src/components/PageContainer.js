import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Footer from './Footer';

function PageContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    //Renders the active page
    const renderPage = (currentPage) => {
        switch(currentPage) {
            case 'About Me': 
                return <AboutMe />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact Me':
                return <ContactMe />;
            case 'Resume':
                return <Resume />;
            default:
                console.log('There was an error rendering the page.');      
        }
    }

    const handlePageChange = page => setCurrentPage(page);

    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage(currentPage)}
            <Footer />
        </>
    )
}

export default PageContainer;