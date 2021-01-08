import React from 'react'

import styles from './styles.module.css'
import Skeleton from '../../Skeleton'


const LoadingCardListHeader = () => (
    <Skeleton className={styles.titleSkeleton} />
)

export default LoadingCardListHeader