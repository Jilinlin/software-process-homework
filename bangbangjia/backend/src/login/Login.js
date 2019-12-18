// npm install react-cookie --save

import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import './login.css'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            login:false,
            username:"",
            password:"",
            touxiang:"app图标.jpg"
        }
    }

    getImg=(e)=>{
        e.preventDefault();
        let username=document.querySelector("input[type=text]").value;
        console.log(username);
        if(username!=""){
            fetch("http://localhost:4000/backget_img", { 
                method: "POST", 
                mode: 'cors',
            　　headers: {
            　　　　'Content-Type': 'application/json'
            　　},
            　　body:JSON.stringify({"username":username})
            })
            .then((res) => res.text())
            .then((res) => {
                if(res=="The user does not exist"){
                    alert("该用户不存在")
                }else if(res){
                    this.setState({
                        touxiang:res
                    })
                }
            });
        }
    }
    
    doLogin=(e)=>{
        e.preventDefault();
        let username=document.querySelector("input[type=text]").value;
        let password=document.querySelector("input[type=password]").value;
        let message={
            username:username,
            password:password
        }
        console.log(message);
        fetch("http://localhost:4000/backlogin", { 
            method: "POST", 
            mode: 'cors',
        　　headers: {
        　　　　'Content-Type': 'application/json'
        　　},
        　　body:JSON.stringify(message)
        })
        .then((res) => res.text())
        .then((res) => {
            if(res=="login failure"){
                alert("登录失败")
            }else{
                localStorage.setItem("phone",res);
                this.setState({
                    login:true
                })
            }
        });

    }
    changeIcon=(e)=>{
        let username=document.querySelector("input[type=text]").value;
        let password=document.querySelector("input[type=password]").value;
        let classname=e.target.getAttribute("class");
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
        <div className='bang' >帮帮家{this.state.express}</div>
                    <div className="headeRight">您的贴心管家</div>
                </div>
                <div className="login_body">
                    <div className="login_top">
                        <div className="login_touxiang">
                            <img src={require("../img/"+this.state.touxiang)}/>
                        </div>
                    </div>
                    <form className="login_bottom">
                        <div className="login_bottom_top">
                            <div className="login_bottom_input">
                                <div className="login_bottom_input_word">用户名</div>
                                <input
                                    placeholder="请输入用户名"
                                    type="text"
                                    onBlur={this.getImg}
                                    defaultValue={this.state.username}
                                />
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