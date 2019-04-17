import React from 'react';
// import {  NavLink } from 'react-router-dom'

import style from './assets/css/auth.module.scss';

class Auth extends React.Component{
    render(){
        return (
           <div className={style.auth}>
              <div className={style.left}>
                 <span><img src = { this.props.disData.auth.authIcon }  /></span>
              </div>
              <div className={style.right}>
                 <p> { this.props.disData.auth.authName } </p>
                 <span> { this.props.disData.auth.authDate } </span>
              </div>
           </div>
        )
    }
}


export default Auth;