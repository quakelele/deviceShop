import React from 'react'
import s from './Categories.module.scss'
import { categoriesList } from '../../utils/localData'
import { changeCategory } from '../../redux/slices/deviceSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
    BsPersonCircle,
    BsEmojiSmile,
    BsGearFill,
    BsFillFileBreakFill
} from 'react-icons/bs'
const Categories = ({ isOpen }) => {

    const dispatch = useDispatch()
    const { filter } = useSelector(state => state.device)
    return (
        <div >

            <div className={s.menu__category}>


                <ul className={s.categories__wrapper}>
                    {categoriesList.map((item, index) =>
                        <li key={index}
                            className={`${item === filter.category ? s.active : s.categories__list}`}
                            onClick={() => dispatch(changeCategory(item))}
                        >{item}
                        </li>)}
                </ul>

            </div>

        </div >
    )
}
export default Categories
