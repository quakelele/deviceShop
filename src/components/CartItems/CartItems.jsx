import React from 'react'
import s from './CartItems.module.scss'
import { deleteFromFavorite } from '..//../redux/slices/favoriteSlice'
import { deleteFromCartBack, plusQuantity, minusQuantity } from '..//..//redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import liked from '..//..//img/heart-liked.png'
import unLiked from '..//..//img/heart-unliked.png'
import { Box, Rating, Typography } from '@mui/material';
const CartItems = ({ obj }) => {

    const dispatch = useDispatch()
    const classFavorite = () => {
        if (favorite.map((i) => i.id).includes(obj.id)) {
            return liked
        }
        return unLiked
    }
    const { favorite } = useSelector(state => state.favorite)

    const cartDiscount = (obj) => {
        return Math.round(obj.price * 1.3)
    }



    return (

        <div className={s.device__cart}>
            {/* <div className={s.basket}> Basket</div> */}
            <div className={s.mainFirstBlock}>
                <div className={s.first_block}>
                    <img
                        src={obj.imageUrl}
                        alt="" />
                </div>

                <div className={s.secondBlock}>
                    <h4>{obj.title}</h4>
                    <Rating className="rating" max={5} size="small" name="read-only" value={obj.rating} readOnly />
                    <p>wireless</p>
                    {/* <p>{obj.weight}kg</p> */}
                </div>
                
                <div className={s.thirdBlock}>
                    <button
                        className={obj.quantity === 1 ? s.btnPlusMinusPassive : `${s.btnPlusMinus}`}
                        onClick={() => dispatch(minusQuantity(obj))}><p>-</p></button>
                    <span>

                        {obj.quantity}
                    </span>
                    <button className={s.btnPlusMinus}
                        onClick={() => dispatch(plusQuantity(obj))}><p>+</p></button>
                </div>
            </div>
            <div className={s.mainSecondBlock}>
                <span ><h3>
                    {obj.price * obj.quantity}
                    $</h3></span>
                <span><p>{cartDiscount(obj) * obj.quantity} $</p></span>
                <div className={s.favoritesAndDelete}>
                    <img className={s.one}
                        onClick={() => { ; dispatch(deleteFromFavorite(obj)) }}
                        src={classFavorite()}
                        width={15}
                        height={15}
                        alt=""
                    />
                    <p className={s.two} onClick={() => dispatch(deleteFromCartBack(obj.id))} >&#10006;</p>
                </div>
            </div>

        </div >


    )
}

export default CartItems







{/* <p> weight: <b>{obj.weight}  gram</b></p> */ }
{/* <p>{obj.description.length > 300 && obj.description.substring(0, 301) + '...'}</p>  */ }