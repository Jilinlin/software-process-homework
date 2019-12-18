import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class Gonggao extends Component {
    constructor(props){
        super(props);
        this.state={
            home:false,
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:8000/gonggao')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({data:res});
        })
    }
    // 回到首页
    handleClick=()=>{
        this.setState({
            home:true
        })
    }
    render() {
        if(this.state.home){
            return  <Redirect to="/shouye"/>
        }
        return (
            <div style={{height:"812px",background:"#F4F3F3"}}>
                {/* 小区公告标题 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>小区公告</span>
                </NavBar>

                {/* 小区公告内容 */}
                <List className="my-list">
                    <ul>
                        {
                            this.state.data.map((item,idx)=>{
                                return <li key={idx}>
                                    <div onClick={() => {}} style={{borderBottom:'1px solid #b51804',padding:"10px"}} >
                                        <span style={{fontSize:22,fontWeight:'bold'}}> {item.aname} </span>
                                        <div style={{width:"95%",height:"80px",fontSize:15,color:"black",marginTop:"10px"}}> {item.acontent} </div>
                                        <div style={{fontSize:15,marginLeft:'75%'}}> {item.adate} </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </List>


                
            </div>
        )
    }
}
