import React from 'react';

import CaiUl from './sort_ul';

import caiPuStyle from './caipu.module.scss'
import url from '../../../config/url.config';

class caipu extends React.Component{
    render(){
        return (
            <div className = {caiPuStyle.content}>
                <CaiUl url = "/sort_caipu" />
            </div>
        )
    }
}

export default caipu