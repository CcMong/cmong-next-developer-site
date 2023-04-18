import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {

    // children is anything that will sit inside the Layout component in the _app.js page file

  return (
    <div className='content'>
        <Navbar />
        { children }
        <Footer />
    </div>
    
  )
}

export default Layout