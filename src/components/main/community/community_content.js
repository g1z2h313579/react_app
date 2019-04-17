import React from 'react';
import { Route } from 'react-router-dom'


import Loadable from 'react-loadable';
		  
import style from './comStyle.module.scss'

// import Attention from './attention';
import Discover from './discover';
// import New from './new';

import  Switch  from 'react-router-transition-switch';
import  fader  from 'react-fader'

const Loading = () => <div>Loading...</div>;
		  const Attention = Loadable({
		  	loader: () => import('./attention'),
		 	loading: Loading,
		 	loading:()=>{return null}
          });
          const New = Loadable({
            loader: () => import('./new'),
           loading: Loading,
           loading:()=>{return null}
        });

// import Attention from './attention';
// import New from './new'


class Community_Content extends React.Component{

    
    render(){
        return (
            <div className={style.content}>
                <Switch component = {fader}>
                    <Route path = "/community/attention" component = {Attention} />
                    <Route path = "/community/discover" component = {Discover} />
                    <Route path = "/community/new" component = {New} />
                </Switch>
            </div>
        )
    }
}


export default Community_Content;