import React from 'react'

import styles from './styles.module.css'
import Skeleton from '../../Skeleton'


const LoadingCard = () => (
    <article className={styles.cardSkeleton}>

        <Skeleton className={styles.thumbnailSkeleton} />
        
        <section className={styles.videoInformationSkeleton}>
            <Skeleton className={styles.authorProfileSkeleton} />

            <div className={styles.textDetailsSkeleton}>
                <Skeleton className={styles.authorSkeleton} />
                <Skeleton className={styles.detailsSkeleton} />
            </div>
        </section>
    </article>
)

export default LoadingCard