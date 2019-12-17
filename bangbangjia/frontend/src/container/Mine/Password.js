import React, { Component } from 'react'
import { NavBar, Icon ,Button, WhiteSpace} from 'antd-mobile';
import {Redirect} from "react-router-dom"
import "./index.css"

export default class Password extends Component {
    constructor(props){
        super(props);
        this.state={
            setting:false,
            data:[]
        }
    }
    
    setting=(e)=>{
        e.preventDefault();
        let phone=localStorage.getItem('phonenumber');
        let oldpw=document.querySelector("input[name=name1]").value;
        console.log(oldpw)
        let newpw=document.querySelector("input[name=name2]").value;    
        // console.log(this.myInput.value);
        fetch("http://localhost:8000/password", { 
            method: "POST", 
            mode: 'cors',
        　　headers: {
        　　　　'Content-Type': 'application/json'
        　　},
        　　body:JSON.stringify({"phonenumber":phone,'oldpw':oldpw,'newpw':newpw})
        })
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                data:res,
                setting:true
            })
        })
       
    }
    render() {
        if(this.state.setting){
            return <Redirect to="/setting" />
        }
        return (
            <div style={{height:"812px",background:"#f4f3f3"}}>
                {/* 导航栏 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.setting}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>密码修改</span>
                </NavBar>

                <p className="pwd-word">旧密码:</p>
                <input className="pwd-input" placeholder="若包含字母，请注意区分大小写" name='name1'/>

                <p className="pwd-word">新密码:</p>
                <input name='name2' className="pwd-input" placeholder="8-16位，至少含数字/字母/字符2种组合"/>

                {/* 确定 */}
                <Button onClick={this.setting} className="pwd-button" type="warning">确定</Button><WhiteSpace />
            </div>
        )
    }
}
