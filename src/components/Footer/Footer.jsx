import React from 'react'
import { Link } from 'react-router-dom'
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.navi}>
                    <nav className={s.left}>
                        <Link><li><h3>For buyers</h3></li></Link>
                        <li>How to make an order</li>
                        <li>Payment Methods</li>
                        <li>Delivery</li>
                        <li>Purchase returns</li>
                        <li>A refund</li>
                        <li>Sales rules</li>
                        <li>Rules for using the trading platform</li>
                        <li>Questions and answers</li>
                        <li>Compatibility check </li>
                    </nav>
                    <nav className={s.midle}>
                        <Link><li><h3>Sell ​​on Wildberries</h3></li></Link>
                        <li>For carriers</li>
                        <li>Partner pick-up point</li>
                        <li>Franchise point of delivery</li>
                        <li>Our projects</li>
                        <li>WB Guru</li>
                        <li>Employment</li>
                        <li>Digital goods</li>
                        <li>WB Travel</li>
                        <li>WB Stream</li>
                        <li>Sell ​​on Wildberries</li>
                    </nav>
                    <nav className={s.right}>
                        <Link><li><h3>Company</h3></li></Link>
                        <li>About Us</li>
                        <li>Requisites</li>
                        <li>Press center</li>
                        <li>Contacts</li>
                        <li>WB Guru</li>
                        <li>Bug Bounty</li>
                        <li>WB.Tech</li>
                    </nav>
                    <nav className={s.rright}>
                        <Link><li><h3>We are in social networks</h3></li></Link>
                        <li>We are in social networks</li>
                        <li>In contact with</li>
                        <li>Classmates</li>
                        <li>YouTube</li>
                        <li>Telegram</li>
                    </nav>
                </div>

            </div>




















        </div>
    )
}

export default Footer