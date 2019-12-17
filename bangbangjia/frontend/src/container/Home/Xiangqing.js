import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import { NavBar,Icon,List,TextareaItem,ImagePicker,InputItem,WhiteSpace,Calendar,Button} from 'antd-mobile';
import { createForm } from 'rc-form';

import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

const data = [];
// 上门时间
const now = new Date();



class Xiangqing1 extends Component {

    constructor(props){
        super(props);
        this.state={
            home:false,
            files: data,
            en: false,
            show: false,
            config: {},
            textareaValue:"",
            inputValue:''
        }
    }

    // 回到首页
    
    onChange = (files, type, index) => {
        this.setState({
          files,
        });
        console.log(files)
    }
    handleTextareaChange=(e)=>{
        // console.log(e)
        this.setState({
            textareaValue:e//当前的值
        })
    }
    handleChange=(e)=>{
        // console.log(e);
        this.setState({
            inputValue:e,//当前的值
        })
    }
    handleClick=()=>{
        let time=this.state.startTime.toLocaleString();
        let message={
            name:'admin',
            unumber:this.state.inputValue,
            uphone:13355687451,
            rcontent:this.state.textareaValue,
            rtime:time,
            rstate:'未解决',
            worker:''
        };
        fetch('http://localhost:8000/weixiu1',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(message)
        })
        .then((res)=>res.text())
        .then((res)=>{
            console.log(res);
            this.setState({
                weixiu:true
            }) 
        })
    }
    handleClick1=()=>{
        this.setState({
            weixiu:true
        })  
    }
    // 上门时间
    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;


    renderBtn(zh, en, config = {}) {
        config.locale = this.state.en ? enUS : zhCN;

        return (
        <List.Item arrow="horizontal" 

            onClick={() => {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

            this.setState({
                show: true,
                config,
            });
            }}
        >
            {this.state.en ? en : zh}
        </List.Item>
        );
    }


    onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
        show: false,
        startTime,
        endTime,
        });
        
    }

    onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
        show: false,
        startTime: undefined,
        endTime: undefined,
        });
    }

    render() {
        if(this.state.weixiu){
            return  <Redirect to="/weixiu"/>
        }
        const { getFieldProps } = this.props.form;
        const { files } = this.state;
        return (
            <div style={{height:"812px",background:"#F4F3F3"}}>
                {/* 维修详情标题 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick1}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>维修详情</span>
                </NavBar>

                {/* 维修详情内容 */}       
                <List>
                    <TextareaItem
                        placeholder="请输入问题详情，以便我们更好的处理"
                        rows={10}
                        count={100}
                        style={{color:'#8a8a8a',fontSize:14}}
                        onChange={this.handleTextareaChange.bind(this)}
                    />
                </List>

                {/* 添加图片内容 */}
                <div style={{margin:'13px 0 3px 10px',fontSize:17}}>添加图片</div>
                <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    selectable={files.length < 5}
                    accept="image/gif,image/jpeg,image/jpg,image/png"
                />

                {/* 上门地址输入框 */}
                <List>
                    <InputItem
                        ref={el => this.labelFocusInst = el}
                        onChange={this.handleChange.bind(this)}
                    ><div onClick={() => this.labelFocusInst.focus()} >上门地址</div></InputItem>
                </List>
                <WhiteSpace/>

                {/* 上门时间输入框 */}

                <List className="calendar-list" style={{ backgroundColor: 'white'}} >
                {this.renderBtn('上门时间', 'Select DateTime', { type: 'one', pickTime: true })}
                    {
                        this.state.startTime &&
                        <List.Item>Time: {this.state.startTime.toLocaleString()}</List.Item>
                    }
                </List>
                <Calendar
                {...this.state.config}
                visible={this.state.show}
                onCancel={this.onCancel}
                onConfirm={this.onConfirm}
                onSelectHasDisableDate={this.onSelectHasDisableDate}
                getDateExtra={this.getDateExtra}
                defaultDate={now}
                minDate={new Date(+now - 5184000000)}
                maxDate={new Date(+now + 31536000000)}
                />

                
                
                {/* 提交按钮 */}
                <Button type="submit" onClick={this.handleClick} style={{width:'50%',height:'50px',color:'white',backgroundColor:'#c01c07',margin:'55px auto'}}>提交申请</Button>
                            
            </div>
        )
    }
}
const Xiangqing= createForm()(Xiangqing1);
export default Xiangqing;

