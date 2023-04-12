import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Charles Mong | Front-End Web Developer</title>
        <meta name="description" content="web development, web design and SEO services" />
        <link rel="icon" href="#"></link>
      </Head>

      <Navbar />
     
    </div>
  )
}