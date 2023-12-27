import React from 'react'
import s from "./Sort.module.scss"
import { sortingList } from '..//..//utils/localData'
const Sort = () => {
    const [sort, setSort] = React.useState(null)
    const [dropMenu, setDropMenu] = React.useState(false)
    const dropDown = () => { setDropMenu(!dropMenu) }

    const clickSort = (itemId) => {
        setSort(itemId)
        dropDown()
    }

    return (
        <div className={s.sort__wrapper}>
            <span
                onClick={dropDown}
                className={s.sortingNames}> sorting for:<h4>{sort.name}</h4>
            </span>
            {dropMenu ? (<div className={s.popUp}>
                <ul className={s.text}>
                    {sortingList.map((item, index) =>
                        <li key={index}
                            onClick={() => clickSort(item)}
                            className={`${sort === item.sortProperty ? s.activated : s.ebalvRot}`} > {item.name}
                        </li>)} </ul>
            </div >) : ''}

        </div >
    )
}

export default Sort
