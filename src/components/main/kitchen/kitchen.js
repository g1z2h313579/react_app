import React from 'react';
import style from './kitchen.module.scss';

import Swipe from '../../common/swipe/swipe'
import url from '../../../config/url.config';

import { connect } from 'react-redux'

import Back from "../../common/back/back";


class Kitchen extends React.Component{
    state={
        msg:[]
    
    }
    componentWillMount(){
        this.props.getlist()
    }
    render(){
        let { kitchen }  = this.props
        return(
            <div className = {style.kitchenWarp}>
                <div className={style.top}>
                  <div className={style.back}><Back {...this.props}/></div>
                  <span>VIP会员</span>
               </div>
                <div className={style.swipe}>

                    <Swipe imgs = {[
                                 {src : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1512560246,2079128780&fm=27&gp=0.jpg"},
                                 {src : "http://img5.imgtn.bdimg.com/it/u=215589214,4008297613&fm=26&gp=0.jpg"},
                                 {src : "http://img5.imgtn.bdimg.com/it/u=2046046804,4125908273&fm=26&gp=0.jpg"},
                                ]} 
                    />

                </div>


                <div className={style.kitchen}>
                <ul className={style.ul1}>
                    {
                        kitchen &&
                        kitchen.map((item,index)=>(
                            <li className={style.li1} key={item.id}>
                        <h3>{item.title}</h3>
                        <ul className={style.ul2}>
                            <li><img src={item.src1}/><span>{item.name1}</span></li>
                            <li><img src={item.src2}/><span>{item.name2}</span></li>
                        </ul>
                    </li>
                        ))
                    }    
                </ul>
                </div>
            </div>
        )
    }
}


const mapStateToProps= (state,props)=>{
    return {
        kitchen : state.kitchen,
    }
}


const mapDispatchToProps = (dispatch,props)=>{
    return {
        getlist : ()=>{
            fetch(
                // `/data/kitchen.json`
                url.url + "/kitchen"
              ).then(
                res=>res.json()
              ).then(
                data=>{
                    // this.setState({msg:data})
                    dispatch({type : "KITCHEN",payload : data})
                    dispatch({type : "LOADING",payload : false})
                }
              )
            dispatch({type : "LOADING",payload : true})
        }
    }
}

const container = connect(mapStateToProps,mapDispatchToProps)(Kitchen)




export default container;