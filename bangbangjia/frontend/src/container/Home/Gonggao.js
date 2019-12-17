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
                                    <Item multipleLine onClick={() => {}} style={{borderBottom:'1px solid #b51804'}} >
                                        <span style={{fontSize:19,fontWeight:'bold'}}> {item.aname} </span>
                                        <Brief> {item.acontent} </Brief>
                                        <Brief style={{fontSize:10,marginLeft:'75%'}}> {item.adate} </Brief>
                                    </Item>
                                </li>
                            })
                        }
                    </ul>
                </List>


                
            </div>
        )
    }
}
