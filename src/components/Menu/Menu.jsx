import React from 'react'
import s from './Menu.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { setIsOpen } from '../../redux/slices/cartSlice'
const Menu = ({ header }) => {
    const dispatch = useDispatch()
    const { isOpen } = useSelector(state => state.cart)

    const items = [
        { value: 'Electronics', href: '#', icon: '' },
        { value: 'Toys', href: '#', icon: '' },
        { value: 'Home', href: '#', icon: '' },
        { value: 'Products', href: '#', icon: '' },
        { value: 'Clothes', href: '#', icon: '' },
        { value: '18+ toys', href: '#', icon: '' },
        { value: 'Sport', href: '#', icon: '' },
        { value: 'Service', href: '#', icon: '' },
    ]
    return (
        <div
            className={isOpen ? s.active : `${s.menu}`}
            onClick={() => dispatch(setIsOpen(isOpen))}>
            <div className={s.blur}>
                <div className={s.menu__content} onClick={e => e.stopPropagation()}>
                    <div
                        className={s.menu__header}> {header}</div>
                    <ul>
                        <li>
                            <a href="#">Electronics</a>
                            <a href="#">Toys</a>
                            <a href="#">Home</a>
                            <a href="#">Products</a>
                            <a href="#">Clothes</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu