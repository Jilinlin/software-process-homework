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
            home:false
        }
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
                    <Item arrow="horizontal" multipleLine onClick={() => {}}>
                        <span style={{fontSize:19,fontWeight:'bold'}}>最新通知 </span>
                        <Brief>***小区将于10月22-24日收取供暖费。</Brief>
                        <Brief style={{fontSize:10,marginLeft:'75%',marginTop:'5%'}}>2019-10-22</Brief>
                    </Item>
        
                    <Item arrow="horizontal" multipleLine onClick={() => {}} style={{borderTop:'1px solid #b51804'}}>
                        <span style={{fontSize:19,fontWeight:'bold'}}>水费通知 </span>
                        <Brief>请注意查收水费欠费单哦</Brief>
                        <Brief style={{fontSize:10,marginLeft:'75%',marginTop:'5%'}}>2019-10-11</Brief>
                    </Item>
                    
                    <Item arrow="horizontal" multipleLine onClick={() => {}} style={{borderTop:'1px solid #b51804'}}>
                        <span style={{fontSize:19,fontWeight:'bold'}}>消防检查 </span>
                        <Brief>住宅小区消防安全检查已完成</Brief>
                        <Brief style={{fontSize:10,marginLeft:'75%',marginTop:'5%'}}>2019-10-11</Brief>
                    </Item>
                    
                </List>


                
            </div>
        )
    }
}
