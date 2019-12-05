import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import {NavBar,Icon,List,ImagePicker} from "antd-mobile"


const data = [];
  
export default class User extends Component {
    
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
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
                files:data
            }
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
            <div>
                {/* 导航栏 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.setting}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>个人信息</span>
                </NavBar>

                <List style={{marginTop:12}}>
                    <List.Item>
                    <span style={{ marginLeft: 12 }}>头像</span>
                    
                    {/* <img style={{marginLeft:'73%',width:"30px",height:"30px",borderRadius:"5em"}} src={[require("../../img/Mine/hmm.jpg")]} alt=""/> */}
                    <ImagePicker
                        length="6"
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 1}
                        disableDelete
                    />
                    </List.Item> 
                    <hr/>
                    <List.Item onClick={this.username} extra="韩梅梅" arrow="horizontal">
                    <span style={{ marginLeft: 12 }}>姓名</span>
                    </List.Item>
                    <hr/>
                    <List.Item onClick={this.userphone} extra="xxxxxxxx" arrow="horizontal">
                    <span style={{ marginLeft: 12 }}>电话</span>
                    </List.Item>
                    <hr/>
                    <List.Item onClick={this.usernumber} extra="xx-x-xxxx" arrow="horizontal">
                    <span style={{ marginLeft: 12 }}>门牌号</span>
                    </List.Item>
                </List>
            </div>
        )
    }
}
