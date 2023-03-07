import type { NextPage } from 'next'

import Head from 'next/head'

import styles from '../styles/Dates.module.css'

const Dates: NextPage = () => {
  return (
    <div className={styles.datesContainer}>
      <Head>
        <title>Dates - The GemsTones 50&apos;s Classics</title>
      </Head>

      <h1>Upcoming Events</h1>
      <ul className={styles.dateList}>
        
        <li>
          <div className={styles.dateTime}><h2>June 3, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Mill 77 Brewing</p>
          <p className={styles.tickets}>Free entry</p>
          <p className={styles.cityState}>Amesbury, MA</p>
          <p className={styles.address}>77 Elm St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/HJVhzN2AftwmzAkv9" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>June 24, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Newburyport, MA</p>
          <p className={styles.address}>25 Low St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/GNckDZ5MLR3Ph5U77" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>July 8, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Dover, NH</p>
          <p className={styles.address}>282 Durham Rd</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/BcBUASvHGX7iaZ3N8" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>July 15, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Rockingham Ballroom</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Newmarket, NH</p>
          <p className={styles.address}>22 Ash Swamp Rd</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/dPcT86cF1YoGDJgn8" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>July 22, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $15</p>
          <p className={styles.cityState}>Manchester, NH</p>
          <p className={styles.address}>290 Granite St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/5QPx9PPgQpgP69s18" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>July 29, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Nashua, NH</p>
          <p className={styles.address}>12 Murphy Dr</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/vRPCwRgyydqkY8C39" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>August 12, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 10:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Tewksbury, MA</p>
          <p className={styles.address}>777 South St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/AkiqkiosQSxAdyoD7" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>September 2, 2023</h2>&#32;<span className={styles.time}>(Time TBD)</span></div>
          <p className={styles.venue}>Sea Shell Stage</p>
          <p className={styles.tickets}>Free entry</p>
          <p className={styles.cityState}>Hampton, NH</p>
          <p className={styles.address}>180 Ocean Blvd</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/yrrgyK6EJQ1YY2Tc8" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>September 16, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 10:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Wakefield, MA</p>
          <p className={styles.address}>63 Bay State Rd</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/ot6BEGqPQ9RfHrDd9" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>September 30, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Keene, NH</p>
          <p className={styles.address}>81 Roxbury St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/XSPRBgwNskHW1vNw9" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>October 7, 2023</h2>&#32;<span className={styles.time}>(12:00pm - 3:00pm)</span></div>
          <p className={styles.venue}>Cider Hill Farm</p>
          <p className={styles.tickets}>Free entry</p>
          <p className={styles.cityState}>Amesbury, MA</p>
          <p className={styles.address}>45 Fern Avenue</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/LAvuPynnUKGDUjWB9" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>October 9, 2023</h2>&#32;<span className={styles.time}>(12:00pm - 3:00pm)</span></div>
          <p className={styles.venue}>Cider Hill Farm</p>
          <p className={styles.tickets}>Free entry</p>
          <p className={styles.cityState}>Amesbury, MA</p>
          <p className={styles.address}>45 Fern Avenue</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/LAvuPynnUKGDUjWB9" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>October 28, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $15</p>
          <p className={styles.cityState}>Manchester, NH</p>
          <p className={styles.address}>290 Granite St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/5QPx9PPgQpgP69s18" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>November 18, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Nashua, NH</p>
          <p className={styles.address}>12 Murphy Dr</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/vRPCwRgyydqkY8C39" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>November 25, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Dover, NH</p>
          <p className={styles.address}>282 Durham Rd</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/BcBUASvHGX7iaZ3N8" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>December 2, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 10:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Wakefield, MA</p>
          <p className={styles.address}>63 Bay State Rd</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/ot6BEGqPQ9RfHrDd9" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>December 9, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 10:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Tewksbury, MA</p>
          <p className={styles.address}>777 South St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/AkiqkiosQSxAdyoD7" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>December 23, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Newburyport, MA</p>
          <p className={styles.address}>25 Low St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/GNckDZ5MLR3Ph5U77" rel="noreferrer">Directions</a></div>
        </li>
        
      </ul>
    </div>
  )
}

export default Dates
