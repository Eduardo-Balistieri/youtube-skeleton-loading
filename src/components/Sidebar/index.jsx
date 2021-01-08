import React from 'react'

import { MdHome, MdSubscriptions, MdVideoLibrary } from 'react-icons/md'
import { FaFire } from 'react-icons/fa'

import styles from './styles.module.css'

const Sidebar = ({ isLoading }) => {

    if (isLoading)
        return <section />

    return (
        <section>
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
        </section>
    )
}

export default Sidebar