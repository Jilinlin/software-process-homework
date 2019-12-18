import React, { Component } from 'react'
import { Flex, Button,Picker, WhiteSpace, WingBlank, NavBar, Icon, ImagePicker, SegmentedControl,List} from 'antd-mobile';
import { district,provinceLite } from 'antd-mobile-demo-data';
import arrayTreeFilter from 'array-tree-filter';
import {Redirect} from 'react-router-dom'

const CustomChildren = props => (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: '#fff' }}
    >
      <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
        <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
        <div style={{ color: '#888'}}>{props.extra}</div>
      </div>
    </div>
  );
        const seasons = [
            [
            {
                label: '冀',
                value: '冀',
            },
            {
                label: '京',
                value: '京',
            },
            {
                label: '沪',
                value: '沪',
            },
            ],
        ];
export default class FindTraffic extends Component {
    constructor(props){
        super(props);
                this.state={
                    back:false
                }
                this.state={
                    check:false
                }
                this.state = {
        
                    sValue: ['冀'],
                }
    }
    
    back=(e)=>{
        e.preventDefault();
        this.setState({
            back:true
        })

    }
    check=(e)=>{
        e.preventDefault();
        let check1=document.querySelector("input[id=name1]").value;
        let check2=document.querySelector("input[id=name2]").value;
        let check3=document.querySelector("input[id=name3]").value;
            if(check1!==""&&check2!==""&&check3!==""){
                this.setState({
                     check :true
               })
            // console.log(this.state.sValue+check1,check2,check3);
            }
    }
        onClick = () => {
            setTimeout(() => {
            this.setState({
                data: provinceLite,
            });
            }, 120);
        };
        getSel() {
            const value = this.state.pickerValue;
            if (!value) {
            return '';
            }
            const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
            return treeChildren.map(v => v.label).join(',');
        }
    
    render() {
        if(this.state.back){
            console.log(this.state.back)
            return  <Redirect to="/shouye"/>
        }
        if(this.state.check){
            console.log(this.state.check)
            let check1=this.state.sValue+document.querySelector("input[id=name1]").value;
            let check2=document.querySelector("input[id=name2]").value;
            let check3=document.querySelector("input[id=name3]").value;
            return  <Redirect to={{pathname:"/breaktraffic",state:{"check1":check1,"check2":check2,"check3":check3}}}/>
        }
        return (
            <div style={{width:'100%',height:812,backgroundColor:'#eee'}}>
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.back}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>违章查询</span>
                </NavBar>


              <div style={{width:'100%',height:'40px',lineHeight:'40px',paddingLeft:'5%'}}>以下信息仅供于交通局查询，我们将严格保密。</div>


              <form style={{width:'100%',height:'260px'}} onSubmit={this.check}>
                  <div style={{width:'100%',height:'50px',backgroundColor:'white'}}>
                      <div style={{width:'30%',fontSize:22,marginLeft:'5%',paddingTop:'10px',fontWeight:'bold',float:'left'}}>车牌号码</div>
                      <input type='text' id='name1' placeholder='车牌号码' style={{width:'22%',height:50,float:'right',border:'0',fontSize:18}}></input>
                      <div style={{width:'20%',height:50,float:'right'}}>
                       <List className="picker-list">
                            <Picker
                                    data={seasons}
                                    title="选择省"
                                    cascade={false}
                                    extra="冀"
                                    value={this.state.sValue}
                                    onChange={v => this.setState({ sValue: v })}
                                    onOk={v => this.setState({ sValue: v })}
                                    >
                            <List.Item arrow="horizontal"></List.Item>
                        </Picker>
                    </List>
                    </div>
                    
                  </div>
                  <div style={{width:'100%',height:'50px',backgroundColor:'white',marginTop:10}}>
                  <div style={{width:'30%',fontSize:22,marginLeft:'5%',paddingTop:'10px',fontWeight:'bold',float:'left'}}>车身架号</div>
                  <input id='name2'type='text' placeholder='车身架号后六位数' style={{width:'40%',height:50,float:'right',border:'0',fontSize:18}}></input>
                  </div>
                  <div style={{width:'100%',height:'50px',backgroundColor:'white',marginTop:10}}>
                  <div style={{width:'30%',fontSize:22,marginLeft:'5%',paddingTop:'10px',fontWeight:'bold',float:'left'}}>发动机号</div>
                  <input id='name3'type='text' placeholder='发动机号后六位数' style={{width:'40%',height:50,float:'right',border:'0',fontSize:18}}></input>
                  </div>
                  <button type='submit' placeholder='保存并查询' style={{width:'90%',height:'50px',marginLeft:'5%',backgroundColor:'brown',border:0,color:'white',fontSize:20,marginTop:'5%'}}>保存并查询</button>
              </form>

              <div>
                  <p style={{float:'left',marginLeft:'10%'}}>点击保存并查询，即表示您同意</p>
                  <p style={{float:'left',color:'brown'}}>用户授权协议</p>
              </div>
            </div>
        )
    }
}
