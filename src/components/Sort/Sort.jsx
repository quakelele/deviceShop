import React from 'react'
import s from "./Sort.module.scss"
import { useSelector, useDispatch } from 'react-redux'
import { fetchDevice, sortPriceFrom,sortPriceTo } from '../../redux/slices/deviceSlice'
import { sortingList } from '..//..//utils/localData'
const Sort = () => {
    const dispatch = useDispatch()

    const [from, setFrom] = React.useState('')
    const [to, setTo] = React.useState('')

    return (
        <div className={s.wrapper}>

{/* 
            <div className={s.sortFrom}>
                <b onClick={() => dispatch(sortPriceFrom(from)) }>From</b>
                <input
                   
                    onChange={(e) => setFrom(e.target.value)} />
                     <b onClick={() => dispatch(sortPriceTo(to)) }>To</b>
                <input
                    onChange={(e) => setTo(e.target.value)} />
            </div> */}
          

        </div>


    )
}

export default Sort






