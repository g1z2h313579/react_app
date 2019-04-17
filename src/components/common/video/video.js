import React from 'react';
import videoStyle from './video.module.scss'

class MyVideo extends React.Component{

    state = {
        pp : false
    }

    play(e){
        this.refs.video.play();
        this.setState({
            pp : true
        })
        e.target.style.display = "none";
        // this.refs.video.webkitRequestFullscreen();
    }
    pause(e){
        // console.log(e.target);
        if(e.target.tagName === "VIDEO"){
            if(this.state.pp === true){
                this.setState({
                    pp : false
                })
                e.target.pause();
                this.refs.play.style.display = "block";
            }

        }
    }

    render(){
        // console.log(this.props)
        return (
            <div className = {videoStyle.warp} style = {{width : this.props.width + 'px',height : this.props.height + 'px'}} onClick = {this.pause.bind(this)}>
                <video ref = "video" width = {this.props.width} height = {this.props.height} poster = {this.props.bg}  >
                    <source src = {this.props.src} />
                </video>
                <div className = {videoStyle.play} onClick = {this.play.bind(this)} ref = "play"></div>
            </div>
        )
    }
}

export default MyVideo;