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


        </div >
    )
}

export default Sort

// {/* <p>rating - ASC)</p>
//  <p>price (ASC)</p>
//  <p>name (ASC)</p> */}

{/* <span onClick={dropDown} className={s.sortingNames}> sorting for:<h4>{sort.name}</h4></span>
            {dropMenu ? (
                <div className={s.popUp}>
                    <ul className={s.text}>
                        {sortingList.map((item, index) =>
                            <li key={index}
                                onClick={() => clickSort(item)}
                                className={`${sort.sortProperty === item.sortProperty ? s.activated : ''}`} > {item.name}
                            </li>)}
                    </ul>
                </div>) : ''
            } */}