import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";


export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };
    return (
        <>
            {/* <a href="#top" className="back-to-top"></a> */}
            <ScrollToTop smooth component={<svg width="28" height="28" fill="#6C55F9" viewBox="0 0 256 256"><path d="M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z"></path></svg>}   
            />
            
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset={500}>
                <div className="container">
                    <Link to="/" className="navbar-brand">M<span className="text-primary">a</span>X</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded={isMobileMenuOpen} aria-label="Toggle navigation" onClick={handleMobileMenuToggle}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`navbar-collapse collapse${isMobileMenuOpen ? ' show' : ''}`} id="navbarContent">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                                <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                                <Link className="nav-link" to="/about" onClick={handleLinkClick}>About</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/service' ? 'active' : ''}`}>
                                <Link className="nav-link" to="/service" onClick={handleLinkClick}>Services</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                                <Link className="btn btn-primary ml-lg-2" to="/contact" onClick={handleLinkClick}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
