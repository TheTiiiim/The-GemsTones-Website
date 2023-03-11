import '../styles/globals.css'
import type { AppProps } from 'next/app'
import logo from '../public/logo.jpg'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="topContainer">
    <Head>
      <meta name="description" content="The GemsTones is a retro-rock band with a love for all things nostalgia. Bringing back the biggest hits of the 50's." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico"></link>
    </Head>
    <header className="container">
      <Link href="/" className="logo">
        <a>
          <Image 
            src={logo}
            alt="The GemsTones Logo"
            width="200px"
            height="200px"
          />  
        </a>
      </Link>
      <nav>
        <Link href="/"><a href="">Home</a></Link>
        <Link href="/about"><a href="">About</a></Link>
        <Link href="/gallery"><a href="">Gallery</a></Link>
        <Link href="/dates"><a href="">Dates</a></Link>
      </nav>
    </header>

    <main className="container">
      <Component {...pageProps} />
    </main>

    <footer className="container">
      <div>
        <a href="https://www.facebook.com/GemsTones.Official" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
            <title>Facebook</title>
            <path fill="black" fill-rule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31Z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/gemstones.official" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 256 256">
            <title>Instagram</title>
            <path fill="black" d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm-48 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48Zm60-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm-28 48a32 32 0 1 1-32-32a32 32 0 0 1 32 32Z"/>
          </svg>
        </a>
        <a href="https://www.tiktok.com/@gemstones.official" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 256 256">
            <title>Tiktok</title>
            <path fill="black" d="M232 80v40a8 8 0 0 1-8 8a103.25 103.25 0 0 1-48-11.71V156a76 76 0 0 1-152 0c0-36.9 26.91-69.52 62.6-75.88A8 8 0 0 1 96 88v42.69a8 8 0 0 1-4.57 7.23A20 20 0 1 0 120 156V24a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8a48.05 48.05 0 0 0 48 48a8 8 0 0 1 8 8Z"/>
          </svg>
        </a>
      </div>
      <div>
        <p>+1 (413) 218-2466</p>
        <p>thegemstones50s@gmail.com</p>
      </div>
    </footer>
  </div>
}

export default MyApp
