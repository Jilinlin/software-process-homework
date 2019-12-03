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
            config: {}
        }
    }
    // 回到首页
    handleClick=()=>{
        this.setState({
            weixiu:true
        })
    }
    onChange = (files, type, index) => {
        this.setState({
          files,
        });
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
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>维修详情</span>
                </NavBar>

                {/* 维修详情内容 */}       
                <List>
                    <TextareaItem
                        {...getFieldProps('count', {
                        initialValue: '请输入问题详情，以便我们更好的处理',
                        })}
                        rows={10}
                        count={100}
                        style={{color:'#8a8a8a',fontSize:14}}
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
                    ><div onClick={() => this.labelFocusInst.focus()}>上门地址</div></InputItem>
                </List>
                <WhiteSpace/>

                {/* 上门时间输入框 */}

                <List className="calendar-list" style={{ backgroundColor: 'white'}} >
                    {this.renderBtn('上门时间', 'Select DateTime Range', { pickTime: true })}
                    {
                        this.state.startTime &&
                        <List.Item>Time1: {this.state.startTime.toLocaleString()}</List.Item>
                    }
                    {
                        this.state.endTime &&
                        <List.Item>Time2: {this.state.endTime.toLocaleString()}</List.Item>
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
                <Button onClick={this.handleClick} style={{width:'50%',height:'50px',color:'white',backgroundColor:'#c01c07',margin:'55px auto'}}>提交申请</Button>
                            
            </div>
        )
    }
}
const Xiangqing= createForm()(Xiangqing1);
export default Xiangqing;

