import { Inter } from 'next/font/google';
import Head from 'next/head';
import Landing from '../components/Landing';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Charles Mong | Front-End Web Developer</title>
        <meta name="description" content="web development, web design, content creation, and SEO services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <Landing />
      <About />
      <Skills />
      <Portfolio />
      <Contact />      
     
    </div>
  )
}
