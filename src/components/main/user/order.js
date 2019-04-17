import React from 'react';
import style from './order.module.scss'
import tu from './img/ss.jpg'

import Back from '../../common/back/back'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash}  from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'


class Order extends React.Component{

   state = {
      check : true
   }

//----------计算总价方法-----------------------------------------------------------------------------------
   culSum(){
      // console.log(this.props)
      let pro_sum = 0;
      this.props.shopCart.forEach(val=>{
         if(val.checked){
            pro_sum += val.num * val.price;
         }
      })
      return pro_sum;
   }
//----------添加商品方法-----------------------------------------------------------------------------------
   addPro(id){
      //---------this.pro.list：为当前用户的pro购物车中的商品列表---------------------------------------
      this.pro_list.forEach((val,index)=>{
         if(val.id === id){
            val.num += 1
         }
      })
      // localStorage.setItem("shopCart",JSON.stringify({...JSON.parse(localStorage.getItem("shopCart")),pro : this.pro_list}))
//---------------将当前用户的购物车列表对象提取出来-----------------------------------------------------
      let proObj = {...JSON.parse(localStorage.getItem("shopCart"))[this.index]}
      //---------------将所有用户的购物车数组提取出来-----------------------------------------------------
      let proArr = JSON.parse(localStorage.getItem("shopCart"))
//---------------把当前用户的旧的购物车列表对象删了-----------------------------------------------------
      proArr.splice(this.index,1);

//---------------将当前用户的购物车列表对象更新-----------------------------------------------------
      proObj = {...this.cuurentShopCart,pro : this.pro_list}
//---------------将当前用户的购物车列表对象推进所有用户购物车列表数组中-----------------------------------------------------
      proArr.push(proObj)
//---------------更新localStorage中的数据-----------------------------------------------------
      localStorage.setItem("shopCart",JSON.stringify(proArr))
//---------------将添加商品的数量信息发送到状态仓库中-----------------------------------------------------
      this.props.sendAdd(id)
   }

   //---------------减少商品方法-----------------------------------------------------
   reducePro(id){
      this.pro_list.forEach((val,index)=>{
         if(val.id === id){
            val.num -= 1
         }
      })
      // localStorage.setItem("shopCart",JSON.stringify({...JSON.parse(localStorage.getItem("shopCart")),pro : this.pro_list}))

      let proObj = {...JSON.parse(localStorage.getItem("shopCart"))[this.index]}
      
      let proArr = JSON.parse(localStorage.getItem("shopCart"))

      proArr.splice(this.index,1);


      proObj = {...this.cuurentShopCart,pro : this.pro_list}

      proArr.push(proObj)

      localStorage.setItem("shopCart",JSON.stringify(proArr))


      this.props.sendReduce(id)
   }

   //--------------选中单个商品效果--------------------------------------
   change(id){
      this.props.changeCheck(id)
   }

   //----------------全选效果---------------------------------------------
   checkAll(){
      this.props.checkall()
   }
//-------------------删除商品------------------------------------------
   del(id){
      this.props.del(id);
      this.pro_list.forEach((val,index)=>{
         if(val.id === id){
            this.pro_list.splice(index,1)
         }
      })
      // localStorage.setItem("shopCart",JSON.stringify({...JSON.parse(localStorage.getItem("shopCart")),pro : this.pro_list}))
      let proObj = {...JSON.parse(localStorage.getItem("shopCart"))[this.index]}
      
      let proArr = JSON.parse(localStorage.getItem("shopCart"))

      proArr.splice(this.index,1);


      proObj = {...this.cuurentShopCart,pro : this.pro_list}

      proArr.push(proObj)

      localStorage.setItem("shopCart",JSON.stringify(proArr))
   }

//-----------------读取cookie效果--------------------------------------------
   getCookie(key){
      var arr = document.cookie.split("; ");
      for(let i = 0; i < arr.length; i++){
          if(arr[i].split("=")[0] == key){
              return arr[i].split("=")[1];
          }
      }
      return "";
    }


   componentWillMount(){

      //---------------获取当前用户id----------------------------------------------
      let count_id = JSON.parse(this.getCookie("checkNum")).CountId;
      // this.pro_list = JSON.parse(localStorage.getItem("shopCart")) ? JSON.parse(localStorage.getItem("shopCart")).pro : []
      //-------------------根据用户id读取localStorage中的数据------------------------------------------
      if(JSON.parse(localStorage.getItem("shopCart"))){
         JSON.parse(localStorage.getItem("shopCart")).forEach((val,index)=>{
            if(val.CountId === count_id){
                this.pro_list = [...val.pro]
                this.cuurentShopCart = {...val}
                this.index = index
            }
        })
      }
      this.props.setShopCart(this)
   }
  
