import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import { NavBar,Icon,List,TextareaItem,ImagePicker,InputItem,WhiteSpace,Calendar,Button} from 'antd-mobile';
import { createForm } from 'rc-form';


const data = [];

class Tousujianyi1 extends Component {

    constructor(props){
        super(props);
        this.state={
            home:false,
            files: data,
            textareaValue:"",
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

    handleClick=()=>{
        let message={
            uname:'admin',
            uphone:13355687451,
            fcontent:this.state.textareaValue,
            fdate:new Date().toLocaleTimeString(),
        };
        fetch('http://localhost:8000/jianyi',{
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
    render() {
        if(this.state.weixiu){
            return  <Redirect to="/tousu"/>
        }
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
                    <span style={{fontSize:"22px"}}>投诉建议</span>
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

                
                {/* 提交按钮 */}
                <Button type="submit" onClick={this.handleClick} style={{width:'50%',height:'50px',color:'white',backgroundColor:'#c01c07',margin:'55px auto'}}>提交</Button>
                            
            </div>
        )
    }
}
const Tousujianyi= createForm()(Tousujianyi1);
export default Tousujianyi;

