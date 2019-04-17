import React, { Component } from 'react';
import ViewEntry from './entry';



import { connect } from 'react-redux'
// import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    foot : true
  }
  
  render() {
    return (
      <>
        <ViewEntry {...this.props} />
      </>
    )
  }
}


const mapStateToProps = (state,props)=>{
  return {
    foot : state.foot,
    
  }
}

const mapDispatchToProps = (dispatch,props)=>{
  return {

  }
}

const container = connect(mapStateToProps,mapDispatchToProps)(App)

export default container;
