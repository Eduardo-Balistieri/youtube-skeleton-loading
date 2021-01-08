import React from 'react'

import styles from './styles.module.css'

const Skeleton = ({ className }) => (
    <div className={`${styles.skeleton} ${className}`} />
)

export default Skeleton