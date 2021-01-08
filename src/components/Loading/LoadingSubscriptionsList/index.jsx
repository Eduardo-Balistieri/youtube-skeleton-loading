import React from 'react'

import styles from './styles.module.css'
import Skeleton from '../../Skeleton'


const LoadingSubscriptionsList = ({ listLenght }) => {

    let list = []

    for (let index = 0; index < listLenght; index++)
        list.push(<Skeleton key={index} className={styles.profileSkeleton} />)

    return (
        <>
            {list}
        </>
    )
}

export default LoadingSubscriptionsList