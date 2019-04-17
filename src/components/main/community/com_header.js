import React from 'react';
import { NavLink } from 'react-router-dom'

import comStyle from './comStyle.module.scss'

class Com_header extends React.Component{

    getActive(e){
        this.refs.em.style.left = e.target.offsetLeft + 12 + "px"
    }

    render(){
        return (
            <div className = {comStyle.nav} onClick = {this.getActive.bind(this)}>
                <NavLink to = "/community/attention" activeClassName = {comStyle.com_active}>关注</NavLink>
                <NavLink to = "/community/discover" activeClassName = {comStyle.com_active}>发现</NavLink>
                <NavLink to = "/community/new" activeClassName = {comStyle.com_active}>最新</NavLink>
                <em ref = 'em'></em>
            </div>
        )
    }
}


export default Com_header;