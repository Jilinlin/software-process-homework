import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {Redirect} from 'react-router-dom'
import "./index.css"

export default class Payment extends Component {
    constructor(props){
        super(props);
        this.state={
            mine:false
        }
    }

    mine=(e)=>{
        e.preventDefault();
        this.setState({
            mine:true
        })
    }

    render() {
        if(this.state.mine){
            return <Redirect to="/shouye" />
        }
        return (
            <div>
                <div className="bigbox">
                    {/* 导航栏 */}
                    <NavBar
                        mode="light"
                        icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                        onLeftClick={this.mine}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                        style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                    >
                        <span style={{fontSize:"22px"}}>缴费记录</span>
                    </NavBar>

                    <br/>
                    <p style={{fontWeight:"bold"}}>| 最近缴费</p>

                    {/* 水费缴纳 */}
                    <div className="waterbox">
                        <i className="water-icon iconfont icon-icon-humidity-copy"></i>
                        <div className="waterbox1">
                            <p className="water-word">水费缴纳</p>
                            <p>12345677 | 何*花</p>
                        </div>
                        <div className="waterbox2">
                            <p className="water-word1">50.00元</p>
                            <p style={{float:"right",marginRight:"10px"}}>2019-11-12</p>
                        </div>
                    </div>

                    <hr style={{width:"90%",marginLeft:"5%"}} />

                    {/* 电费缴纳 */}
                    <div className="waterbox">
                        <i className="water-icon iconfont icon-shandian-copy"></i>
                        <div className="waterbox1">
                            <p className="water-word">电费缴纳</p>
                            <p>12345677 | 何*花</p>
                        </div>
                        <div className="waterbox2">
                            <p className="water-word1">50.00元</p>
                            <p style={{float:"right",marginRight:"10px"}}>2019-11-12</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



