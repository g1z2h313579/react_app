import React from 'react';

import CaiUl from './sort_ul';
import caiPuStyle from './caipu.module.scss'

class yangsheng extends React.Component{
    render(){
        return (
            <>
                <div className = {caiPuStyle.content}>
                    <CaiUl url = "/sort_yangsheng" />
                </div>
            </>
        )
    }
}

export default yangsheng