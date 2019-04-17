import React from 'react';
// import SwipeableViews from 'react-swipeable-views';

import ImageGallery from 'react-image-gallery';

import "../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";



class swipe extends React.Component{

    constructor(){
        super();
    }
    render(){
        const images = [
            {
              original: this.props.imgs[0].src,
            },
            {
              original: this.props.imgs[1].src,
            },
            {
              original: this.props.imgs[2].src,
            }
          ]
        return (
            <>
                {/* <SwipeableViews> */}
                    
                        {/* <img src = "http://img5.imgtn.bdimg.com/it/u=1607036595,2950630734&fm=26&gp=0.jpg"/> */}
{/* 
                        {
                            this.props.imgs.map((val,index)=>{
                                if(val.width && val.height){
                                    return (
                                        <img src = {val.src} style = {{width : val.width,height : val.height, margin : "0 auto"}} key = {index}/>
                                    )
                                }else{
                                    return (
                                        <img src = {val.src} key = {index} style = {{ margin : "0 auto"}} />
                                    )
                                }
                            })
                        } */}
                        
                    
                   
                        {/* <img src = "http://img4.imgtn.bdimg.com/it/u=1440258767,292683893&fm=26&gp=0.jpg"/> */}
                   
                    
                        {/* <img src = "http://img5.imgtn.bdimg.com/it/u=1607036595,2950630734&fm=26&gp=0.jpg"/> */}
                    
                {/* </SwipeableViews> */}


                <ImageGallery 
                    items={images}
                    showNav = {false}
                    showThumbnails = {false}
                    showFullscreenButton = {false}
                    useBrowserFullscreen = {false}
                    showPlayButton = {false}
                    autoPlay = {true}
                />









            </>
        )
    }
}

export default swipe;