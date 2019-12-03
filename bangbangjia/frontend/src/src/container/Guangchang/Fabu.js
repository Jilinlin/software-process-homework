import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import { NavBar, Icon,Button, InputItem, WhiteSpace } from 'antd-mobile';
import { ImagePicker} from 'antd-mobile';
import Guangchang from './Guangchang';


export default class Fabu extends Component {
    constructor(props){
        super(props);
        this.state={
            back:false,
            sub:false,
            files:[],
            inputValue:""
        }
    }
    onChange = (files, type, index) => {
        // console.log(files, type, index);
        this.setState({
          files,
        });
      }
    fabu=()=>{
        this.setState({
            back:true
        })
    }
    tijiao=()=>{
        this.setState({
            sub:true
        })
    }
    handleChange=(e)=>{
        this.setState({
            inputValue:e.target.value,//当前的值
        })
    }
    render() {
        const { files } = this.state;
        if(this.state.back){
            return <Redirect to="/shouye"/>
         }
         if(this.state.sub){
            console.log(this.state.inputValue);
            return <Guangchang value={this.state.inputValue} />
         }
        return (
            <div className="Fall">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{color:"black"}} />}
                    onLeftClick={this.fabu}
                    style={{backgroundColor:"#f2f2f2",height:"40px"}}
                >动态</NavBar>
                <form >
                    <div className="fabu">
                        <input placeholder="发布一下心情吧" onChange={this.handleChange} type="text"/>
                        {/* <div>{this.state.inputValue}</div> */}
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            // onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 5}
                            accept="image/gif,image/jpeg,image/jpg,image/png"
                            style={{marginTop:"25%",width:"130%"}}
                        />
                    </div>
                    <div>
                        <button className="add iconfont icon-biaoqian" style={{color:'#3a8039'}}><span>添加标签</span></button>
                        <button className="add iconfont icon-weizhi-copy" style={{color:'#fc9560'}}><span>添加位置</span></button>
                        <button className='fabiao' type="submit" onClick={this.tijiao}>发表</button>
                    </div>
                </form>
            </div>
            
        )
    }
}
