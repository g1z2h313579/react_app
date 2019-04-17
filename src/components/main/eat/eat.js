import React from 'react';
import style from './eat.module.scss'

import Back from '../../common/back/back'
import Yundong from './yundong/yundong'
import Caipu from './caipu/caipu'
import Biji from './biji/biji'


class Eat extends React.Component{
    render(){
        return(
            <div className={style.eat}>
               <div className={style.top}>
                  <div className={style.back}><Back {...this.props}/></div>
                  <span>健身七分吃</span>
               </div>
               <Yundong/>
               <Caipu/>
               <Biji/>
            </div>
        )

    }
}

export default Eat