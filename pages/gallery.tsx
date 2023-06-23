import type { NextPage } from 'next'

import Image from 'next/image'
import Head from 'next/head'
import Iframe from 'react-iframe'

import styles from '../styles/Gallery.module.css'
import streamingservicepreview from '../public/streamingservicepreview.jpg'

const Gallery: NextPage = () => {
  return (
    <div className={styles.centerFlex}>
      <Head>
        <title>Gallery - The GemsTones 50&apos;s Classics</title>
      </Head>

      <section>
        <h1>Stream</h1>
        <div className={styles.streamingServices}>
          <a href="https://open.spotify.com/artist/3Nm1IrEImRN9Y15lYBd94f" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
              <title>Spotify</title>
              <path fill="white" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
            </svg>
          </a>
          <a href="https://music.apple.com/us/artist/the-gemstones/1670540209" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 448 512">
              <title>iTunes</title>
              <path fill="white" d="M223.6 80.3C129 80.3 52.5 157 52.5 251.5S129 422.8 223.6 422.8s171.2-76.7 171.2-171.2c0-94.6-76.7-171.3-171.2-171.3zm79.4 240c-3.2 13.6-13.5 21.2-27.3 23.8c-12.1 2.2-22.2 2.8-31.9-5c-11.8-10-12-26.4-1.4-36.8c8.4-8 20.3-9.6 38-12.8c3-.5 5.6-1.2 7.7-3.7c3.2-3.6 2.2-2 2.2-80.8c0-5.6-2.7-7.1-8.4-6.1c-4 .7-91.9 17.1-91.9 17.1c-5 1.1-6.7 2.6-6.7 8.3c0 116.1.5 110.8-1.2 118.5c-2.1 9-7.6 15.8-14.9 19.6c-8.3 4.6-23.4 6.6-31.4 5.2c-21.4-4-28.9-28.7-14.4-42.9c8.4-8 20.3-9.6 38-12.8c3-.5 5.6-1.2 7.7-3.7c5-5.7.9-127 2.6-133.7c.4-2.6 1.5-4.8 3.5-6.4c2.1-1.7 5.8-2.7 6.7-2.7c101-19 113.3-21.4 115.1-21.4c5.7-.4 9 3 9 8.7c-.1 170.6.4 161.4-1 167.6zM345.2 32H102.8C45.9 32 0 77.9 0 134.8v242.4C0 434.1 45.9 480 102.8 480h242.4c57 0 102.8-45.9 102.8-102.8V134.8C448 77.9 402.1 32 345.2 32zM223.6 444c-106.3 0-192.5-86.2-192.5-192.5S117.3 59 223.6 59s192.5 86.2 192.5 192.5S329.9 444 223.6 444z"/>
            </svg>
          </a>
          <a href="https://music.apple.com/us/artist/the-gemstones/1670540209" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
              <title>Apple Music</title>
              <path fill="white" d="m24 6.124l.001-.097c0-.743-.088-1.465-.253-2.156l.013.063A4.942 4.942 0 0 0 21.598.903l-.02-.012a4.956 4.956 0 0 0-1.847-.723l-.03-.004a10.14 10.14 0 0 0-1.553-.15h-.011c-.04 0-.083-.01-.124-.013H5.988c-.152.01-.3.017-.455.026a6.96 6.96 0 0 0-2.242.415L3.34.427A5.033 5.033 0 0 0 .487 3.175l-.012.033c-.17.409-.297.885-.36 1.38l-.003.028c-.051.343-.087.751-.1 1.165v.016c0 .032-.007.062-.01.093v12.224c.01.14.017.283.027.424c.02.861.202 1.673.516 2.416l-.016-.043a5.01 5.01 0 0 0 3.199 2.792l.035.009c.377.111.817.192 1.271.227l.022.001c.555.053 1.11.06 1.667.06h11.028c.554 0 1.099-.037 1.633-.107l-.063.007a5.319 5.319 0 0 0 2.321-.823l-.021.013a5.078 5.078 0 0 0 1.867-2.176l.013-.032c.166-.383.295-.829.366-1.293l.004-.031a11.897 11.897 0 0 0 .129-2.05V6.127zm-6.424 3.99v5.712l.001.083c0 .407-.09.794-.252 1.14l.007-.017a2.13 2.13 0 0 1-1.373 1.137l-.015.003a4.483 4.483 0 0 1-1.06.173h-.01c-.029.002-.062.002-.096.002a1.871 1.871 0 0 1-.815-3.556l.011-.005c.293-.14.635-.252.991-.32l.027-.004c.378-.082.758-.153 1.134-.24a.621.621 0 0 0 .51-.513v-.003a.863.863 0 0 0 .02-.189V8.069a.739.739 0 0 0-.027-.19l.001.005a.29.29 0 0 0-.301-.234h.001c-.178.013-.34.036-.499.07l.024-.004q-1.14.225-2.28.456l-3.7.748c-.016 0-.032.01-.048.013a.452.452 0 0 0-.39.492v-.002v7.931l.001.095c0 .408-.079.797-.224 1.152l.007-.021a2.138 2.138 0 0 1-1.436 1.235l-.015.003a4.307 4.307 0 0 1-1.067.172h-.008a1.84 1.84 0 0 1-1.919-1.533l-.001-.011a1.867 1.867 0 0 1 1.141-2.071l.013-.004a5.678 5.678 0 0 1 1.072-.305l.036-.005c.287-.06.575-.116.86-.177a.7.7 0 0 0 .6-.693v-.022v.001v-9.04c0-.129.015-.254.044-.374l-.002.011a.696.696 0 0 1 .542-.517l.004-.001c.255-.066.515-.112.774-.165c.733-.15 1.466-.3 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.4c.181-.042.407-.079.637-.104l.027-.002a.493.493 0 0 1 .554.481c.008.067.012.144.012.222v5.733z"/>
            </svg>
          </a>
          <a href="https://music.youtube.com/channel/UCRhAAlPwpnEYErqoeNhKGBg" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 48 48">
              <title>Youtube Music</title>
              <circle cx="24" cy="24" r="21.5" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="24" r="14" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round"/><path fill="black" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="m31 24l-12 7V17Z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UCLxtUxz2uR7IFqh7QNn88JQ" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 256 256">
              <title>Youtube</title>
              <path fill="white" d="M234.33 69.52a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48Zm-72.11 61.81l-48 32A4 4 0 0 1 108 160V96a4 4 0 0 1 6.22-3.33l48 32a4 4 0 0 1 0 6.66Z"/>
            </svg>
          </a>
          <a href="https://music.amazon.com/artists/B093WJ2BWP/the-gemstones" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 48 48">
              <title>Amazon Music</title>
              <circle cx="24" cy="24" r="21.5" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535a17.003 17.003 0 0 0 10.167-3.08M20.404 20.125v3.3a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-3.3m0 3.3v2m-14.004-3.2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.2m-4-5.2v5.2m4-3.2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.2"/><circle cx="31.88" cy="17.675" r=".7" fill="black"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="M31.88 20.125v5.3m-5.34-.452a2.249 2.249 0 0 0 1.646.447h.448a1.324 1.324 0 0 0 1.322-1.325h0a1.324 1.324 0 0 0-1.322-1.325h-.897a1.323 1.323 0 0 1-1.322-1.325h0a1.323 1.323 0 0 1 1.322-1.325h.449a2.25 2.25 0 0 1 1.644.448m7.77 3.85a2 2 0 0 1-1.737 1.007h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a1.999 1.999 0 0 1 1.735 1.004"/>
            </svg>
          </a>
        </div>
      </section>

      <section className={styles.centerFlex}>
        <h1>Watch</h1>

        <div className={styles.featuredContainer1}>
          <div className={styles.featuredContainer2}>
            <Iframe 
              url="https://www.youtube.com/embed/FYSj5IUTe54"
              className={styles.featured}
            />
          </div>
        </div>
      </section>

    </div>
  )
}


export default Gallery
