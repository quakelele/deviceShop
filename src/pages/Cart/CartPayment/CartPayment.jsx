import React from 'react'
import s from './CartPayment.module.scss'
import { Link } from 'react-router-dom'
const CartPayment = () => {
    return (
        <div className={s.wrapper__payment}>
            <h2>Payment method</h2>
            <h3><Link style={{ textDecoration: 'none' }}>Login or register</Link> to select a payment method</h3>
        </div>
    )
}

export default CartPayment