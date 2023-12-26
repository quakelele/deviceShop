import React from 'react'
import s from './Sceleton.module.scss'

import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader className={s.wrapperSceleton}

        speed={1}
        width={250}
        height={310}
        viewBox="0 0 250 310"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
        {...props}
    >
        <rect x="31" y="1" rx="53" ry="53" width="177" height="177" />
        <rect x="9" y="185" rx="5" ry="5" width="224" height="17" />
        <rect x="9" y="245" rx="5" ry="5" width="108" height="45" />
        <rect x="8" y="214" rx="0" ry="0" width="108" height="20" />
        <rect x="165" y="216" rx="0" ry="0" width="66" height="30" />
        <rect x="183" y="254" rx="41" ry="41" width="33" height="33" />
    </ContentLoader>
)

export default MyLoader