import type { NextPage } from 'next'

import styles from '../styles/Dates.module.css'

const Dates: NextPage = () => {
  return (
    <div className={styles.datesContainer}>
      <h1>Dates</h1>
      <ul className={styles.dateList}>
        <li>
          <h2>June 3, 2023</h2>
          <div className={styles.horizontal}>
            <p>Mill 77 Brewing</p>
            <p>Amesbury, MA</p>
          </div>
        </li>
        <li>
          <h2>June 24, 2023</h2>
          <div className={styles.horizontal}>
            <p>Elk&apos;s Lodge - Newburyport</p>
            <p>Newburyport, MA</p>
          </div>
        </li>
        <li>
          <h2>July 8, 2023</h2>
          <div className={styles.horizontal}>
            <p>Elk&apos;s Lodge - Dover</p>
            <p>Dover, NH</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Dates
