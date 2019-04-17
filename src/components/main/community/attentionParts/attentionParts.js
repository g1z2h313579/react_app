import React from 'react';
import Auth from '../auth/auth'
import AttContent from '../attContent/attContent'
import Pinlundianzan from '../pinlundianzan/pinlundianzan'

class AttentionParts extends React.Component{
    render(){
        // console.log(this.props)
        return (
            <div>
                <Auth {...this.props} />
                <AttContent {...this.props} />
                <Pinlundianzan {...this.props} />
            </div>
        )
    }
}


export default AttentionParts;