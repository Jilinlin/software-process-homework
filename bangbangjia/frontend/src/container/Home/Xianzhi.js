import React,{ Component } from 'react'
import {Redirect} from "react-router-dom"
import { NavBar, Icon,ListView} from 'antd-mobile';
import ReactDOM from 'react-dom'
 
export default class Xianzhi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            home:false,
            data:[]
        };
      }

    componentDidMount() {
        fetch('http://localhost:8000/xianzhi')
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
    // 跳转下一页
    doNext=()=>{
        this.setState({
            wupin:true
        })
    }

    render() {
        if(this.state.home){
            return  <Redirect to="/shouye"/>
        }else if(this.state.wupin){
            return <Redirect to="/wupin"/>
        } 
        return (
            // #F4F3F3
            <div style={{background:"#F4F3F3"}}>
                {/* 闲置信息标题 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>闲置信息</span>
                </NavBar>
                <div>
                    <ul>
                        {
                            this.state.data.map((item,idx)=>{ 
                                return <li key={idx} style={{width:'42%',height:'215px',float:'left',marginTop:12,borderRadius:5,border:'1.5px solid rgb(218,218,218)',marginLeft:'5%',backgroundColor:'white'}}>
                                            <img src={require(`../../img/`+item.lpicture)} style={{width:'100%',height:'130px',float:'left'}}/>
                                            <div style={{marginLeft:'5%',lineHeight:'5px',marginTop:'150px'}}>
                                                <p style={{fontSize:18,fontWeight:'bold'}}>{item.lname}</p>
                                                <p style={{color:'rgb(171,22,2)'}}>￥{item.lprice}</p>
                                                <p>{item.name}{item.uphone} </p>
                                            </div>
                                        </li>
                            })
                        }
                    </ul>
                </div>
                {/* 添加闲置信息内容 */}
                <NavBar
                    mode="light"
                    style={{background:"#f2f2f2",lineHeight:"60px",width:'100%',position:'fixed',bottom:'0'}}
                    // ,position:'fixed',bottom:'0'
                >
                    <i onClick={()=>{this.doNext()}} style={{fontSize:50,color:'#ab1602'}} className='iconfont icon-jiahao'></i>
                </NavBar>       
            </div>
        )
    }
}
