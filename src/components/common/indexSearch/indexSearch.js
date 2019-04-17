import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux';


import indexSearchStyle from './indexSearch.module.scss'

class indexSearch extends React.Component{
    state = {
        onoff : true,
        msg : ''
    }
    
    render(){
        return (
            <div className = {indexSearchStyle.search} style = {{position : this.props.position}}>
                <label>
                    {
                         this.state.onoff &&
                        <FontAwesomeIcon icon={faSearch} className = {indexSearchStyle.icon} />
                    }
                    <input placeholder = "搜索的内容" type = "search" onFocus = {()=>{
                        this.setState({
                            onoff : !this.state.onoff
                        })
                    }}  onBlur = {()=>{
                        this.setState({
                            onoff : !this.state.onoff
                        })
                    }}
                    onChange = {this.soupMsg.bind(this)}
                    ref = "inVal"
                    value = {this.state.msg}
                    />
                </label>
            </div>
        )
    }

    soupMsg(e){
        this.setState({
            msg : e.target.value
        })
        
        this.props.sendmsg(e.target.value)
        
    }
}

const mapStateToProps = (state,props)=>{
    return {

    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return {
        sendmsg : (m)=>{
            dispatch({type : "SEARCH_CAI", payload : {keyWord : m, searchType : props.searchType}})
        }
    }
}



const container = connect(mapStateToProps,mapDispatchToProps)(indexSearch)


export default container;