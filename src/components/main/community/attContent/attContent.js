import React from 'react';
// import {  NavLink } from 'react-router-dom'

import style from './assets/css/attContent.module.scss';

class AttContent extends React.Component{
    render(){
        return (
           <div className={style.attContent}>
              <h3> { this.props.disData.disContent } </h3>
           </div>
        )
    }
}


export default AttContent;