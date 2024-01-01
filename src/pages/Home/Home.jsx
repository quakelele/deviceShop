import React from 'react'
import s from "./Home.module.scss"
import { useSelector, useDispatch } from 'react-redux'
import Sceleton from '../Sceleton/Sceleton'
import Sort from '..//..//components/Sort/Sort'
import Device from '..//../components/Device/Device'
import { fetchDevice } from '../../redux/slices/deviceSlice'
const Home = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchDevice())
        window.scrollTo(0, 25);
    }, [dispatch]);


    const { device, loading } = useSelector(state => state.device)
    const sceletonRender = [...new Array(8)].map((_, index) => <Sceleton key={index} />)
    const deviceRender = (device.map((obj, index) => <Device key={index} obj={obj} />))

    return (
        <div >

            <div className={s.wrapper}>

            </div>
            <div className={s.device} >
                {loading ? sceletonRender : deviceRender}
            </div>
        </div>
    )
}

export default Home