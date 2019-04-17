import React from 'react';
import { Route } from 'react-router-dom';
import  Login  from '../../main/login/login'


import { connect } from 'react-redux'
class OrderGuard extends React.Component{


    componentWillMount(){
        this.props.closeFoot();
     }


    getCookie(key){
        var arr = document.cookie.split("; ");
        for(let i = 0; i < arr.length; i++){
            if(arr[i].split("=")[0] == key){
                return arr[i].split("=")[1];
            }
        }
        return "";
      }
    render(){
        return (
            <Route render = {(props)=>{
                if(this.getCookie("checkNum") == 0){
                    return <Login {...props} />
                }else{
                    return <this.props.component {...props} />
                }
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

const container = connect(mapStateToProps,mapDispatchToProps)(OrderGuard)


export default container;