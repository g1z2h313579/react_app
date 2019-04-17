import React from 'react';
import { NavLink,Route } from 'react-router-dom'

import sortStyle from './sortStyle.module.scss'
import Back from '../../common/back/back';
import IndexSearch from '../../common/indexSearch/indexSearch'


import sortCaiPu from './sort_caipu'
import sortYangSheng from './sort_yangsheng'

class sort_header extends React.Component{

    getActive(e){
        if(e.target.tagName == "A"){
            this.refs.em.style.left = e.target.offsetLeft + 20 + "px"
        }
    }

    render(){
        return (
            <>
            <div className = {sortStyle.nav} onClick = {this.getActive.bind(this)}>
                <span className = {sortStyle.back}>
                    <Back {...this.props}  />
                </span>
                <NavLink to = "/sort/caipu" activeClassName = {sort_header.com_active}>菜谱分类</NavLink>
                <NavLink to = "/sort/yangsheng" activeClassName = {sort_header.com_active}>美食养生</NavLink>
                <em ref = 'em'></em>
                <IndexSearch position = "static" searchType = "caiList" />
            </div>

            <Route path = "/sort/caipu" component = {sortCaiPu}/>
            <Route path = "/sort/yangsheng" component = {sortYangSheng}/>
            </>
        )
    }
}


export default sort_header;