import React from 'react';
// import {  NavLink } from 'react-router-dom'

import style from './assets/css/auth.module.scss';
import tu from './assets/img/t1.png'

class Auth extends React.Component{
    render(){
        return (
           <div className={style.auth}>
              <div className={style.left}>
                 <span><img src={tu} className={style.icon}/></span>
              </div>
              <div className={style.right}>
                 <p>哈哈哈</p>
              </div>
           </div>
        )
    }
}


export default Auth;