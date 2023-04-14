import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import About from '../components/About';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Charles Mong | Front-End Web Developer</title>
        <meta name="description" content="web development, web design, content creation, and SEO services" />
        <link rel="icon" href="#"></link>
      </Head>
      <Navbar />
      <Landing />
      <About />
     
    </div>
  )
}
