import React from 'react';
// import {  NavLink } from 'react-router-dom'
import style from './assets/css/guanzhu.module.scss';

import { connect } from 'react-redux';


class Guanzhu extends React.Component{
    changeGZ(){
        this.props.guanzhu({gz : !this.props.disData.guanzhu, id : this.props.disData.id, dataName : this.props.disData.dataName})
    }
    render(){
        let { guanzhu } = this.props.disData
        return (
           <div className={style.guanzhu}>
           {
            guanzhu ? <span onClick = {this.changeGZ.bind(this)}>已关注</span> : <span onClick = {this.changeGZ.bind(this)}>+关注</span>
           }
           </div>
        )
    }

}







const mapStateToProps= (state,props)=>{
    return {
        // disData : state.disData
    }
}


const mapDispatchToProps = (dispatch,props)=>{
    return {
        guanzhu : (gz)=>{
            dispatch({type : "GUANZHU", payload : gz })
        }
    }
}

const container = connect(mapStateToProps,mapDispatchToProps)(Guanzhu)



export default container;