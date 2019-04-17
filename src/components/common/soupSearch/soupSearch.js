import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Back from '../back/back';

import soupSearchStyle from './soupSearch.module.scss'

import {connect} from 'react-redux';

class soupSearch extends React.Component{
    state = {
        onoff : true,
        msg : ''
    }
    
    render(){
        return (
            <div className = {soupSearchStyle.search}>
                <Back className = {soupSearchStyle.back} {...this.props}/>
                <label>
                    {
                         this.state.onoff &&
                        <FontAwesomeIcon icon={faSearch} className = {soupSearchStyle.icon} />
                    }
                    <input type = "search" onFocus = {()=>{
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
                <span onClick = {()=>{this.refs.inVal.value = ''}}>取消</span>
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
            dispatch({type : "SEARCH_SOUP", payload : {keyWord : m, searchType : props.searchType}})
        }
    }
}



const container = connect(mapStateToProps,mapDispatchToProps)(soupSearch)




export default container;