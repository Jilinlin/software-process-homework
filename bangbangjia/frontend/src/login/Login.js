import React, { Component } from 'react'
import  {NavBar,Icon} from 'antd-mobile'
import {Link} from 'react-router-dom'
import './Login.css'
import { Redirect } from "react-router-dom";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            login:false,
            touxiang:"app图标.jpg",
            name:"欢迎"
        }
    }
    
    doLogin=(e)=>{
        e.preventDefault();
        let usertel=document.querySelector("input[type=text]").value;
        let password=document.querySelector("input[type=password]").value;
        let message={
            usertel:usertel,
            password:password
        }
        // console.log(message);
        fetch("http://localhost:8000/login", { 
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
                localStorage.setItem("phonenumber",usertel);
                console.log(localStorage.getItem('phonenumber'))
                this.setState({
                    login:true,
                })
            } 
        });

    }
    getTouxiang=(e)=>{
        e.preventDefault();
        // console.log(1);
        let usertel=document.querySelector("input[type=text]").value;
        console.log(usertel);
        if(usertel!=""){
            fetch("http://localhost:8000/get_img", { 
                method: "POST", 
                mode: 'cors',
            　　headers: {
            　　　　'Content-Type': 'application/json'
            　　},
            　　body:JSON.stringify({"usertel":usertel})
            })
            .then((res) => res.text())
            .then((res) => {
                if(res=="The user does not exist"){
                    alert("该用户不存在")
                }else if(res){
                    console.log(JSON.parse(res));
                    if(JSON.parse(res).touxiang!=null&&JSON.parse(res).name!=null){
                        this.setState({
                            touxiang:JSON.parse(res).touxiang,
                            name:JSON.parse(res).name
                        })
                    } 
                }
            });
        }     
    }



    render() {
        if(this.state.login){
            // return  <Redirect to="/shouye"/>
            return  <Redirect to={{pathname:"/shouye",state:{tab:"1"}}}/>
         }
        return (
            <div style={{width:'100%',height:'812px',backgroundColor:'#F4F3F3'}}>
                  <NavBar
                       style={{backgroundColor:'#eee',color:'black',fontSize:22}}
        >{this.state.name}登录
                  </NavBar>
                  <div style={{width:'100%',height:'200px'}}>
                        <img  src={require("../img/"+this.state.touxiang)} style={{width:'40%',height:'70%',borderRadius:'50%',marginLeft:'30%',marginTop:'8%'}}></img>
                 </div>
                 <form >
                     <input onBlur={this.getTouxiang} type='text' name='name' id='name' placeholder='邮箱/手机号'style={{width:'90%',height:'50px',marginLeft:'5%',backgroundColor:'#eee',border:'0'}}></input>
                     <input type='password' name='password' id='password' placeholder='登录密码'style={{width:'90%',height:'50px',marginLeft:'5%',marginTop:'20px',backgroundColor:'#eee',border:'0'}}></input>
                     <button style={ {color: 'white',fontSize: 25,backgroundColor:'#b34449',border:'0',width:'90%',height:'50px',marginLeft:'5%',marginTop:'20px'} } value='登录' type='submit' onClick={this.doLogin} >登录 </button> 
                 </form>
                 <div style={{width:'90%',height:'60px',marginLeft:'5%'}}>
                     <Link to='/register'style={{float:'left',fontSize:'15px',width:'100px',height:'60px',paddingTop:'30px',fontWeight:'bold'}} >手机快速注册</Link>
                     <Link to='/forgetpw' style={{float:'right',fontSize:'15px',width:'100px',height:'60px',paddingTop:'30px',fontWeight:'bold'}}>忘记密码</Link>
                </div>
                <div style={{width:'100%',height:80}}>
                        <div style={{borderTop:'1px solid',width:'38%',marginTop:'50px',float:'left'}}></div>
                        <p style={{float:'left',marginTop:'41px'}}>第三方登录</p>
                        <div style={{borderTop:'1px solid',width:'38%',marginTop:'50px',float:'right'}}></div>
                </div>
                <div  className='third_login' >    
                        <i style={{fontSize:40,width:'33%',height:'60',float:'left',paddingLeft:'10%',color:'green'}} className='iconfont icon-weixin1'></i>
                        <i style={{fontSize:40,width:'33%',height:'60',float:'left',paddingLeft:'10%',color:'blue'}} className='iconfont icon-qq1'></i>
                        <i style={{fontSize:40,width:'33%',height:'60',float:'left',paddingLeft:'10%',color:'brown'}} className='iconfont icon-weibo1'></i>    
                </div>
                <div className='agree'>
                    <p className='agree-p1'>登录代表你已同意</p>
                    <p className='agree-p2'>《xx用户协议》</p>
                </div>
            </div>
        )
    }
}

