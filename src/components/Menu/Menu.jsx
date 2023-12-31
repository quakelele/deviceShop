import React from 'react'
import s from './Menu.module.scss'
import { changeCategory, fetchDevice, sortPriceFrom, sortPriceTo } from '../../redux/slices/deviceSlice'
import { categoriesList } from '../../utils/localData'
import { useDispatch, useSelector } from 'react-redux'
import { setIsOpen } from '../../redux/slices/cartSlice'
const Menu = ({ header }) => {
    const dispatch = useDispatch()
    const { filter } = useSelector(state => state.device)
    const { isOpen } = useSelector(state => state.cart)
    const [from, setFrom] = React.useState('')
    const [to, setTo] = React.useState('')

    const sortFromToHandler = (to, from) => {
        dispatch(sortPriceTo(to))
        dispatch(sortPriceFrom(from))
    }


    return (
        <div
            className={isOpen ? s.active : `${s.menu}`}
            onClick={() => dispatch(setIsOpen(isOpen))}>
            <div className={s.blur}>
                <div className={s.menu__content} onClick={e => e.stopPropagation()}>
                    <div
                        className={s.menu__header}> {header}</div>
                    <ul className={s.categories__wrapperd}>

                        <div className={s.sortFrom}>
                            <b >From</b>
                            <input

                                onChange={(e) => setFrom(e.target.value)} />
                            <b >To</b>
                            <input
                                onChange={(e) => setTo(e.target.value)} />
                        </div>
                        <div>
                            <button 
                            onClick={() => sortFromToHandler(to,from)}
                            className={s.showBtn}>show</button>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu





