import React from 'react';
import Auth from '../auth/auth';
import Guanzhu from '../guanzhu/guanzhu';
import DisContent from '../disContent/disContent';
import DisImage from '../disImage/disImage';
import Pinlundianzan from '../pinlundianzan/pinlundianzan'

import style from '../comStyle.module.scss'

class DiscoverParts extends React.Component{

    render(){
        // console.log(this.props)
        return (

            <>
                <div className={style.discover}>
                    <div className={style.top}>
                        <Auth {...this.props} />
                        <Guanzhu {...this.props} />
                    </div>
                    <DisContent {...this.props} />
                    <DisImage {...this.props} />
                    <Pinlundianzan {...this.props} />
                </div>

            </>
        )
    }
}


export default DiscoverParts;