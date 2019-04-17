import React from 'react';

import { Link } from 'react-router-dom'

import IndexSearch from '../../common/indexSearch/indexSearch'

import indexStyle from './index.module.scss'
import Swipe from '../../common/swipe/swipe';
import MyVideo from '../../common/video/video';

import url from '../../../config/url.config'

class Index extends React.Component{



    render(){
        return (
            <>
                <IndexSearch position = "static"/>

                <div className = {indexStyle.inContent}>

                    <div className = {indexStyle.swipe}>
                        <Swipe imgs = {[
                            {src : "https://img0.pclady.com.cn/pclady/1812/27/1880114_14978585.jpg"},
                            {src : "https://img0.pclady.com.cn/pclady/1808/03/1840907_7957249.jpg"},
                            {src : "https://img0.pclady.com.cn/pclady/1808/03/1840907_154933510.jpg"},
                            ]} 
                        />
                    </div>



                    <div className = {indexStyle.link}>
                        <Link to = "/sort/caipu">分类</Link>
                        <Link to = "/goodfood">本周佳作</Link>
                        {/* <Link to = "/cash">签到领现金</Link> */}
                        <Link to = "/eat">健身七分吃</Link>
                        {/* <Link to = "/cookie">烘焙</Link> */}
                        {/* <Link to = "/soup?/data/baotang.json">煲汤</Link> */}
                        <Link to = {`/soup?${url.url}/baotang`}>煲汤</Link>
                        {/* <Link to = "/vegetarian?/data/vegetarian.json">素食</Link> */}
                        <Link to = {`/vegetarian?${url.url}/vegetarian`}>素食</Link>
                        {/* <Link to = "/mens">月经管家</Link> */}
                    </div>



                    <div className = {indexStyle.video}>
                        <h2>精彩短视频</h2>
                        <div className = {indexStyle.myvideo}>
                            <div className = {indexStyle.left}>
                                <MyVideo src = {"/video/2.mp4"} width = "159" height = "190" bg = "/video/videobg.png" />    
                            </div>
                            <div className = {indexStyle.right}>
                                <MyVideo src = {"/video/2.mp4"} width = "169" height = "80" bg = "/video/videobg2.png"  />      
                                <MyVideo src = {"/video/2.mp4"} width = "169" height = "80" bg = "/video/videobg2.png"  />       
                            </div>  
                        </div>
                    </div>       

                    <div className = {indexStyle.map}>
                        <div id="allmap"></div>
                    </div>
                    
                </div>

                
                

            </>
        )
    }
}


export default Index;