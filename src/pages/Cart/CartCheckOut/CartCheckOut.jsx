import React from 'react'
import s from './CartCheckOut.module.scss'
import { Link } from 'react-router-dom'
import { useSelector, } from 'react-redux'
const CartCheckOut = () => {
    const { cart } = useSelector(state => state.cart)

    const sumCount = () => {
        return cart.reduce((sum, obj) => sum + Number(obj.price * obj.quantity), 0)
    }

    const quantity = () => {
        return cart.reduce((sum, obj) => sum + Number(obj.quantity), 0)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <Link style={{ textDecoration: 'none' }} > <h4>Select delivery address</h4></Link>
            </div>
            <div className={s.second}>
                <span>Products, {quantity()} pc.</span>
                <span>{sumCount()} $</span>
            </div>
            <div className={s.third}>
                <span><h3>Total</h3></span>
                <span><h3>{sumCount()} $</h3></span>
            </div>
            <div className={s.fourth}><button className={s.buttonz}>Order</button>
            </div>
            <div>
                <p className={s.rules}>&#10004; I agree with the <Link style={{ textDecoration: 'none' }}>rules for using the trading platform</Link> and returning</p>
            </div>
        </div>
    )
}

export default CartCheckOut