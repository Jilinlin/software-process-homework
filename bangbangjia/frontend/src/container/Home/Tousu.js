import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class Tousu extends Component {
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
                {/* 投诉建议标题 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>投诉建议</span>
                </NavBar>

                {/* 投诉建议内容 */}
                <List className="my-list">
                    <Item multipleLine onClick={() => {}}>
                        <span style={{fontSize:19,fontWeight:'bold'}}>2019-12-12 </span>
                        <Brief style={{marginTop:'5%'}}>希望小区绿化可以更加完善，多一些健身设施</Brief>
                    </Item>
        
                    <Item multipleLine onClick={() => {}} style={{borderTop:'1px solid #b51804'}}>
                        <span style={{fontSize:19,fontWeight:'bold'}}>2019-12-10 </span>
                        <Brief style={{marginTop:'5%'}}>小区车辆随意停放，影响出行，希望可以合理<br/>安排车位，设置相应标示</Brief>
                    </Item>

                    <Item multipleLine onClick={() => {}} style={{borderTop:'1px solid #b51804'}}>
                        <span style={{fontSize:19,fontWeight:'bold'}}>2019-1-12 </span>
                        <Brief style={{marginTop:'5%'}}>小区的垃圾随意投放现象严重，建议设置分类<br/>垃圾桶，并规定投放时间</Brief>
                    </Item>
                    
                </List>                
            </div>
        )
    }
}
