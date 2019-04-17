import React from 'react';
// import {  NavLink } from 'react-router-dom'
import style from './assets/css/disImage.module.scss';
import tu from './assets/img/ss.jpg'

class DisImage extends React.Component{
    render(){
        // console.log(111111111111111,this.props)
        return (
           <div className={style.disImage}>
           {
               this.props.disData.disImage.map((val,index)=>{
                   return (
                       <img src = { val } key = {index} />
                   )
               })
           }
           </div>
        )
    }
}


export default DisImage;