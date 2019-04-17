import React from 'react';
import style from './assets/css/caipu.module.scss'

import url from '../../../../config/url.config'

class Caipu extends React.Component{
    state={
        msg:[]
    
    }
    componentWillMount(){
        fetch(
            // `/data/eatCai.json`
            url.url + "/eatCai"
          ).then(
            res=>res.json()
            // res=>res.text()
          ).then(
            data=>{this.setState({msg:data})}
            
          )
    }
    render(){
        return(
            <div className={style.caipu}>
               <h3>菜谱</h3>
               <ul className={style.ul1}>
                  {
                      this.state.msg.map((item,index)=>(
                     <li key={item.id}>
                        <div className={style.img}>
                           <img src={item.src}/>
                        </div>
                        <div className={style.cai}>
                            <p>{item.des}</p>
                            <span>{item.peicai}</span>
                        </div>
                        
                    </li>
                      ))
                  }
                  
                  
               </ul>
            </div>
        )

    }
}

export default Caipu