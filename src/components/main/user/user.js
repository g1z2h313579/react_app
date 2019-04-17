import React from 'react';
import { Link } from 'react-router-dom'

import style from './user.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile}  from '@fortawesome/free-solid-svg-icons'
import {faCreditCard}  from '@fortawesome/free-solid-svg-icons'
import {faPaw } from '@fortawesome/free-solid-svg-icons'
import {faComments}  from '@fortawesome/free-solid-svg-icons'
import {faHeart } from '@fortawesome/free-solid-svg-icons'
import {faComment}  from '@fortawesome/free-solid-svg-icons'
import {faShareAlt}  from '@fortawesome/free-solid-svg-icons'
import {faExclamationCircle}  from '@fortawesome/free-solid-svg-icons'
import {faPhone}  from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'

class User extends React.Component{


  getCookie(key){
    var arr = document.cookie.split("; ");
    for(let i = 0; i < arr.length; i++){
        if(arr[i].split("=")[0] == key){
            return arr[i].split("=")[1];
        }
    }
    return "";
  }


    setCookie(key,value,day){
        var d = new Date();
        d.setDate(d.getDate() + day);
        document.cookie = key + "=" + value + ";expires" + d;
    }

  removeCookie(key){
    this.setCookie(key,"0",-1);
  }
  zhuxiao(){
    this.removeCookie("checkNum");
    // console.log(this.props)
    this.props.history.go(0);
  }



  componentWillMount(){
    if(!this.props.count){
      // console.log(JSON.parse(this.getCookie("checkNum")).id)
      if(this.getCookie("checkNum")){
        let count_id = JSON.parse(this.getCookie("checkNum")).CountId
        if( count_id !== 0){
          fetch(
            '/data/countlist.json'
          ).then(res=>res.json()
          ).then(data=>{
              data.forEach(val=>{
                  if(val.id === count_id){
                      this.props.toCount(val)
                  }
              })
          })
        }
      }else{
        this.props.history.push("/login")
      }
    }
  }

    render(){
        return (
            <div className={style.user}>
                <div className={style.top}>

                  {
                      // console.log(this)
                      // this.getCookie("checkNum") == "123" ? 
                      this.props.count ? 
                      
                      <>
                        <div className={style.left}>
                            <span><img src = { this.props.count.icon } /></span>
                        </div>
                        <div className={style.right}>
                            <h3> { this.props.count.nik }</h3>
                            <p onClick = {this.zhuxiao.bind(this)}>注销</p>
                        </div>  
                      </>
                      

                      : 
                      


                      <>
                        <div className={style.left}>
                            <span><img src = "http://img1.imgtn.bdimg.com/it/u=1966599938,3142839873&fm=26&gp=0.jpg"  />></span>
                        </div>
                        <div className={style.right}>
                            <h3><Link to = "/login" onClick = {this.props.toLogin} >请登录</Link></h3>
                        </div>  
                      </>
                  }



                </div>
                <ul className={style.ul1}>
                    <li><a>美食记</a></li>
                    <li><a>菜谱</a></li>
                    <li><a>关注</a></li>
                </ul>
                <ul className={style.ul2}>
                    <li>
                      <Link to = "/order">
                        <FontAwesomeIcon icon={faFile} transform="shrink--20" className={style.tu1}/>
                        <span>我的订单</span>
                      </Link>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCreditCard} transform="shrink--20" className={style.tu1} />
                      <span>待付款</span>
                    </li>
                    <li>
                      
                      <FontAwesomeIcon icon={faPaw} transform="shrink--20" className={style.tu1} />
                      <span>历史记录</span>
                    
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faComments} transform="shrink--20" className={style.tu2} />
                      <span>我的点评</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faHeart} transform="shrink--20" className={style.tu2} />
                      <span>我的收藏</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faComment} transform="shrink--20" className={style.tu3} />
                      <span>消息</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faShareAlt} transform="shrink--20" className={style.tu4} />
                      <span>分享</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faExclamationCircle} transform="shrink--20" className={style.tu2} />
                      <span>您的意见</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPhone} transform="shrink--20" className={style.tu4} />
                      <span>客服热线</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCog} transform="shrink--20" className={style.tu3} />
                      <span>更多</span>
                    </li>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state,props)=>{
  return {
    count : state.count
  }
}

const mapDispatchToProps = (dispatch,props)=>{
  return {
    toLogin : ()=>{
      dispatch({type : "FOOT", payload : false})
    },
    toCount : (val)=>{
      dispatch({type : "COUNT", payload : val});
    }
  }
}


const container = connect(mapStateToProps,mapDispatchToProps)(User)


export default container;