   // setCookie(key,value,day){
   //       var d = new Date();
   //       d.setDate(d.getDate() + day);
   //       document.cookie = key + "=" + value + ";expires" + d;
   // }


   // componentDidMount(){
   //    console.log(11111111111,localStorage.getItem("aaa"))
   //    navigator.geolocation.getCurrentPosition(
   //       (ev)=>{
   //          alert(ev.coords.longitude)
   //          alert(ev.coords.latitude)
   //       },
   //       (error)=>{alert(error)},
   //    )
   // }

    render(){
       //-----------购物车数据---------------------------------------
      let { shopCart } = this.props;
      
      
        return (
            <div className={style.order}>
               <div className={style.top}>
                  <div className={style.back}><Back {...this.props}/></div>
                  <span>购物车</span>
               </div>
               <ul>
                  {
                     shopCart.length > 0 &&
                     shopCart.map((val,index)=>{
                        return (
                           <li key = {index} >
                              <div className={style.check}>
                                 <input type="checkbox" checked = {val.checked} onChange = {this.change.bind(this,val.id)}/>
                              </div>
                              <div className={style.image}>
                                 <img src= { val.src } />
                              </div>
                              <div className={style.content}>
                                 <p> { val.title } </p>
                                 {/* <span>颜色:白色</span> */}
                                 <div className={style.num}>
                                       <button onClick = { this.addPro.bind( this,val.id ) }>+</button>
                                       <input type="text" value = { val.num } disabled />
                                       <button onClick = { this.reducePro.bind( this,val.id ) }>-</button>
                                 </div>
                              </div>
                              <div className={style.price}>
                                 <span>￥ { val.price} </span>
                                 <FontAwesomeIcon icon={faTrash} transform="shrink--20" className={style.del} onClick = {this.del.bind(this,val.id)} />

                              </div>
                           </li>
                        )
                     })

                  }
                 
                
               </ul>
               <div className={style.footer}>
             
                  <input type="checkbox" onClick = {this.checkAll.bind(this)} onChange = {(e)=>{
                     let onoff = true
                     this.props.shopCart.forEach(val=>{
                        if(!val.checked){
                           onoff = false
                        }
                     })
                     e.target.checked = onoff
                  }} 
                  />
                  <span className={style.span1} >全选</span>
                  <div className={style.heji}> 
                    <span>合计：<em>￥ 
                    {
                        this.culSum().toFixed(1)
                    }  
                    </em></span>
                    <p>含运费</p>
                  </div>
                  <a>结算(<span> {shopCart.length} </span>)</a>
               </div>
            </div>
    )
  }

  
}



const mapStateToProps= (state,props)=>{
   return {
      shopCart : state.shopCart,
   }
}

const mapDispatchToProps = (dispatch,props)=>{
   return {
      //--------------增加商品数量-----------------------------------------------
      sendAdd : (pro)=>{
         dispatch({type : "ADD_PRO" , payload : pro })
      },
      //---------------减少商品数量----------------------------------------------
      sendReduce : (pro)=>{
         dispatch({type : "REDUCE_PRO" , payload : pro })
      },
      //---------------选中效果----------------------------------------------
      changeCheck : (pro)=>{
         dispatch({type : "CHECK_PRO" , payload : pro })
      },
      //----------------全选效果---------------------------------------------
      checkall : ()=>{
         dispatch({type : "CHECK_ALL" , payload : true })
      },
      //----------------删除商品---------------------------------------------
      del : (pro)=>{
         dispatch({type : "DEL_PRO" , payload : pro })
      },
      //----------------刷新重新读取localStorage中的数据放进状态管理中---------------------------------------------
      setShopCart : (that)=>{
         if(that.props.shopCart.length == 0){
            // console.log(JSON.parse(this.getCookie("checkNum")))
            // let pro = JSON.parse(localStorage.getItem("shopCart")).pro
            let pro = [];
            // console.log(JSON.parse(localStorage.getItem("shopCart")));
            if(JSON.parse(localStorage.getItem("shopCart"))){
               JSON.parse(localStorage.getItem("shopCart")).forEach(val=>{
                  // console.log(JSON.parse(that.getCookie("checkNum")).CountId)
                  if(val.CountId == JSON.parse(that.getCookie("checkNum")).CountId){
                     pro = val.pro
                  }
               })
            }
            if(pro.length > 0){
               pro.forEach(val=>{
                  dispatch({type : "SHOP_CART", payload : val})
               })
            }
         }
      }
   }
}

const container = connect(mapStateToProps,mapDispatchToProps)(Order)


export default container

