import React from 'react'

import styles from './styles.module.css'
import Skeleton from '../../Skeleton'


const LoadingHeader = () => (
    <>
        <div className={styles.desktopOptionsSkeleton}>
            <Skeleton className={styles.optionSkeleton} />
            <Skeleton className={styles.optionSkeleton} />
            <Skeleton className={styles.optionSkeleton} />
            <Skeleton className={styles.optionSkeleton} />
        </div>


        <div className={styles.mobileOptionsSkeleton}>
            <Skeleton className={styles.optionSkeleton} />
            <Skeleton className={styles.optionSkeleton} />
        </div>
    </>
)

export default LoadingHeader