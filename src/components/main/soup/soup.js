import React from 'react';
import SoupSearch from '../../common/soupSearch/soupSearch';

import soupStyle from './soup.module.scss';

import { connect } from 'react-redux'

class Soup extends React.Component{
    constructor(props){
        super();
        props.getlist();
        // console.log(111,props)
    }
    
    
    render(){
        let { soupList,searchSoup } = this.props
        // console.log(222,this.props)
        return (
            <div>
                <SoupSearch sIcon = "true" {...this.props} searchType = "soupList" />
    
    
                <div className={soupStyle.baotang}>
                    <ul>
                        {
                            searchSoup ? searchSoup.length > 0 ?

                            searchSoup.map((item,index)=>(
                                <li key={item.id}>
                                    <div className={soupStyle.left}>
                                        <img src={item.src}/>
                                    </div>
                                    <div className={soupStyle.right}>
                                        <h3>{item.title}</h3>
                                        <p className={soupStyle.p1}>{item.peicai}</p>
                                        <span>{item.auth}的菜</span>
                                        <p className={soupStyle.p2}>
                                            <em>{item.liulan}万浏览</em>
                                            <em>{item.zan}万点赞</em>
                                        </p>
                                    </div>
                                </li>
                            ))

                            :
                            soupList &&
                            soupList.map((item,index)=>(
                                <li key={item.id}>
                                    <div className={soupStyle.left}>
                                        <img src={item.src}/>
                                    </div>
                                    <div className={soupStyle.right}>
                                        <h3>{item.title}</h3>
                                        <p className={soupStyle.p1}>{item.peicai}</p>
                                        <span>{item.auth}</span>
                                        <p className={soupStyle.p2}>
                                            <em>{item.liulan}浏览</em>
                                            <em>{item.zan}点赞</em>
                                        </p>
                                    </div>
                                </li>
                            ))

                            :
                            
                            soupList &&
                            soupList.map((item,index)=>(
                                <li key={item.id}>
                                    <div className={soupStyle.left}>
                                        <img src={item.src}/>
                                    </div>
                                    <div className={soupStyle.right}>
                                        <h3>{item.title}</h3>
                                        <p className={soupStyle.p1}>{item.peicai}</p>
                                        <span>{item.auth}</span>
                                        <p className={soupStyle.p2}>
                                            <em>{item.liulan}浏览</em>
                                            <em>{item.zan}点赞</em>
                                        </p>
                                    </div>
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
        soupList : state.soupList,
        searchSoup : state.searchSoup
    }
}


const mapDispatchToProps = (dispatch,props)=>{
    // console.log(props.location.search.substring(1,props.location.search.length))
    return {
        getlist : ()=>{
            fetch(
                // `/data/baotang.json`
                props.location.search.substring(1,props.location.search.length)
              ).then(
                res=>res.json()
              ).then(data=>{
                  dispatch({type : "SOUP_LIST", payload : data})
                  dispatch({type : "LOADING",payload : false})
              })
            dispatch({type : "SOUP_LIST", payload : null})
            dispatch({type : "LOADING",payload : true})
        }
    }
}

const container = connect(mapStateToProps,mapDispatchToProps)(Soup)



export default container