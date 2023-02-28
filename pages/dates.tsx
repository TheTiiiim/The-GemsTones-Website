import type { NextPage } from 'next'

import styles from '../styles/Dates.module.css'

const Dates: NextPage = () => {
  return (
    <div className={styles.datesContainer}>
      <h1>Upcoming Events</h1>
      <ul className={styles.dateList}>
        
        <li>
          <div className={styles.dateTime}><h2>June 3, 2023</h2>&#32;<span className={styles.time}>(4:00pm - 7:30pm)</span></div>
          <p className={styles.venue}>Mill 77 Brewing</p>
          <p className={styles.tickets}>Free entry</p>
          <p className={styles.cityState}>Amesbury, MA</p>
          <p className={styles.address}>77 Elm St</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>June 24, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Newburyport, MA</p>
          <p className={styles.address}>25 Low St</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>July 8, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Dover, NH</p>
          <p className={styles.address}>282 Durham Rd</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>July 15, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Rockinghm Ballroom</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Newmarket, NH</p>
          <p className={styles.address}>22 Ash Swamp Rd</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>July 22, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $15</p>
          <p className={styles.cityState}>Manchester, NH</p>
          <p className={styles.address}>290 Granite St</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>July 29, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Nashua, NH</p>
          <p className={styles.address}>12 Murphy Dr</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>August 12, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 10:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Tewksbury, MA</p>
          <p className={styles.address}>777 South St</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>September 16, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 10:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Wakefield, MA</p>
          <p className={styles.address}>63 Bay State Rd</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>September 30, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Keene, NH</p>
          <p className={styles.address}>81 Roxbury St</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>October 28, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $15</p>
          <p className={styles.cityState}>Manchester, NH</p>
          <p className={styles.address}>290 Granite St</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>November 18, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Nashua, NH</p>
          <p className={styles.address}>12 Murphy Dr</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>November 25, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Dover, NH</p>
          <p className={styles.address}>282 Durham Rd</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>December 2, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 10:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Wakefield, MA</p>
          <p className={styles.address}>63 Bay State Rd</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>December 9, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 10:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Tewksbury, MA</p>
          <p className={styles.address}>777 South St</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>December 23, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $20</p>
          <p className={styles.cityState}>Newburyport, MA</p>
          <p className={styles.address}>25 Low St</p>
          <div className={styles.directionsButton}><a href="">Directions</a></div>
        </li>
        
      </ul>
    </div>
  )
}

export default Dates
