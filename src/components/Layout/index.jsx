import React from 'react'

import { FaTh, FaThList } from 'react-icons/fa'

import styles from './styles.module.css'

import Header from '../Header'
import SubscriptionsList from '../SubscriptionsList'
import Card from '../Card'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import LoadingCardListHeader from '../Loading/LoadingCardListHeader'

import { videosList } from '../../assets/videos/list'


const Layout = ({ isLoading }) => {

    return (
        <main className={styles.mainPage}>
            <Header isLoading={isLoading} />
            <SubscriptionsList isLoading={isLoading} />

            <div className={styles.desktop}>
                <Sidebar isLoading={isLoading} />

                <div className={styles.cardListContainer}>

                    <header className={styles.cardListHeader}>
                        {isLoading ? <LoadingCardListHeader /> : (
                            <>
                                <h3>Today</h3>
                                <div>
                                    <p>Manage</p>
                                    <FaTh className={styles.activeLayout} />
                                    <FaThList />
                                </div>
                            </>
                        )}
                    </header>

                    <div className={styles.cardList}>
                        {videosList.map((video, index) => (
                            <Card key={index} video={video} isLoading={isLoading} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default Layout