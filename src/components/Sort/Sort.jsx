import React from 'react'
import s from "./Sort.module.scss"
import { useSelector, useDispatch } from 'react-redux'
import { fetchDevice, sortPrice } from '../../redux/slices/deviceSlice'
import { sortingList } from '..//..//utils/localData'
const Sort = () => {
    const [sort, setSort] = React.useState('')
    const [sortType, setSortType] = React.useState({ name: "rating", sortProperty: 'rating' })
    const [dropMenu, setDropMenu] = React.useState(false)
    const dropDown = () => { setDropMenu(!dropMenu) }
    const dispatch = useDispatch()
    const clickSort = (itemId) => {
        setSort(itemId)
        dropDown()
    }


    const [from, setFrom] = React.useState(0)
    const [to, setTo] = React.useState(0)

    React.useEffect(() => {
        // dispatch(fetchDevice())

    }, [dispatch])

    return (
        <div className={s.sort__wrapper}>

            <span
                onClick={dropDown}
                className={s.sortingNames}> sorting for:<h4>{sort.name}</h4>
            </span>
            {dropMenu && (<div className={s.popUp}>
                <ul className={s.text}>
                    {sortingList.map((item, index) =>
                        <li key={index}
                            onClick={() => clickSort(item)}
                            className={sort.sortProperty === item.sortProperty ? s.activated : `${s.deactivated}`} > {item.name}
                        </li>)} </ul>
            </div >)}

        </div >
    )
}

export default Sort






