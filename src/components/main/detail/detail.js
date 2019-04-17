import React from 'react';
import style from './assets/css/detail.module.scss'

import Back from '../../common/back/back'

import { connect } from 'react-redux'

class Detail extends React.Component{

    constructor(){
        super()
        this.state={
            num : 1
        }
    }


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

    takePro(){
        let count_id = JSON.parse(this.getCookie("checkNum")).CountId;
        // let count_pro = JSON.parse(this.getCookie("checkNum")).pro ? JSON.parse(this.getCookie("checkNum")).pro : [];
        // let count_pro = JSON.parse(localStorage.getItem("shopCart")) ? JSON.parse(localStorage.getItem("shopCart")).pro : [];
        let count_pro = [];
        if(JSON.parse(localStorage.getItem("shopCart"))){
            JSON.parse(localStorage.getItem("shopCart")).forEach(val=>{
                if(val.CountId === count_id){
                    console.log(val.pro)
                    count_pro = [...val.pro]
                }
            })
        }else{
            count_pro = []
        }

        
        this.props.shopList.forEach(val=>{
            if(val.id == this.props.location.search.substring(1,this.props.location.search.length)){
                count_pro.push({...val,num : this.state.num, checked : true});
                let strCount_pro = JSON.stringify(count_pro);
                // this.setCookie("checkNum",`{"id":${count_id},"pro":${strCount_pro}}`)
                localStorage.setItem("shopCart",`[{"CountId":${count_id},"pro":${strCount_pro}}]`)
                this.props.shopCart([{...val,num : this.state.num, checked : true}])
                // console.log(this.getCookie("checkNum"))
            }
        })
        this.refs.suc.style.display = "flex";
        setTimeout(()=>{
            this.refs.suc.style.display = "none";
        },500)

    }

    addPro(e){
        e.preventDefault()
        this.setState({
            num : this.state.num + 1
        })
    }

    reducePro(e){
        e.preventDefault()
        if( this.state.num > 1 ){
            this.setState({
                num : this.state.num - 1
            })
        }else{
            this.setState({
                num : 1
            })
        }
    }


    render(){
        let { shopList } = this.props;
        let production = {}
        // console.log(this.props.location.search.substring(1,this.props.location.search.length))
        if(shopList){
            shopList.forEach(val=>{
                if(val.id == this.props.location.search.substring(1,this.props.location.search.length)){
                    production = {...val}
                }
            })
        }
        return  (
            <>
                <div className={style.detail}>

                <div className = { style.sucadd } ref = "suc">
                    <h2>添加商品成功</h2>
                </div>
                        <div className={style.top}>
                        <div className={style.back}><Back {...this.props}/></div>
                        <span>商品详情</span>
                    </div>
                        <div className={style.img}>
                        <img src= {production.src} />
                    </div>
                        <span>￥{production.price}</span>
                        <p> { production.title } </p>
                        <div className = { style.Num }>
                            <button onClick = { this.addPro.bind(this) }>+</button>
                            <input value = {this.state.num} disabled />
                            <button onClick = { this.reducePro.bind(this) }>-</button>
                        </div>
                        <ul className={style.intro}>
                            <li>快递：免运费</li>
                            <li>月销507</li>
                            <li>上海</li>
                        </ul>
                        <div className={style.bot}>
                        <em onClick = { this.takePro.bind(this) }>加入购物车</em>
                        <em>立即购买</em>
                    </div>
                </div>
            </>
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
        shopCart : (pro)=>{
            dispatch({type : "SHOP_CART", payload : pro })
        }
    }
}

const container = connect(mapStateToProps,mapDispatchToProps)(Detail)



export default container;