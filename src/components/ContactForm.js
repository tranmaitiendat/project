import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
    };

    return (
        <section className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={form.name}
                    onChange={handleChange}
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={form.email}
                    onChange={handleChange}
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={form.message}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;
