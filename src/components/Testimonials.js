import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        { name: 'Client A', text: 'Outstanding services in property insights!' },
        { name: 'Client B', text: 'Their analytics helped us make critical decisions.' }
    ];

    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <p>"{testimonial.text}"</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
