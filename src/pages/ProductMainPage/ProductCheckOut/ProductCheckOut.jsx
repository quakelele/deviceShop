import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import s from './ProductCheckOut.module.scss'
import { addToCart } from '../../../redux/slices/cartSlice'
const ProductCheckOut = () => {
    const { cart } = useSelector((state) => state.cart);
    const { product } = useSelector((state) => state.device);
    const dispatch = useDispatch();
    const sumCount = () => {
        return cart.reduce((sum, obj) => sum + Number(obj.price * obj.quantity), 0);
    };
    const quantity = () => {
        return cart.reduce((sum, obj) => sum + Number(obj.quantity), 0);
    };
    // const classBuy = (obj) => {
    //     if (cart.map((item) => item.title).includes(product.title)) {
    //         return "device_green_btn";
    //     }
    //     return "device_buy_btn";
    // };
    return (
        <div className={s.wrapperCheck}>
            <div className={s.title}>
                <Link style={{ textDecoration: "none" }}>
                    {" "}
                    <h4>Select delivery address</h4>
                </Link>
            </div>
            <div className={s.second}>
                <span>
                    Products,
                    {quantity()}
                    pc.
                </span>
                <span>{sumCount()}$</span>
            </div>
            <div className={s.third}>
                <span>
                    <h3>Total</h3>
                </span>
                <span>
                    <h3>{sumCount()}$</h3>
                </span>
            </div>
            <div className={s.fourth}>
                <button
                    className={s.buttonz}
                    onClick={() => dispatch(addToCart(product))}
                >
                    buy
                </button>
            </div>
            <div>
                <p className={s.rules}>
                    &#10004; I agree with the{" "}
                    <Link style={{ textDecoration: "none" }}>
                        rules for using the trading platform
                    </Link>{" "}
                    and returning
                </p>
            </div>
        </div>
    )
}

export default ProductCheckOut