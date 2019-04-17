import React from 'react';
import { connect } from 'react-redux'

import sortUlStyle from './sort_ul.module.scss'
import url from '../../../config/url.config';


class sort_ul extends React.Component{
    constructor(props){
        super()
        props.getlist();
        this.state = {
            caiList : []
        }
        
    }

    chooseCai(e){
        // console.log(e.target.children[0])
        // console.log(e.target.parentNode.parentNode)
        if(e.target.tagName === "SPAN"){
            for(let i = 0; i < e.target.parentNode.parentNode.children.length; i++){
                e.target.parentNode.parentNode.children[i].children[1].style.display = "none";
                e.target.parentNode.parentNode.children[i].children[0].style.color = "";
                // console.log(e.target.parentNode.parentNode.children[i])
            }

            e.target.parentNode.children[1].style.display = "flex";
            e.target.style.color = "red";
        }

    }
    render(){
        // console.log(this.props)
        let { caiList,searchCai } = this.props;
        // console.log(searchCai.length)
        return (
            <>
                {
                    searchCai ? searchCai.length > 0 ? 
                        <ul>
                            {
                                searchCai.map(val=>{
                                    console.log(searchCai.length)
                                    return (
                                        <li key = {val.ckey}>{val.name}</li>
                                    )
                                })
                            }
                        </ul>

                    :  
                    <ul className = {sortUlStyle.ul}
                        onClick = {this.chooseCai}
                    >
                        {
                            caiList &&
                            caiList.map(val=>{
                                if(!val.children){
                                    return (
                                        <li key = {val.id}><span>{val.sort}</span></li>
                                    )
                                }else{
                                    return (
                                        <li key = {val.id}>
                                            <span>{val.sort}</span>
                                            <ul>
                                                {
                                                    val.children.map((vall)=>{
                                                        return (
                                                            <li key = {vall.ckey}>{vall.name}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                }
                            })
                        }
                            
                    </ul>
                    :  

                    <ul className = {sortUlStyle.ul}
                        onClick = {this.chooseCai}
                    >
                        {
                            caiList &&
                            caiList.map(val=>{
                                if(!val.children){
                                    return (
                                        <li key = {val.id}><span>{val.sort}</span></li>
                                    )
                                }else{
                                    return (
                                        <li key = {val.id}>
                                            <span>{val.sort}</span>
                                            <ul>
                                                {
                                                    val.children.map((vall)=>{
                                                        return (
                                                            <li key = {vall.ckey}>{vall.name}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                }
                            })
                        }
                            
                    </ul>
                }

                
            </>
        )
    }
}

const mapStateToProps= (state,props)=>{
    return {
        caiList : state.caiList,
        searchCai : state.searchCai
    }
}


const mapDispatchToProps = (dispatch,props)=>{
    return {
        getlist : ()=>{
            console.log(url.url + props.url)
            fetch(
                // '/data/sort_caipu.json'
                url.url + props.url
            ).then(res=>res.json()
            ).then(data=>{
                dispatch({type : "CAI_LIST",payload : data})
                dispatch({type : "LOADING",payload : false})
            })
            dispatch({type : "CAI_LIST",payload : null})
            dispatch({type : "LOADING",payload : true})
        }
    }
}

const container = connect(mapStateToProps,mapDispatchToProps)(sort_ul)


export default container