import React from 'react'
import s from './Favorite.module.scss'
import FavoriteItem from '..//../components/FavoriteItem/FavoriteItem'
import { useSelector } from 'react-redux'
const Favorite = () => {
    const { favorite } = useSelector(state => state.favorite)
    return (

        <div className={s.favoritesWrapper}>
            <h4>Welcome to my favorite devices</h4>
            <div className={s.device__} >
                {favorite.map((obj => <FavoriteItem key={obj.id} id={obj.id} obj={obj} />))}
            </div >
        </div>

    )
}

export default Favorite