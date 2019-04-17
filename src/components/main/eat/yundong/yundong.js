import React from 'react';
import style from './assets/css/yundong.module.scss'

import url from '../../../../config/url.config'

class Yundong extends React.Component{
    state={
        msg:[]
    
    }
    componentWillMount(){
        fetch(
            // `/data/eatYun.json`
            url.url + "/eatYun"
          ).then(
            res=>res.json()
            // res=>res.text()
          ).then(
            data=>{this.setState({msg:data})}
            
          )
    }
    render(){
        return(
            <div className={style.yundong}>
               <h3>运动方式</h3>
               <ul className={style.ul1}>
                 {
                      this.state.msg.map((item,index)=>(
                           <li key={item.id}>
                             <img src={item.src}/>
                               <p>{item.des}</p>
                          </li>
                      ))
                 }
                  
                  
               </ul>
            </div>
        )

    }
}

export default Yundong