import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { ImagePicker } from 'antd-mobile';

const data = [];
  

export default class Tianjia extends Component {
    constructor(props){
    super(props);
    this.state={
        back:false,
        files: data,
        tianjia:false
    }}
    
    back=(e)=>{
        e.preventDefault();
        this.setState({
            back:true
        })
    }
    // 添加图片      
    onChange = (files, type, index) => {
        console.log(files, type, index);
        // console.log(files[0].file.name);
        this.setState({
            files
        });
    };
    onTabChange = (key) => {
    console.log(key);
    };

    addmanager=(e)=>{
        e.preventDefault();
        //这里缺一个头像图片获取
        let mpicture=this.state.files[0].file.name;
        let mno=document.querySelector("input[name=name1]").value;
        let mname=document.querySelector("input[name=name2]").value;
        let mpwd=document.querySelector("input[name=pwd]").value;
        let msex=document.querySelector("input[name=sex]").value;
        let mage=document.querySelector("input[name=name3]").value;
        let mid=document.querySelector("input[name=name4]").value;
        let mphone=document.querySelector("input[name=name5]").value;

        let message={
            mpicture:mpicture,
            mno:mno,
            mname:mname,
            mpwd:mpwd,
            msex:msex,
            mage:mage,
            mid:mid,
            mphone:mphone,
            mstate:0
        };
        fetch("http://localhost:4000/backaddmanager", { 
            method: "POST", 
            mode: 'cors',
        　　headers: {
        　　　　'Content-Type': 'application/json'
        　　},
        　　body:JSON.stringify(message)
        })
        .then((res) => res.text())
        .then((res) => {
            console.log(res);
            this.setState({
                tianjia :true
            })
        });
    }

    render() {
        if(this.state.back){
            // console.log(this.state.back)
            return  <Redirect to="/appback/guanli"/>
        }
        const { files } = this.state;
        if(this.state.tianjia){
            // console.log(this.state.tianjia)
            return  <Redirect to="/appback/guanli"/>
        }
        return (
            <div> 
                <div style={{width:'660px',height:100,borderRight:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <p style={{float:'left',fontSize:'25px',marginTop:'25px',marginLeft:'20px'}}>管理员信息</p>
                    <div style={{width:'70px',height:'30px',float:'right',marginTop:35,marginRight:25}} onClick={this.back}>
                        <i  className='iconfont icon-fanhui' style={{float:'left',fontSize:20}}></i>
                        <p style={{marginLeft:30,fontSize:18}}>返回</p>
                    </div>
                </div>
                <div className='tianjia'>
                <ImagePicker
                        length="3"
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 1}
                        disableDelete
                        style={{marginLeft:'280px'}}
                        accept="image/jpg"
                />
                </div>
                <div style={{marginLeft:'290px',width:'660px',height:'20px',marginBottom:10}}>只支持.jpg格式</div>
                <form className='tianjia1'>
                    <div>
                         <p style={{marginLeft:'200px',fontSize:18}}>工号：</p>
                         <input name='name1' style={{marginLeft:'30px',height:25,borderRadius:5,border:'1px solid gray'}} placeholder='单行输入'type='text'></input>
                    </div>
                    <div>
                         <p style={{marginLeft:'200px',fontSize:18}}>姓名：</p>
                         <input  name='name2'style={{marginLeft:'30px',height:25,borderRadius:5,border:'1px solid gray'}}  placeholder='单行输入'type='text'></input>
                    </div>
                    <div>
                         <p style={{marginLeft:'200px',fontSize:18}}>密码：</p>
                         <input  name='pwd'style={{marginLeft:'30px',height:25,borderRadius:5,border:'1px solid gray'}}  placeholder='单行输入'type='text'></input>
                    </div>
                    <div>
                         <p style={{marginLeft:'200px',fontSize:18}}>性别：</p>
                         <input  name='sex'style={{marginLeft:'30px',height:25,borderRadius:5,border:'1px solid gray'}}  placeholder='单行输入'type='text'></input>
                    </div>
                    <div>
                         <p style={{marginLeft:'200px',fontSize:18}}>年龄：</p>
                         <input  name='name3'style={{marginLeft:'30px',height:25,borderRadius:5,border:'1px solid gray'}}  placeholder='单行输入'type='text'/>
                    </div>
                    <div>
                         <p style={{marginLeft:'200px',fontSize:18}}>身份证号:</p>
                         <input  name='name4'style={{marginLeft:8,height:25,borderRadius:5,border:'1px solid gray'}}  placeholder='单行输入'type='text'></input>
                    </div>
                    <div>
                         <p style={{marginLeft:'200px',fontSize:18}}>手机号：</p>
                         <input  name='name5'style={{marginLeft:11,height:25,borderRadius:5,border:'1px solid gray'}} placeholder='单行输入'type='text'></input>
                    </div>
                    <button value='添加' className='tianjia3' type='submit'  onClick={this.addmanager}>添加</button>
                </form>
            </div>
        )
    }
}
