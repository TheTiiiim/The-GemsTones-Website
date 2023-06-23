import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Iframe from 'react-iframe'

import styles from '../styles/Home.module.css'
import banner from '../public/banner2.png'


const Home: NextPage = () => {
  return (
    <div className={styles.centerFlex}>
      <Head>
        <title>Home - The GemsTones 50&apos;s Classics</title>
      </Head>

      <h1 className={styles.bannerHeader}>
        <div className={styles.bannerContainer}>
          <Image 
            layout="fill"
            objectFit="contain"
            src={banner}
            alt="The GemsTones 50&apos;s Classics"
          />
        </div>
      </h1>
      <div className={styles.featuredContainer1}>
        <div className={styles.featuredContainer2}>
          <Iframe 
            url="https://www.youtube.com/embed/V5yG6H3C6NI"
            className={styles.featured}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
