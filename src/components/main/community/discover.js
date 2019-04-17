import React from 'react';
import DiscoverParts from './discoverParts/discoverParts';


import url from '../../../config/url.config'

import { connect } from 'react-redux'


class Discover extends React.Component{

    constructor(props){
        super();

        if(!props.disData){
            props.getlist();
            props.getlist2();
        }
    }    




    render(){
        // console.log(this.props)
        let { disData } = this.props;
        // console.log(disData)
        return (
            <>
                {

                    disData &&
                    disData.map(val=>{
                        return (
                            <DiscoverParts disData = {val} key = {val.id} />
                        )
                    })
                }
            </>
        )
    }

}

const mapStateToProps= (state,props)=>{
    return {
        disData : state.disData,
    }
}


const mapDispatchToProps = (dispatch,props)=>{
    return {
        getlist : ()=>{
            // console.log(url.url + "/discover")
            fetch(
                // '/data/discover.json'
                url.url + "/discover"
            ).then(res=>res.json()
            ).then(data=>{
                dispatch({type : "DIS_DATA", payload : data})
                dispatch({type : "LOADING",payload : false})
            })
            dispatch({type : "DIS_DATA",payload : null})
            dispatch({type : "LOADING",payload : true})
        },
        getlist2 : ()=>{
            fetch(
                // '/data/new.json'
                url.url + "/new"
            ).then(res=>res.json()
            ).then(data=>{
                dispatch({type : "NEW_DATA", payload : data})
                dispatch({type : "LOADING",payload : false})
            })
            dispatch({type : "NEW_DATA",payload : null})
            dispatch({type : "LOADING",payload : true})
        }
    }
}

const container = connect(mapStateToProps,mapDispatchToProps)(Discover)




export default container;