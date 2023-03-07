import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Iframe from 'react-iframe'

import styles from '../styles/Home.module.css'
import banner from '../public/banner.jpg'


const Home: NextPage = () => {
  return (
    <div className={styles.centerFlex}>
      <Head>
        <title>Home - The GemsTones 50&apos;s Classics</title>
      </Head>

      <h1>
        <Image 
          src={banner}
          alt="The GemsTones 50&apos;s Classics"
        />
      </h1>
      <div className={styles.featuredContainer1}>
        <div className={styles.featuredContainer2}>
          <Iframe 
            url="https://www.youtube.com/embed/FYSj5IUTe54"
            className={styles.featured}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
