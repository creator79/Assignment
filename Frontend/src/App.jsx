/* eslint-disable */
import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import ProductListing from './Components/ProductListing';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import LinkNav from './Components/LinkNav'


const App = () => {
  const navbarItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Our Products', id: 'product', child: [
      { name: 'Product 1', id: 'p1' },
      { name: 'Product 2', id: 'p2' },
      { name: 'Product 3', id: 'p3' },
      { name: 'Product 4', id: 'p4' },
    ] },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <div className="app">
      <Navbar  />
      <LinkNav/>
      <Banner />
      <ProductListing />
      <ContactForm />
      <Footer/>
    </div>
  );
};

export default App;
