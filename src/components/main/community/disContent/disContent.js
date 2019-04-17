import React from 'react';
// import {  NavLink } from 'react-router-dom'

import style from './assets/css/disContent.module.scss';

class DisContent extends React.Component{
    render(){
        return (
           <div className={style.disContent}>
              <p> { this.props.disData.disContent } </p>
           </div>
        )
    }
}


export default DisContent;