import type { NextPage } from 'next'

import styles from '../styles/Gallery.module.css'
import streamingservicepreview from '../public/streamingservicepreview.jpg'
import Image from 'next/image'

const Gallery: NextPage = () => {
  return (
    <div>
      <h1>Songs</h1>
      <Image 
        src={streamingservicepreview}
        alt="The Gemstones is coming to your favorite services starting March 10th."
      />  
    </div>
  )
}

export default Gallery
