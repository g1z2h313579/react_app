import React from 'react';
import style from './assets/css/biji.module.scss'

import Auth from '../auth/auth'
import Heart from '../heart/heart'

import url from '../../../../config/url.config'


class Biji extends React.Component{
    state={
        msg:[]
    
    }
    componentWillMount(){
        fetch(
            // `/data/eatBiji.json`
            url.url + "/eatBiji"
          ).then(
            res=>res.json()
            // res=>res.text()
          ).then(
            data=>{this.setState({msg:data})}
            
          )
    }
    render(){
        return(
            <div className={style.biji}>
               <h3>笔记</h3>
               <ul className={style.ul1}>
                {
                    this.state.msg.map((item,index)=>(
                        <li key={item.id}>
                            <img src={item.src}/>
                            <p>{item.des}</p>
                            <div className={style.bot}>
                                <Auth/>
                                <Heart/>
                            </div>
                        </li>
                    ))
                }
               </ul>
            </div>
        )

    }
}

export default Biji