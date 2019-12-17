import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import {Icon,DatePicker, List,Button} from "antd-mobile"

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

export default class Fabu extends Component {
    constructor(props){
        super(props);
        this.state={
            gonggao:false,
            date: now,
            time: now,
            utcDate: utcNow,
            dpValue: null,
            customChildValue: null,
            visible: false,
            ano:0
        }
    }
    gonggao=(e)=>{
        e.preventDefault();
        // this.setState({
        //     gonggao:true
        // })
        let aname=document.querySelector("input[type=text]").value;
        let acontent=document.querySelector("textarea[name=acontent]").value;
        let message={
            apicture:"new1.jpg",
            ano:this.state.ano,
            aname:aname,
            acontent:acontent,
            adate:this.state.time.toLocaleString()
        };
        if(aname!=""&&acontent!=""){
            fetch("http://localhost:4000/backfabu", { 
                method: "POST", 
                mode: 'cors',
            　　headers: {
            　　　　'Content-Type': 'application/json'
            　　},
            　　body:JSON.stringify(message)
            })
            .then((res) => res.text())
            .then((res) => {
                this.setState({
                    gonggao:true
                })
                console.log(res);
            });
        }else{
            alert("不能提交空内容");
        }
        
    }

    componentWillMount(){
        fetch("http://localhost:4000/backgonggao")
        .then((res)=>res.json())
        .then((res)=>{
            let ano=res.length+1;
            this.setState({
                ano:ano
            })
        })
    }


    render() {
        if(this.state.gonggao){
            return <Redirect to="/appback/gonggao" />
        }
        return (
            <div>
                <div className="fabu-top">
                    <span className="fabu-word">公告管理</span>
                    <Icon onClick={this.gonggao} className="fabu-icon" type="left" />
                    <span style={{marginLeft:"1%"}} className="fabu-word">返回</span>
                </div>
                <List  style={{ backgroundColor: 'white' }}>
                    <DatePicker
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                    >
                    <List.Item className="datepicker" arrow="horizontal">
                        <button className="date-btn">日期</button>
                    </List.Item>
                    </DatePicker>
                </List>
                <div className="fabu-title">
                    <button className="title">标题</button>
                    <input name="aname" type="text" className="title-input"></input>
                </div>
                <div className="fabu-content">
                    <button className="title">内容</button>
                    <textarea name="acontent" className="title-input"></textarea>
                </div>
                <Button onClick={this.gonggao} type="primary" inline size="small" style={{marginLeft:"45%"}}>发布</Button>
            </div>
            
        )
    }
}