import React from 'react'

import { MdHome, MdSubscriptions, MdVideoLibrary } from 'react-icons/md'
import { FaFire } from 'react-icons/fa'

import styles from './styles.module.css'

const Footer = () => (
    <footer className={styles.footer}>

        <div className={styles.option}>
            <div className={styles.icon}>
                <MdHome />
            </div>
            <p>Home</p>
        </div>

        <div className={styles.option}>
            <div className={styles.icon}>
                <FaFire />
            </div>
            <p>Trending</p>
        </div>

        <div className={`${styles.option} ${styles.optionActive}`}>
            <div className={styles.icon}>
                <MdSubscriptions />
            </div>
            <p>Subscriptions</p>

        </div>

        <div className={styles.option}>
            <div className={styles.icon}>
                <MdVideoLibrary />
            </div>
            <p>Library</p>
        </div>
    </footer>
)

export default Footer