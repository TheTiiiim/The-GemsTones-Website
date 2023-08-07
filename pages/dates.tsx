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
        
        {/* <li>
          <div className={styles.dateTime}><h2>June 3, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Mill 77 Brewing</p>
          <p className={styles.tickets}>Free entry</p>
          <p className={styles.cityState}>Amesbury, MA</p>
          <p className={styles.address}>77 Elm St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/HJVhzN2AftwmzAkv9" rel="noreferrer">Directions</a></div>
        </li> 
        
        <li>
          <div className={styles.dateTime}><h2>June 17, 2023</h2>&#32;<span className={styles.time}>(2:00pm - 5:00pm)</span></div>
          <p className={styles.venue}>The Farm at Eastman&apos;s Corner</p>
          <p className={styles.tickets}>Free entry</p>
          <p className={styles.cityState}>Kensington, NH</p>
          <p className={styles.address}>267 South Rd</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/Zj8forMucSkAHgoM6" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>June 24, 2023</h2>&#32;<span className={styles.time}>(3:00pm - 6:00pm)</span></div>
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
          <div className={styles.dateTime}><h2>July 22, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $15</p>
          <p className={styles.cityState}>Manchester, NH</p>
          <p className={styles.address}>290 Granite St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/5QPx9PPgQpgP69s18" rel="noreferrer">Directions</a></div>
        </li> */}
        
        <li>
          <div className={styles.dateTime}><h2>August 17, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 8:00pm)</span></div>
          <p className={styles.venue}>Millyard Amphitheater</p>
          <p className={styles.tickets}>Free entry</p>
          <p className={styles.cityState}>Amesbury, MA</p>
          <p className={styles.address}>8 Millyard</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/YuQA4fTUSS16MkhU6" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>August 25, 2023</h2>&#32;<span className={styles.time}>(5:00pm - 7:00pm)</span></div>
          <p className={styles.venue}>Henniker Brewing Company</p>
          <p className={styles.tickets}>Free Admission</p>
          <p className={styles.cityState}>Henniker, NH</p>
          <p className={styles.address}>129 Centervale Rd</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/QBedfYWv4JPZpFad8" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>August 26, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Mill 77 Brewing</p>
          <p className={styles.tickets}>Tickets at the door - $10</p>
          <p className={styles.cityState}>Amesbury, MA</p>
          <p className={styles.address}>77 Elm St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/HJVhzN2AftwmzAkv9" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>August 27, 2023</h2>&#32;<span className={styles.time}>(10:00am - 1:00pm)</span></div>
          <p className={styles.venue}>Hedgehog General Store</p>
          <p className={styles.tickets}>Free Admission</p>
          <p className={styles.cityState}>Amesbury, MA</p>
          <p className={styles.address}>6 Morrill St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/yCetk5EdrMHTVbuw5" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>September 4, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 9:30pm)</span></div>
          <p className={styles.venue}>Sea Shell Stage</p>
          <p className={styles.tickets}>Free entry</p>
          <p className={styles.cityState}>Hampton, NH</p>
          <p className={styles.address}>180 Ocean Blvd</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/yrrgyK6EJQ1YY2Tc8" rel="noreferrer">Directions</a></div>
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
          <div className={styles.dateTime}><h2>October 14, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 10:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $10</p>
          <p className={styles.cityState}>Keene, NH</p>
          <p className={styles.address}>81 Roxbury St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/Y5DxbAzFnBPu28dn8" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>October 15, 2023</h2>&#32;<span className={styles.time}>(7:00pm - 10:00pm)</span></div>
          <p className={styles.venue}>Newburyport Brewing Company</p>
          <p className={styles.tickets}>Free entry</p>
          <p className={styles.cityState}>Newburyport, MA</p>
          <p className={styles.address}>4 New Pasture Rd</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/CfvAmykhjDqbco87A" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>October 28, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $10</p>
          <p className={styles.cityState}>Manchester, NH</p>
          <p className={styles.address}>290 Granite St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/5QPx9PPgQpgP69s18" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>November 18, 2023</h2>&#32;<span className={styles.time}>(6:00pm - 9:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $10</p>
          <p className={styles.cityState}>Nashua, NH</p>
          <p className={styles.address}>12 Murphy Dr</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/vRPCwRgyydqkY8C39" rel="noreferrer">Directions</a></div>
        </li>
        
        <li>
          <div className={styles.dateTime}><h2>December 23, 2023</h2>&#32;<span className={styles.time}>(3:00pm - 6:00pm)</span></div>
          <p className={styles.venue}>Elk&apos;s Lodge</p>
          <p className={styles.tickets}>Tickets at the door - $10</p>
          <p className={styles.cityState}>Newburyport, MA</p>
          <p className={styles.address}>25 Low St</p>
          <div className={styles.directionsButton}><a target="_blank" href="https://goo.gl/maps/GNckDZ5MLR3Ph5U77" rel="noreferrer">Directions</a></div>
        </li>
        
      </ul>
    </div>
  )
}

export default Dates
