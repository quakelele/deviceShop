import React from 'react'
import s from './CartDetails.module.scss'
import { Link } from 'react-router-dom'
const CartDetails = () => {
    return (
        <div className={s.wrapper__details}>
            <h2>My details</h2>
            <h3><Link style={{ textDecoration: 'none' }}>Login or register</Link> to place an order</h3>
        </div>
    )
}

export default CartDetails