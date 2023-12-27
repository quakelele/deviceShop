import React from 'react'
import s from './Menu.module.scss'
import { changeCategory, fetchDevice } from '../../redux/slices/deviceSlice'
import { categoriesList } from '../../utils/localData'
import { useDispatch, useSelector } from 'react-redux'
import { setIsOpen } from '../../redux/slices/cartSlice'
const Menu = ({ header }) => {
    const dispatch = useDispatch()
    const { filter } = useSelector(state => state.device)
    const { isOpen } = useSelector(state => state.cart)

    const category = filter.category ? `category=${filter.category}` : ''
    React.useEffect(() => {
        dispatch(fetchDevice(category));
    }, [dispatch, category])


    return (
        <div
            className={isOpen ? s.active : `${s.menu}`}
            onClick={() => dispatch(setIsOpen(isOpen))}>
            <div className={s.blur}>
                <div className={s.menu__content} onClick={e => e.stopPropagation()}>
                    <div
                        className={s.menu__header}> {header}</div>
                    <ul className={s.categories__wrapperd}>

                        {categoriesList.map((i,index) => <li key={index}
                            className={`${i === filter.category ? s.unactive : s.actived}`}
                            onClick={() => dispatch(changeCategory(i))}>

                            {i}
                        </li>)}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu