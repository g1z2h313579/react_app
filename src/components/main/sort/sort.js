import React from 'react';


import sortStyle from './sortStyle.module.scss'
import Sort_header from './sort_header';

const Sort = (props)=>{

    return (
        
        <>
            <div className = {sortStyle.nwarp}>
                <Sort_header {...props}/>
            </div>
            
            
        </> 
    )
}

export default Sort