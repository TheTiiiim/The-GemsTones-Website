import type { NextPage } from 'next'

import Image from 'next/image'
import Head from 'next/head'

import styles from '../styles/Gallery.module.css'
import streamingservicepreview from '../public/streamingservicepreview.jpg'

const Gallery: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The GemsTones 50&apos;s Classics - Gallery</title>
      </Head>

      <h1>Songs</h1>
      <Image 
        src={streamingservicepreview}
        alt="The Gemstones is coming to your favorite services starting March 10th."
      />  
    </div>
  )
}

export default Gallery
