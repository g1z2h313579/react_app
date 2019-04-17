import React from 'react';
import titleStyle from './title.module.scss'

import Back from "../back/back"

const Title = (props)=>{
    return (
        <div className = {titleStyle.title}>
            <Back {...props} />
            <h2> { props.title } </h2>
        </div>
    )
}

export default Title;