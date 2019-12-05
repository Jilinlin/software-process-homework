import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import { NavBar,Icon,List,TextareaItem,ImagePicker,InputItem,WhiteSpace,Button} from 'antd-mobile';
import { createForm } from 'rc-form';

const data = [];


class Wupin1 extends Component {

    constructor(props){
        super(props);
        this.state={
            home:false,
            files: data,
        }
    }
    // 回到首页
    handleClick=()=>{
        this.setState({
            xianzhi:true
        })
    }
    onChange = (files, type, index) => {
        this.setState({
          files,
        });
    }


 


    render() {
        if(this.state.xianzhi){
            return  <Redirect to="/xianzhi"/>
        }
        const { getFieldProps } = this.props.form;
        const { files } = this.state;
        return (
            <div style={{height:"812px",background:"#F4F3F3"}}>
                {/* 添加闲置信息标题 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>添加闲置信息</span>
                </NavBar>

                {/* 添加闲置信息内容 */}       
                <List>
                    <TextareaItem
                        {...getFieldProps('count', {
                        initialValue: '请对闲置物品进行一些描述',
                        })}
                        rows={10}
                        count={100}
                        style={{color:'#8a8a8a',fontSize:14}}
                    />
                </List>

                {/* 添加物品图片内容 */}
                <div style={{margin:'13px 0 3px 10px',fontSize:17}}>添加物品图片</div>
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
                    ><div onClick={() => this.labelFocusInst.focus()} style={{color:'#8a8a8a'}}>物品名称：</div></InputItem>
                </List>
                <WhiteSpace/>

                <List>
                    <InputItem
                        ref={el => this.labelFocusInst = el}
                    ><div onClick={() => this.labelFocusInst.focus()} style={{color:'#8a8a8a'}}>物品价钱：</div></InputItem>
                </List>
                <WhiteSpace/>

                <List>
                    <InputItem
                        ref={el => this.labelFocusInst = el}
                    ><div onClick={() => this.labelFocusInst.focus()} style={{color:'#8a8a8a'}}>联系方式：</div></InputItem>
                </List>
                <WhiteSpace/>
                
                {/* 提交按钮 */}
                <Button onClick={this.handleClick} style={{width:'50%',height:'50px',color:'white',backgroundColor:'#c01c07',margin:'55px auto'}}>提交</Button>
                            
            </div>
        )
    }
}
const Wupin= createForm()(Wupin1);
export default Wupin;

