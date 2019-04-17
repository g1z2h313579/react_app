import React from 'react';
import Title from '../../common/title/title'
import GfParts from './gfParts';

import goodfoodStyle from './goodfood.module.scss'
import { connect } from 'react-redux'
import url from '../../../config/url.config';

class Goodfood extends React.Component{
    constructor(props){
        super();
        
        props.getgf();
    }

    
    

    render(){

        let { goodfood } = this.props
        // console.log(this.props)
        return (
        
            <div className = {goodfoodStyle.gfWarp}>
                <Title {...this.props} title = "本周佳作" />
    
                <ul>
    
                    {
                       
                        goodfood &&
                        goodfood.map((val,index)=>{
                            return (
                                <li key = {index}>
                                    <GfParts title = {val.title} name = {val.name} play = {val.play} collection = {val.collection} src = {val.src} bg = {val.bg} />
                                </li>
                
                            )
                        })
                    }
                    {/* <li>
                        <GfParts title = "葱爆牛肉" name = "我的菜" play = "123123" collection = "321321" src = "/video/2.mp4" bg = "/video/videobg2.png" />
                    </li> */}
                </ul>
                
            </div>
        )
    }
    
}

const mapStateToProps = (state,props)=>{
    return {
        goodfood : state.goodfood
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return {
        getgf : ()=>{
            fetch(
                // '/data/goodfood.json'
                url.url + "/goodfood"
            ).then(res=>res.json()
            ).then(data=>{
                dispatch({type : "GOODFOOD", payload : data})
                dispatch({type : "LOADING",payload : false})
            })
            dispatch({type : "LOADING",payload : true})
        }
    }
}


const container = connect(mapStateToProps,mapDispatchToProps)(Goodfood)


export default container