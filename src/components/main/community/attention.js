import React from 'react';
import AttentionParts from './attentionParts/attentionParts';

import { connect } from 'react-redux'


class Attention extends React.Component{

    constructor(){
        super();
        this.tmp = []
        this.state = {
            attention : []
        }
    }

    // componentWillMount(){
    //     fetch(
    //         '/data/attention.json'
    //     ).then(res=>res.json()
    //     ).then(data=>{
    //         this.setState({
    //             attention : data
    //         })
    //     })
    // }

    componentWillMount(){
        this.props.attDis.forEach(val=>{
            if(val.guanzhu){
                this.tmp.push(val)
            }
        })
        this.props.attNew.forEach(val=>{
            if(val.guanzhu){
                this.tmp.push(val);
                this.setState({
                    attention : this.tmp
                })
            }
        })
        
    }
   

    render(){
        // console.log(this.props.attDis[0])
        return (
            <>
                {
                    // console.log(this.state.attention)
                    this.state.attention.length > 0 && this.state.attention.map((val,index)=>{
                        return (
                            <AttentionParts disData = { val } key = { index }  />
                        )
                    })
                }

            </>
        )
    }
}


const mapStateToProps= (state,props)=>{
    return {
        attDis : state.disData,
        attNew : state.newData
    }
}


const mapDispatchToProps = (dispatch,props)=>{
    return {
        
    }
}

const container = connect(mapStateToProps,mapDispatchToProps)(Attention)


export default container;