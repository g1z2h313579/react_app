import React from 'react';
import { Link } from 'react-router-dom'

import style from './market.module.scss'

import Back from '../../common/back/back'

import { connect } from 'react-redux';
import url from '../../../config/url.config';


class Market extends React.Component{

    constructor(props){
        super()
        this.state={
            msg:[]
        }
        props.getlist()
    }
    // componentWillMount(){
    //     fetch(
    //         `/data/shop.json`
    //       ).then(
    //         res=>res.json()
    //         // res=>res.text()
    //       ).then(
    //         data=>{this.setState({msg:data})}
            
    //       )
    // }
    render(){
        let { shopList } = this.props
        return (
            <div className={style.market}>
                <div className={style.top}>
                  <div className={style.back}><Back {...this.props}/></div>
                  <span>易厨优品</span>
               </div>
               <h3>精选优品</h3>
               <ul className={style.ul1}>
                 {
                     shopList &&
                     shopList.map((item,index)=>(         
                   <li key = {index}>
                       <img src={item.src} className={style.img}/>
                       <p>{item.title}</p>
                       <div className={style.bot}>
                            <span>￥{item.price}</span>
                            <Link to = {`/detail?${item.id}`}><em>查看详情</em></Link>
                       </div>
                   </li>
                     ))
                 }
                 
               </ul>
            </div>
        )
    }
}


const mapStateToProps= (state,props)=>{
    return {
        shopList : state.shopList,
    }
}


const mapDispatchToProps = (dispatch,props)=>{
    return {
        getlist : ()=>{
            fetch(
                // '/data/shop.json'
                url.url + "/shop"
            ).then(res=>res.json()
            ).then(data=>{
                dispatch({type : "SHOP_LIST",payload : data})
                dispatch({type : "LOADING",payload : false})
            })
            dispatch({type : "SHOP_LIST",payload : null})
            dispatch({type : "LOADING",payload : true})
        }
    }
}

const container = connect(mapStateToProps,mapDispatchToProps)(Market)




export default container;