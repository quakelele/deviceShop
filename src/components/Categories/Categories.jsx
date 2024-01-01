import React from 'react'
import s from './Categories.module.scss'
import { categoriesList } from '../../utils/localData'
import { changeCategory, fetchDevice } from '../../redux/slices/deviceSlice'
import { useDispatch, useSelector } from 'react-redux'

const Categories = ({ isOpen }) => {
    const dispatch = useDispatch()
    
    const { filter } = useSelector(state => state.device)
    // const category = filter.category ? `category=${filter.category}` : ''
    React.useEffect(() => {
        dispatch(fetchDevice(filter));

    }, [dispatch, filter])

    return (


        <div className={s.categories__wrapper}>
            <div className={s.menu__content} onClick={e => e.stopPropagation()}>

                <ul className={s.categories__wrapperd}>

                    {categoriesList.map((i, index) => <p key={index}
                        className={`${i === filter.category ? s.unactive : s.actived}`}
                        onClick={() => dispatch(changeCategory(i))}>

                        {i}
                    </p>)}

                </ul>
            </div>
        </div>
    )
}
export default Categories
