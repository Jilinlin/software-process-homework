import React, { Component } from 'react'
import {Redirect,Link,Router} from 'react-router-dom'
import { formatCountdown } from 'antd/lib/statistic/utils';

export default class Guanli extends Component {
    constructor(props){
        super(props);
        this.state={
            add:false,
            data:[],
            show:false,
            data1:"",
            num:[1,2,3,4,5]
        }
            }

    add=(e)=>{
        e.preventDefault();
        this.setState({
            add:true
        })
    }
    show=(mname)=>{
        console.log(mname)
        this.setState({
            show:true,
            data1:mname
        })
    }

    componentWillMount(){
        fetch("http://localhost:4000/backguanli",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"page":1})
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res
            })
            console.log(this.state.data);
        })
    }
    Page=(page)=>{
        fetch("http://localhost:4000/backguanli",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"page":page})
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })
        })
    }


    render() {
        if(this.state.add){
            console.log(this.state.add)
            return  <Redirect to="/appback/guanli/tianjia"/>
        }
        if(this.state.show){
            console.log(this.state.show)
            return (
                    <Redirect to={{
                    pathname:"/appback/guanli/show",
                    state:{mname:this.state.data1}
                }}
                />
                
            ) 
            // return <Redirect to='/show' />
            
        }
        return (
            <div> 
                <div style={{width:'660px',height:100,borderRight:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <p style={{float:'left',fontSize:'25px',marginTop:'25px',marginLeft:'20px'}}>管理人员</p>
                    <button value='添加' style={{float:'right',width:100,height:30,marginTop:'25px',marginRight:'20px',borderRadius:5,backgroundColor:'white',border:'1px solid gray'}} onClick={this.add}>添加</button>
                </div>
                <div style={{width:'660px',height:325}}>
                    <ul>
                        {
                            this.state.data.map((item,idx)=>{ 
                                return <li key={idx} style={{width:'252px',height:'122px',marginLeft:50,float:'left',marginTop:30,borderRadius:5,border:'1px solid #eee', boxShadow: '0px 5px 8px gray'}}>
                                       <div className='manage'>
                                           <img src={require('../../img/'+item.mpicture)}/>
                                       </div>
                                       <div className='manage1'>
                                           <div className='manage2'>
                                               <div style={{height:40,width:200,float:'left',fontWeight:'bold',fontSize:20}}>{item.mname}</div>
                                               <div style={{width:200,float:'left'}}>性别：{item.msex}</div>
                                               <div style={{width:200,float:'left'}}>手机号：{item.mphone}</div>
                                            </div>
                                            <div className='manage3'>
                                                <div>
                                                    <i  className='iconfont icon-xiazhai' style={{float:'left',fontSize:22}}></i>
                                                </div>
                                                <div style={{float:'left',marginTop:5,marginLeft:5}}>{item.mno}</div>
                                                <div>
                                                <i  className='iconfont icon-web-icon-' style={{float:'left',fontSize:22,marginLeft:30}}></i>
                                                </div>
                                                <div style={{float:'left',marginTop:5,marginLeft:5,color:'brown'}} onClick={this.show.bind(this,item.mname)}>更多</div>
                                            </div>
                                       </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div  className="numb" style={{position:'relative',bottom:-65,left:30}}>
                    <ul>
                        {
                            this.state.num.map((item,idx)=>{
                                return <li key={idx} onClick={this.Page.bind(this,item)}>{item}</li>
                                // onClick={this.Change.bind(this,item)}
                            })
                        }
                    </ul>
                </div>

            </div>
        )
    }
}
