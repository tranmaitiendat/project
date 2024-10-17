import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="service-list">
                <div className="service-item">
                    <h3>Planning Permits</h3>
                    <p>Assisting with planning and permit approvals for property development.</p>
                </div>
                <div className="service-item">
                    <h3>Real Estate Development</h3>
                    <p>Guidance on developing profitable real estate projects.</p>
                </div>
                <div className="service-item">
                    <h3>Property Development</h3>
                    <p>Comprehensive analytics for making informed development decisions.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
