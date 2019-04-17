import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import  Switch  from 'react-router-transition-switch';
import  fader  from 'react-fader'


import  index  from '../../main/index/index'
import  kitchen  from '../../main/kitchen/kitchen'
import  community  from '../../main/community/community'
import  market  from '../../main/market/market'
import  user  from '../../main/user/user'


import {sort,goodfood,cash,eat,soup,cookie,vegetarian,mens,detail,order} from './asyncLoadCom'
import Login from '../../main/login/login';
import LoginGuard from '../routerGuard/loginGuard';
import OrderGuard from '../routerGuard/orderGuard';

// import sort from '../../main/sort/sort'
// import goodfood from '../../main/goodfood/goodfood'
// import cash from '../../main/cash/cash'
// import eat from '../../main/eat/eat'
// import cookie from '../../main/cookie/cookie'
// import soup from '../../main/soup/soup'
// import vegetarian from '../../main/vegetarian/vegetarian'
// import mens from '../../main/mens/mens'

class Content extends React.Component{
    render(){
        return (
            <div style = {{height : "100%"}} id = "contentWarp">
                <Switch component = {fader}>
                
                    <Route path = "/index" component = { index } />
                    <Route path = "/kitchen" component = {kitchen} />
                    <Route path = "/community" component = {community} />
                    <Route path = "/market" component = {market} />
                    <Route path = "/user" component = {user} />
                    <Route exact path = "/" component = { index } />

                    <Route path = "/sort" component = { sort } />
                    <Route path = "/goodfood" component = {goodfood} />
                    <Route path = "/cash" component = {cash} />
                    <Route path = "/eat" component = {eat} />
                    <Route path = "/cookie" component = {cookie} />
                    <Route path = "/soup" component = { soup } />
                    <Route path = "/vegetarian" component = {vegetarian} />
                    <Route path = "/mens" component = {mens} />
                    <Route path = "/detail" component = {detail} />


                    {/* <Route path = "/order" component = {order} /> */}
                    <OrderGuard path = "/order" component = {order}  />
                    <LoginGuard path = "/login" component = {Login} />
                    {/* <Route path = "/login" component = {Login}/> */}
                </Switch>
            </div>
        )
    }
}


export default Content;