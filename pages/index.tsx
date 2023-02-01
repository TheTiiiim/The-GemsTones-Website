import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Iframe from 'react-iframe'
import logo from '../public/logo.jpg'


const Home: NextPage = () => {
  return (
    <div className={styles.featuredContainer1}>
      <div className={styles.featuredContainer2}>
        <Iframe 
          url="https://www.youtube.com/embed/FYSj5IUTe54"
          className={styles.featured}
        />
      </div>
    </div>
  )
}

export default Home
