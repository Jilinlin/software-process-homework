import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {Redirect} from 'react-router-dom'
import "./index.css"

export default class Payment extends Component {
    constructor(props){
        super(props);
        this.state={
            mine:false,
            data:[]
        }
    }
    componentDidMount(){
        let phone=localStorage.getItem('phonenumber');
        fetch("http://localhost:8000/payment", { 
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
    mine=(e)=>{
        e.preventDefault();
        this.setState({
            mine:true
        })
    }

    render() {
        if(this.state.mine){
            return <Redirect to={{pathname:"/shouye",state:{tab:"3"}}}/>
        }
        return (
            <div style={{height:"812px",background:"#fff"}}>
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
                    <p style={{fontWeight:"bold",fontSize:"25px"}}>| 最近缴费</p>

                    {/* 水费缴纳 */}
                    <ul>
                        {
                            this.state.data.map((item,idx)=>{
                                return <li key={idx}>
                                    <div className="waterbox">
                                        <i className="water-icon iconfont icon-icon-humidity-copy  " style={{color:'brown',fontSize:"40px"}}></i>
                                        <div className="waterbox1">
                                            <p className="water-word" style={{color:"#000",fontSize:"20px",marginBottom:"5px"}}> {item.ptype} </p>
                                            <p > {item.name} </p>
                                        </div>
                                        <div className="waterbox2">
                                            <p className="water-word1" style={{fontSize:"20px",margin:"0 10px 5px 0",width:"80px",paddingRight:"10px"}}> <span style={{float:"right"}}>{item.addmoney}元 </span></p>
                                            <p style={{float:"right",marginRight:"10px",width:"170px"}}> {item.ptime} </p>
                                        </div>
                                    </div>
                                    <hr style={{width:"90%",marginLeft:"5%"}} />
                                </li>
                            })
                        }
                    </ul>
                    

                    
                </div>
            </div>
        )
    }
}



