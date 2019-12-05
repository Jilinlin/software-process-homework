// npm install react-cookie --save

import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import './login.css'
const touxiang=require('../img/login_touxiang.jpg')

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            login:false,
            username:"",
            password:""
        }
    }
    
    doLogin=(e)=>{
        e.preventDefault();
        let username=document.querySelector("input[type=text]").value;
        let password=document.querySelector("input[type=password]").value;
        // console.log(username)
        if(username==="admin"&&password==="123456"){
            this.setState({
                login :true
            })
        }     
    }
    changeIcon=(e)=>{
        let classname=e.target.getAttribute("class");
        let username=document.querySelector("input[type=text]").value;
        let password=document.querySelector("input[type=password]").value;
        if(classname=="iconfont icon-not_Selected-copy"){
            e.target.setAttribute("class","iconfont icon-selected-copy");
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
        }else if(classname=="iconfont icon-selected-copy"){
            e.target.setAttribute("class","iconfont icon-not_Selected-copy");
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    }
    componentWillMount(){
        if(localStorage){
            let username=localStorage.getItem("username");
            let password=localStorage.getItem("password");
            this.setState({
                username:username,
                password:password
            })
        }
    }

    render() {
        if(this.state.login){
            return <Redirect to="/appback/home"/>
        }
        return (
            <div className="all" >
                <div className="heade">
                    <div className='bang' >帮帮家</div>
                    <div className="headeRight">您的贴心管家</div>
                </div>
                <div className="login_body">
                    <div className="login_top">
                        <div className="login_touxiang">
                            <img src={touxiang}/>
                        </div>
                    </div>
                    <form className="login_bottom">
                        <div className="login_bottom_top">
                            <div className="login_bottom_input">
                                <div className="login_bottom_input_word">用户名</div>
                                <input type='text' name='name' defaultValue={this.state.username}/>
                            </div>
                        </div>
                        <div className="login_bottom_top">
                            <div className="login_bottom_input">
                                <div className="login_bottom_input_word">密码</div>
                                <input type='password' name='password' defaultValue={this.state.password}/>
                                <div className="login_rp">
                                    <i style={{color:"#0195f8",marginRight:"5px"}} onClick={this.changeIcon} className="iconfont icon-not_Selected-copy"></i>记住密码
                                </div>
                            </div>
                        </div>
                        <div className="login_bottom_bottom">
                            <button value='登录' type='submit' onClick={this.doLogin}>登录</button> 
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}