import React from 'react';
import style from './assets/css/heart.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart}  from '@fortawesome/free-solid-svg-icons'

class Heart extends React.Component{
    render(){
        return(
            <div className={style.heart}>
               <FontAwesomeIcon icon={faHeart} transform="shrink--20" className={style.tu}/>
               <span>210</span>
            </div>
        )
    }
}

export default Heart