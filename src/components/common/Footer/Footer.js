import React from 'react';
import {  NavLink } from 'react-router-dom'


import foot from './footer.module.scss';


class Footer extends React.Component{
    render(){
        return (
            <footer className = {foot.foot}>
                <ul>
                    <li><NavLink to = "/index" activeClassName = {foot.footActive}>首页</NavLink></li>
                    <li><NavLink to = "/kitchen" activeClassName = {foot.footActive}>名厨</NavLink></li>
                    <li><NavLink to = "/community/discover" activeClassName = {foot.footActive}>社区</NavLink></li>
                    <li><NavLink to = "/market" activeClassName = {foot.footActive}>集市</NavLink></li>
                    <li><NavLink to = "/user" activeClassName = {foot.footActive}>我的</NavLink></li>
                </ul>
            </footer>
        )
    }
}


export default Footer;