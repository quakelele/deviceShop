import React from 'react'
import s from './CartDelivery.module.scss'
import { Link } from 'react-router-dom'
const CartBottom = () => {
    return (
        <div className={s.wrapper__delivery}>
            <h2>Delivery method</h2>
            <Link style={{ textDecoration: 'none' }}><h3>Select delivery address</h3></Link>
        </div>
    )
}

export default CartBottom