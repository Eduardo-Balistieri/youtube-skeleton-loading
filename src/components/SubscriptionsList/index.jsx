import React from 'react'

import { MdKeyboardArrowRight } from 'react-icons/md'

import styles from './styles.module.css'
import LoadingSubscriptionsList from '../Loading/LoadingSubscriptionsList'

const subscriptions = [
    '--il-orange',
    '--il-bluetiful',
    '--il-rose',
    '--il-pink',
    '--il-lilac',
]

const SubscriptionsList = ({ isLoading }) => {

    let listContent = <LoadingSubscriptionsList listLenght={5} />

    if (!isLoading)
        listContent = subscriptions.map((subscription, index) => (
            <li
                key={index}
                className={styles.subscription}
                style={{ backgroundColor: `var(${subscription})` }}
            />
        ))


    return (
        <section className={styles.subscriptionsList}>

            <div className={styles.list}>
                <ul>
                    {listContent}
                </ul>
            </div>

            <div className={styles.icon}>
                <MdKeyboardArrowRight />
            </div>
        </section>
    )
}

export default SubscriptionsList