import React from 'react'
import s from './InputField.module.scss'
import { useDispatch, useSelector } from 'react-redux'
// import { addComment,commentDelete, commentFetch, postComment } from '../../../redux/slices/commentSlice'

const InputField = ({obj}) => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = React.useState('')
    const { comment } = useSelector(state => state.comment)
    console.log(comment)

    React.useEffect(() => {
        // dispatch(commentFetch())
    }, [])

    return (
        <div className={s.comments}>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
            />
            <button 
            // onClick={() => dispatch(postComment(inputValue, obj))}
            
            >add</button>
            <div className={s.textCom}>
                <h3 >
                    <p style={{ color: "black" }}>
                        {comment.map(i => <li>
                            <span>{i.title}
                                <button
                                // onClick={() => dispatch(commentDelete())}
                                    className={s.but}>
                                    <b>x</b>
                                </button>
                            </span>
                        </li>)}
                    </p>
                </h3>
            </div>
        </div>
    )
}

export default InputField