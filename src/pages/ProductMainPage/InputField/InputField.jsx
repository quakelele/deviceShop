import React from 'react'
import s from './InputField.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setInputz, putComment } from '../../../redux/slices/deviceSlice'

const InputField = ({ obj }) => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = React.useState('')
    const { inputValues, product } = useSelector(state => state.device)
    React.useEffect(() => {

    }, [dispatch,inputValues])

    return (
        <div className={s.comments}>
            <input

                onChange={(e) => (setInputValue(e.target.value))}
                type="text"
            />
            <button
                onClick={() => { dispatch(setInputz(inputValue)); dispatch(putComment(obj)) }}
            >add</button>
            <div className={s.textCom}>
                <li>
                    {inputValues.map(item => <li>{item.value}</li>)}
                </li>
            </div>
        </div>
    )
}

export default InputField