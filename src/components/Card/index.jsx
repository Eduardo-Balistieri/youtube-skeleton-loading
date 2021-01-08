import React from 'react'

import { MdMoreVert } from 'react-icons/md'

import styles from './styles.module.css'
import LoadingCard from '../Loading/LoadingCard'


const Card = ({ video, isLoading }) => {

    const { thumbnail, authorProfile, title, authorName, views, date } = video

    if (isLoading)
        return <LoadingCard />

    return (
        <article className={styles.card}>
            <div className={styles.thumbnail} style={{ backgroundColor: `var(${thumbnail})` }} />

            <section className={styles.videoInformation}>
                <div className={styles.authorProfile} style={{ backgroundColor: `var(${authorProfile})` }} />

                <div className={styles.textDetails}>
                    <h5>{title}</h5>
                    <p>
                        <span>{authorName}</span>
                        <span>•</span>
                        <span>{views} views</span>
                        <span>•</span>
                        <span>{date}</span>
                    </p>
                </div>

                <div className={styles.icon}>
                    <MdMoreVert />
                </div>

            </section>

        </article>
    )
}

export default Card