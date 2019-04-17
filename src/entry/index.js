import React from 'react';
import Content from '../components/common/Content/Content'
import Footer from '../components/common/Footer/Footer'

import { connect } from 'react-redux';

import Loading from '../components/common/loading/loading'

class ViewEntry extends React.Component{
    render(){
        return (

            <>
                {
                    this.props.loading &&
                    <Loading />
                }

                <Content {...this.props}/>

                
                {
                    this.props.foot &&
                    <Footer/>
                }
                
                
            </>
        )
    }
}




const mapStateToProps = (state,props)=>{
    // console.log(state)
    return {
      foot : state.foot,
      loading : state.loading
    }
  }
  
  const mapDispatchToProps = (dispatch,props)=>{
    return {
  
    }
  }
  
  const container = connect(mapStateToProps,mapDispatchToProps)(ViewEntry)

export default container;