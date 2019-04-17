import React from 'react';

import { connect } from 'react-redux'

import './css/amazeui.css'
import './css/app.css'

class Login extends React.Component{

    state = {
        user : "",
        psd : ""
    }

    user(e){
        this.setState({
            user : e.target.value
        })
    }
    psd(e){
        this.setState({
            psd : e.target.value
        })
    }
    setCookie(key,value,day){
        var d = new Date();
        d.setDate(d.getDate() + day);
        document.cookie = key + "=" + value + ";expires" + d;
    }
    


    render(){
        return (
            <div className="am-g myapp-login">
                <div className="myapp-login-bg">
                    <div className="myapp-login-logo">
                        <i className="am-icon-stumbleupon"></i>
                    </div>
                    <div className="am-u-sm-10 myapp-login-form">
                        <form className="am-form">
                            <fieldset>
                                <div className="am-form-group">
                                    <input type="text" className="" value={this.state.user} placeholder="用户名" onChange = {this.user.bind(this)} />
                                </div>

                                <div className="am-form-group">
                                    <input type="password" className="" value={this.state.psd}  placeholder="密码" onChange = {this.psd.bind(this)} />
                                </div>
                                <p ref = "tips" style = {{display : "none"}}>账号或者密码错误</p>
                                <p>
                                    <button className="am-btn am-btn-default" 
                                        onClick = {
                                            (e)=>{
                                                e.preventDefault();
                                                this.props.checkCount({user : this.state.user, psd : this.state.psd, that : this
                                                })}
                                        }
                                    >
                                        Login
                                    </button>
                                </p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state,props)=>{
    return {
  
    }
  }
  
  const mapDispatchToProps = (dispatch,props)=>{
    return {
      checkCount : (count)=>{
        fetch(
            '/data/countlist.json'
        ).then(res=>res.json()
        ).then(data=>{
            data.forEach(val=>{
                if(val.user === count.user && val.psd === count.psd){
                    dispatch({type : "COUNT", payload : val});
                    count.that.setCookie("checkNum",`{"CountId":${val.id}}`);
                    count.that.props.history.push("/user")
                }
            })
            // console.log(count.that)
            if(count.that.refs.tips){
                count.that.refs.tips.style.display = "block"
            }
        })

        
      }
    }
  }
  
  
  const container = connect(mapStateToProps,mapDispatchToProps)(Login)


export default container;