import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {

    // children is anything that will sit inside the Layout component in the _app.js page file

  return (
    <div className='content'>
      <Head>
        <title>Charles Mong | Front-End Web Developer</title>
        <meta name="description" content="web development, web design, content creation, and SEO services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      { children }
      <Footer />
    </div>
    
  )
}

export default Layout