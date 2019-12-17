import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import {NavBar,Icon,List,ImagePicker} from "antd-mobile"
import { Item } from 'rc-menu';


const data = [];
  
export default class User extends Component {
    
    onChange = (files, type, index) => {
        let img=files[0].file.name;
        let phone=localStorage.getItem('phonenumber');
        console.log(files[0].file.name) ;
        fetch('http://localhost:8000/img',{
            method: "POST", 
            mode: 'cors',
        　　headers: {
        　　　　'Content-Type': 'application/json'
        　　},
        　　body:JSON.stringify({"phonenumber":phone,'img':img})
        })
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                files
            })
        })
        console.log(files, type, index);
      };
      
      onTabChange = (key) => {
          console.log(key);
        };
        
        
        constructor(props){
            super(props);
            this.state={
                setting:false,
                username:false,
                userphone:false,
                usernumber:false,
                files:data,
                data:[]
            }
        }
        componentDidMount(){
            let phone=localStorage.getItem('phonenumber');
            fetch("http://localhost:8000/user", { 
                method: "POST", 
                mode: 'cors',
            　　headers: {
            　　　　'Content-Type': 'application/json'
            　　},
            　　body:JSON.stringify({"phonenumber":phone})
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data:res,
                })
            })
        }
        
        
    setting=(e)=>{
        e.preventDefault();
        this.setState({
            setting:true
        })
    }
    username=(e)=>{
        e.preventDefault();
        this.setState({
            username:true
        })
    }
    userphone=(e)=>{
        e.preventDefault();
        this.setState({
            userphone:true
        })
    }
    usernumber=(e)=>{
        e.preventDefault();
        this.setState({
            usernumber:true
        })
    }

    render() {
        const { files } = this.state;
        if(this.state.setting){
            return <Redirect to="/setting"/>
        }
        else if(this.state.username){
            return <Redirect to="/username" />
        }
        else if(this.state.userphone){
            return <Redirect to="/userphone" />
        }
        else if(this.state.usernumber){
            return <Redirect to="/usernumber" />
        }
        return (
            <div style={{height:"812px",background:"#fff"}}>
                {/* 导航栏 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.setting}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>个人信息</span>
                </NavBar>

                <List style={{marginTop:12,border:"none"}}>
                    <List.Item>
                    <span style={{ margin:"40px 200px 0 22px",float:"left" }}>头像</span>
                    
                    {/* <img style={{marginLeft:'73%',width:"30px",height:"30px",borderRadius:"5em"}} src={[require("../../img/Mine/hmm.jpg")]} alt=""/> */}
                    <ImagePicker
                        length="1"
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 1}
                        disableDelete
                    />
                    </List.Item>
                    <ul className="card">
                       {
                         this.state.data.map((item,idx)=>{
                            return  <li key={idx}>
                                        <List.Item onClick={this.username} extra={item.name} arrow="horizontal">
                                        <span style={{ marginLeft: 12 }}>姓名</span>
                                        </List.Item>
                                        <hr/>
                                        <List.Item onClick={this.usernumber} extra={item.unumber} arrow="horizontal">
                                        <span style={{ marginLeft: 12 }}>门牌号</span>
                                         </List.Item>
                                    </li>
                         })}
                    </ul>
                </List>
            </div>
        )
    }
}
