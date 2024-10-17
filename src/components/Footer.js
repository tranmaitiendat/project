import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Property Analytics. All rights reserved.</p>
                <div className="social-media-links">
                    <a href="/">Facebook</a>
                    <a href="/">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
