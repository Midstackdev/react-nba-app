import React from 'react'
import { Link } from 'react-router-dom'
import style from './footer.module.css'


const Footer = () => {

    const currentYear = () => {
        const newDate = new Date()
        return newDate.getFullYear()
    }

    return (
        <div className={style.footer}>
            <Link to="/" className={style.logo}>
                <img alt="nba_logo" src="/images/nba_logo.png"/>
            </Link>
            <div className={style.right}>
                @NBA {currentYear()} All rigths reserved.
            </div>
        </div>
    )
}

export default Footer