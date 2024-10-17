import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Testimonials />
            <ContactForm />
        </div>
    );
};

export default Home;
