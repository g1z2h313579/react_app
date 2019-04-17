import React from 'react';
// import {  NavLink } from 'react-router-dom'
import style from './assets/css/pinlundianzan.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment, faShareAlt, faThumbsUp}  from '@fortawesome/free-solid-svg-icons'

class Pinlundianzan extends React.Component{

    render(){
        return (
           <div className={style.pinlundianzan}>
             <div>
              <FontAwesomeIcon icon={faShareAlt} transform="shrink--20" className={style.tu}/>
              <span> { this.props.disData.pinglundianzan.share } </span>
             </div>
             <div>
            <FontAwesomeIcon icon={faComment} transform="shrink--20" className={style.tu}/>
                 <span> { this.props.disData.pinglundianzan.comment } </span>
             </div>
             <div>
            <FontAwesomeIcon icon={faThumbsUp} transform="shrink--20" className={style.tu}/>
                 <span> { this.props.disData.pinglundianzan.thumbsUp } </span>
             </div>
             
           </div>
        )
    }
}


export default Pinlundianzan;