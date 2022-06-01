import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Footer from './Footer';

function PageContainer() {
    return (
        <>
        <Router>
            <Header />
            <Routes>
                <Route exact path="/about-me" element={<AboutMe />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/contact-me" element={<ContactMe />} />
                <Route exact path="/resume" element={<Resume />} />
                <Route exact path="*" element={<AboutMe />} />
            </Routes>
            <Footer />
        </Router>
        </>
    )
}

export default PageContainer;