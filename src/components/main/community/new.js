import React from 'react';
import NewParts from './newParts/newParts';

import { connect } from 'react-redux';
import url from '../../../config/url.config';

class New extends React.Component{
    constructor(props){
        super();
        if(!props.newData){
            props.getlist();
        }
    }

    render(){
        let { newData } = this.props
        return (

            <>
                {
                    // console.log(this.state.new)
                    newData && newData.map((val,index)=>{
                        return (
                            <NewParts disData = { val } key = { index }  />
                        )
                    })
                }
            </>
        )
    }
}


const mapStateToProps= (state,props)=>{
    return {
        newData : state.newData
    }
}


const mapDispatchToProps = (dispatch,props)=>{
    return {
        getlist : ()=>{
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

const container = connect(mapStateToProps,mapDispatchToProps)(New)




export default container;