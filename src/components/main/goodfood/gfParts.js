import React from 'react';
import MyVideo from '../../common/video/video';


class GfParts extends React.Component{
    render(){
        return (
            <>
                <MyVideo src = {this.props.src} width = "100%" height = "200" bg = {this.props.bg} />
                <h2> { this.props.title } </h2>
                <span> { this.props.name }的菜 </span>
                <span> { this.props.play }播放 </span>
                <span> { this.props.collection }收藏 </span>
            </>
        )
    }
}


export default GfParts;