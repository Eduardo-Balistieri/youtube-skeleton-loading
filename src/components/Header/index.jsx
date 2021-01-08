import React from 'react'

import { MdSearch, MdApps } from 'react-icons/md'
import { IoMdVideocam } from 'react-icons/io'
import { FaBell } from 'react-icons/fa'

import brand from '../../assets/images/brand.png'
import styles from './styles.module.css'
import LoadingHeader from '../Loading/LoadingHeader'


const Header = ({ isLoading }) => (
    <header className={styles.header}>

        <div>
            <div className={styles.desktopHamburgerMenu}>
                <span />
            </div>

            <div className={styles.brand}>
                <img src={brand} alt="Youtube brand" />
            </div>
        </div>


        {!isLoading && (
            <div className={styles.desktopSearchInput}>
                <input type="text" placeholder="Search" autoComplete="off" />
                <button>
                    <MdSearch />
                </button>
            </div>
        )}

        {isLoading ?
            <LoadingHeader /> :
            (
                <>
                    <div className={styles.desktopOptions}>
                        <div className={styles.option}>
                            <IoMdVideocam />
                        </div>
                        <div className={styles.option}>
                            <MdApps />
                        </div>
                        <div className={styles.option}>
                            <FaBell />
                        </div>

                        <div className={styles.profile} />
                    </div>


                    <div className={styles.mobileOptions}>
                        <div className={styles.searchBox}>
                            <MdSearch />
                        </div>
                        <div className={styles.profile} />
                    </div>
                </>
            )}
    </header>
)

export default Header