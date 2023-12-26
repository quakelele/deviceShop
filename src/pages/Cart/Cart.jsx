import React from 'react'
import s from './Cart.module.scss'
import CartItems from '..//../components/CartItems/CartItems'
import EmptyCart from '../Cart/EmptyCart'
import { useSelector } from 'react-redux'
import CartDelivery from './CartDelivery/CartDelivery'
import CartCheckOut from './CartCheckOut/CartCheckOut'
import CartPayment from './CartPayment/CartPayment'
import CartDetails from './CartDetails/CartDetails'

const Cart = () => {

  const { cart } = useSelector(state => state.cart)
  const sumBasketCount = () => {
    return cart.reduce((sum, obj) => sum + Number(obj.quantity), 0)
}

  return (
    <div className={s.wrapperMain}>
      {cart.length ? <div className={s.wrapperD}>
        <div className={s.flexed}>
          <div className={s.secondWrapper}>
            <div className={s.firstWrapper}>
              <div className={s.basket}>Basket
                <div>
                  <p>{sumBasketCount()}</p></div>
              </div>{cart.map(obj =>
                <CartItems
                  key={obj.id}
                  obj={obj}
                />)}
            </div>
          </div>
          <CartDelivery />
          <div className={s.PaymentDetails}>
            <CartPayment />
            <CartDetails />
          </div>
        </div>
        <div className={s.cartCheckOut}>
          <CartCheckOut />
        </div>
      </div> : <EmptyCart />}

    </div >
  )
}

export default Cart
