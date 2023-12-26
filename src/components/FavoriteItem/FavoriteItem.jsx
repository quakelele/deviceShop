import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    // cartHandler,
    addToCart
} from '../../redux/slices/cartSlice'
import { addToFavorites  } from '../../redux/slices/favoriteSlice'
import liked from '..//..//img/heart-liked2.png'
import s from './FavoriteItem.module.scss'


const FavoriteItem = ({ obj }) => {
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const cartDiscount = (obj) => { return Math.round(obj.price * 1.3) }

    return (
        <div className={s.favorite}>
            <div className={s.favorite__first}>
                <img width={155}
                    src={obj.imageUrl}
                    alt=""
                    className={s.umageUrlFav}
                />
                <span className={s.title}>{obj.title}</span>
            </div>
            <div className={s.favorite__price}>
                <div className={s.favorite__text}>
                    <p>Price: {cartDiscount(obj)} $</p>
                    <h2 className={s.title2}>{obj.price} $</h2>
                </div>
                <div className={s.favorite__button}>

                    <button className={`${cart.map(item => item.id).includes(obj.id) ? 'device_green_btn' : 'device_buy_btn'}`}
                        onClick={() => dispatch(addToCart(obj))} >buy
                    </button>
                    

                    <div onClick={() => dispatch(addToFavorites(obj))} className={s.border}>
                        <img
                            src={liked}
                            width={30}
                            height={30}
                            alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FavoriteItem