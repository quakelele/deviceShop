import React from 'react'
import s from "./Home.module.scss"
import { useSelector,  } from 'react-redux'
import Sceleton from '../Sceleton/Sceleton'
import Sort from '..//..//components/Sort/Sort'
import Device from '..//../components/Device/Device'

const Home = () => {
    const { device, loading } = useSelector(state => state.device)
    const sceletonRender = [...new Array(8)].map((_, index) => <Sceleton key={index} />)
    const deviceRender = 
    (device.map((obj, index) => <Device key={index} obj={obj} />))

    return (
        <div >

            <div className={s.wrapper}>
                <Sort />
            </div>
            <div className={s.device} >
                {loading ? sceletonRender : deviceRender}
            </div>
        </div>
    )
}

export default Home