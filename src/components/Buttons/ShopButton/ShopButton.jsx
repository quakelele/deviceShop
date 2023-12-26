import React from 'react'
import { useSelector } from 'react-redux'
import s from './ShopButton.module.scss'
import { Link } from 'react-router-dom'
import { BsBasket3, BsGeoAlt, BsHeart } from "react-icons/bs";

const ShopButton = () => {
    const favorite = useSelector(state => state.favorite.favorite)
    const { cart } = useSelector(state => state.cart)
    const [open, setOpen] = React.useState(false)
 
    const sumBasketCount = () => {
        return cart.reduce((sum, obj) => sum + Number(obj.quantity), 0)
    }
    
    return (
        <div className={s.shopping__wrapper}>
            <div className={s.basket}>
                <Link to="cart">
                    <span>
                        <BsBasket3 onClick={() => setOpen(!open)} />
                    </span>
                </Link>
                <span>
                    <div className={s.basket2}><h5>Basket</h5> <div><h6>
                        {cart.length ? sumBasketCount() : ''}
                        {/* {cart.length ? cart.length : ''} */}
                    </h6></div> </div>
                </span>
            </div>
            <div>
                <div className={s.circle__textOne} >   </div>
            </div>

            <div className={s.headerBtn}>
                <div className={s.favorite__flex}>
                    <div className={s.favorite__heart}>
                        <Link to="favorite">
                            <span>
                                <BsHeart />
                            </span>
                        </Link>
                        <span>
                            <div className={s.favorites2}><h5>Favorites</h5> <div><h6>{favorite.length ? favorite.length : ''}</h6></div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div ><span><BsGeoAlt /> <h5>Adresses</h5></span></div>
        </div>
    )
}

export default ShopButton