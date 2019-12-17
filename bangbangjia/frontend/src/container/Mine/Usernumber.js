import React, { Component } from 'react'
import {NavBar,Icon, WhiteSpace} from "antd-mobile"
import {Redirect} from "react-router-dom"

export default class Usernumber extends Component {
    constructor(props){
        super(props);
        this.state={
            user:false,
            data:[]
        }
    }
    users=(e)=>{
        e.preventDefault();
        let phone=localStorage.getItem('phonenumber');
        let renumber=document.querySelector("input[type=text]").value;
        console.log(this.myInput.value);
        fetch("http://localhost:8000/usernumber", { 
            method: "POST", 
            mode: 'cors',
        　　headers: {
        　　　　'Content-Type': 'application/json'
        　　},
        　　body:JSON.stringify({"phonenumber":phone,'renumber':renumber})
        })
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                data:res,
                users:true
            })
        })
    }

    user=(e)=>{
        e.preventDefault();
        this.setState({
            user:true
        })
    }
    update=(e)=>{
        this.setState({data:e.target.value})
    }
    clear=()=>{
        this.setState({data:''})
        this.myInput.focus()
    }
    render() {
        if(this.state.user){
            return <Redirect to="/user" />
        }
        if(this.state.users){
            return <Redirect to="/user" />
        }
        return (
            <div style={{height:"812px",background:"#f4f3f3"}}>
                {/* 导航栏 */}   
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.user}
                    rightContent={[
                        <span onClick={this.users} style={{color:"rgb(184, 46, 46)"}} key="0">完成</span>
                    ]}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>修改门牌号</span>
                </NavBar>  
                <WhiteSpace/>
                <WhiteSpace/>
                <div className="name-div">
                    <input className="name-input" value={this.state.data} onChange={this.update} ref={myInput=>this.myInput=myInput} type='text'/>
                    <button onClick={this.clear} className="button-x iconfont icon-chahao"></button>
                </div>
            </div>
        )
    }
}
