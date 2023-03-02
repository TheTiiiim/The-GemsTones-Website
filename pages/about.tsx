import type { NextPage } from 'next'

import styles from '../styles/About.module.css'
import Image from 'next/image'

import angsty_amethyst from '../public/angsty-amethyst.jpg'
import electric_emerald from '../public/electric-emerald.jpg'
import rockin_ruby from '../public/rockin-ruby.jpg'
import swingin_sapphire from '../public/swingin-sapphire.jpg'

const About: NextPage = () => {
  return (
    <div>
      <h1>Meet the Gang!</h1>
      <p id={styles.tagline}>The GemsTones is a retro-rock band with a love for all things nostalgia. Bringing back the biggest hits of the 50&apos;s.</p>
      <div className={styles.memberList}>
        <div className={styles.split}>
          <div className={styles.description}>
            <h2>Rockin&apos; Ruby</h2>
            <p>Lead singer and lead guitarist; Rockin&apos; Ruby aka Josef Nocera has performed for thousands of audiences across New England over the course of his 15-year career as a solo performer and songwriter. He&apos;s also the older brother of fellow GemsTones member Hunter and Jett. Josef&apos;s influences include Frank Sinatra, Buddy Holly, Elvis Presley and AC/DC. Being a pert of the GemsTones is his life-long dream, and he&apos;s beyond excited to collaborate with these musicians to bring new life to the songs of the 1950s and invigorate audiences who also love nostalgic music!</p>
          </div>
          <div className={styles.portraitContainer}>
            <Image
              layout="fill"
              objectFit="contain"
              src={rockin_ruby}
              alt="Rockin Ruby Portrait"
            />
          </div>
        </div>
        <div className={styles.split}>
          <div className={styles.description}>
            <h2>Swingin&apos; Sapphire</h2>
            <p>Keys, Acoustic Guitar, Lead & Backing Vocals; Swingin&apos; Sapphire aka Jett haryslak is the youngest member of The GemsTones and brother of fellow members hunter and Josef. Jett&apos;s influncess include class acts such as Queen, The Beatles, Let Zeppelin, and Electric Light Orchestra; and more obscure acts such as Will Wood and Tally Hall. Jett spent his high school years acting in plays and performing in the jazz band. He looks forward to bringing his energetic personality into our nostalgic performances.</p>
          </div>  
          <div className={styles.portraitContainer}>
            <Image 
              layout="fill"
              objectFit="contain"
              src={swingin_sapphire}
              alt="Swingin Sapphire Portrait"        
            />
          </div>
        </div>
        <div className={styles.split}>
          <div className={styles.description}>
            <h2>Electric Emerald</h2>
            <p>Drums & Backing Vocals; Electric Emerald aka Mark Scott is a longtime gospel drummer and multi-instrumentalist with a specialty in sizzling high harmonies. And while he may not be related to the other GemsTones members, he is our drummer from another mother. With inspiration from Crosby Stills & Nash, Earth Wind & Fire, and Paul Simon; he is here to drop the beat and keep you on your feet!</p>
          </div>
          <div className={styles.portraitContainer}>
            <Image 
              layout="fill"
              objectFit="contain"
              src={electric_emerald}
              alt="Electric Emerald Portrait"
            />  
          </div>
        </div>
        <div className={styles.split}>
          <div className={styles.description}>
            <h2>Angsty Amethyst</h2>
            <p>Bassist and Graphic artist; Angsty Amethyst has been playing guitar and writing music for over 10 years. He has even self produced two solo albums. He&apos;s alsot the middle brother of fellow GemsTones members Josef and jett. Hunter&apos;s influences included Johnny Cash, John Lennon, Shaun Morgan and Bob Seger. Hunter has always had a thing for the angst aesthetic, but don&apos;t let that tough exterior fool you. There is a warm heart under all that cool leather.</p>
          </div>
          <div className={styles.portraitContainer}>
            <Image 
              layout="fill"
              objectFit="contain"
              src={angsty_amethyst}
              alt="Angsty Amethyst Portrait"        
            />   
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
