import React from 'react'
import s from './Menu.module.scss'
import { changeCategory, setOrder, fetchDevice, sortPriceFrom, sortPriceTo } from '../../redux/slices/deviceSlice'
import { categoriesList } from '../../utils/localData'
import { useDispatch, useSelector } from 'react-redux'
import { setIsOpen } from '../../redux/slices/cartSlice'
const Menu = ({ header }) => {
    const { filter } = useSelector(state => state.device)
    const dispatch = useDispatch()
    const { isOpen } = useSelector(state => state.cart)
    const [from, setFrom] = React.useState('')
    const [to, setTo] = React.useState('')

    React.useEffect(() => {
        dispatch(fetchDevice());
    }, [dispatch, filter])

    const sortFromToHandler = (to, from) => {
        dispatch(sortPriceTo(to))
        dispatch(sortPriceFrom(from))
    }

    const resetPrice = (to, from) => {
        dispatch(sortPriceTo(setTo(to)))
        dispatch(sortPriceFrom(setFrom(from)))
    }

    return (
        <div
            className={isOpen ? s.active : `${s.menu}`}
            onClick={() => dispatch(setIsOpen(isOpen))}>
            <div className={s.blur}>
                <div className={s.menu__content} onClick={e => e.stopPropagation()}>
                    <div
                        className={s.menu__header}> {header}
                    </div>
                    <div className={s.sortFrom}>
                        <div className={s.sortForm__inner}>
                            <b >Price:</b>
                            <div className={s.inputz}>
                                <input
                                    value={from}
                                    placeholder={0}
                                    onChange={(e) => setFrom(+e.target.value)} />
                                <input
                                    value={to}
                                    placeholder={0}
                                    onChange={(e) => setTo(+e.target.value)} />
                                <div className={s.someBtns}>
                                    <button
                                        onClick={() => sortFromToHandler(to, from)}
                                        className={s.showBtn}>show</button>
                                    <button
                                        onClick={() => resetPrice(0, 0)}
                                        className={s.resetBtn}>reset</button>
                                </div>
                                <div className={s.lowHigh}>
                                    <span onClick={() => dispatch(setOrder('desc'))}><h4>high</h4>&darr; </span>
                                    <span onClick={() => dispatch(setOrder('asc'))}> &uarr;<h4>low</h4> </span>
                                </div>
                            </div>
                        </div>
                        <div className={s.categoryBlock}>
                            <ul className={s.categories__wrapperd}>
                                {categoriesList.map((i, index) => <p key={index}
                                    className={`${i === filter.category ? s.unactive : s.actived}`}
                                    onClick={() => dispatch(changeCategory(i))}>
                                    {i}
                                </p>)}
                            </ul>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Menu





