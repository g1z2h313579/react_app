import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux'

class LoginGuard extends React.Component{
    constructor(){
        super();
        
    }
    componentWillMount(){
       this.props.closeFoot();
    }
    render(){
        return (
            <Route render = {(props)=>{
                

                return <this.props.component {...props} />
            }}  
            />
        )
    }

    componentWillUnmount(){
        this.props.openFoot();
    }
}

const mapStateToProps = (state,props)=>{
    return {}
}

const mapDispatchToProps = (dispatch,props)=>{
    return {
        closeFoot : ()=>{
            dispatch({type : "FOOT", payload : false})
        },
        openFoot : ()=>{
            dispatch({type : "FOOT", payload : true})
        }
    }
}

const container = connect(mapStateToProps,mapDispatchToProps)(LoginGuard)

export default container;