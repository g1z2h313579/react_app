import React from 'react';

import style from '../comStyle.module.scss'

import Auth from '../auth/auth';
import Guanzhu from '../guanzhu/guanzhu';
import DisContent from '../disContent/disContent';
import DisImage from '../disImage/disImage';
import Pinlundianzan from '../pinlundianzan/pinlundianzan'

class NewParts extends React.Component{
    render(){
        return (
            <div className={style.new}>
                <div className={style.top}>
                  <Auth {...this.props}/>
                  <Guanzhu {...this.props}/>
                </div>
               <DisContent {...this.props}/>
               <DisImage {...this.props}/>
               <Pinlundianzan {...this.props}/>
            </div>
        )
    }
}


export default NewParts;