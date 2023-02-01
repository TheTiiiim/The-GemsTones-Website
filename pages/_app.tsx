import '../styles/globals.css'
import type { AppProps } from 'next/app'
import logo from '../public/logo.jpg'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="container">
  <Head>
    <title>The GemsTones</title>
    <meta name="description" content="The GemsTones is a retro-rock band with a love for all things nostalgia. Bringing the biggest hits." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="https://use.typekit.net/syq1pzk.css" />
  </Head>

  <header>
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

  <main>
    <Component {...pageProps} />
  </main>

  <footer>
    <p>+1 (413) 218-2466</p>
    <p>thegemstones50s@gmail.com</p>
  </footer>
  </div>
}

export default MyApp
