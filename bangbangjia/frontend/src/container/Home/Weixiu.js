import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import { NavBar, Icon,ListView} from 'antd-mobile';


// 维修服务内容配置（4）
// 列表数据内容
const data1 = [
    {
       des: '通下水道',
       des2: '地址：12栋3-1201',
       des3: '处理中',
       des4: '上门时间：16:30',
       des5: '王师傅：150****1234',
    },
    {
        des: '煤气检修',
        des2: '地址：12栋3-1201',
        des3: '已处理',
        des4: '2019-10-10',
        des5: '王师傅：150****1234',
    },
    {
        des: '煤气检修',
        des2: '地址：12栋3-1201',
        des3: '未处理',
        des4: '预计上门时间：16:30',
        des5: ' ',
    },
    {
        des: '通下水道',
        des2: '地址：12栋3-1201',
        des3: '处理中',
        des4: '上门时间：16:30',
        des5: '王师傅：150****1234',
    },
    {
        des: '煤气检修',
        des2: '地址：12栋3-1201',
        des3: '已处理',
        des4: '2019-10-10',
        des5: '王师傅：150****1234',
    },
    {
        des: '煤气检修',
        des2: '地址：12栋3-1201',
        des3: '未处理',
        des4: '预计上门时间：16:30',
        des5: ' ',
    }
];

const separator = (sectionID, rowID) => (
    <div
      key={`${sectionID}-${rowID}`}
      style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
    />
);

let index = data1.length - 1;

const row = (rowData, sectionID, rowID) => {
    if (index < 0) {
      index = data1.length - 1;
    }
    const obj = data1[index--];
    return (
      <div key={rowID} style={{ padding: '0 15px' }}>

        <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>

          <div style={{ lineHeight: 1.2 }}>

            <div style={{float:"left",marginRight:30,width:'100%'}}>
                <div style={{ marginBottom: '14px',fontSize:20}}>{obj.des}</div>
                <div>{obj.des2}</div>
            </div>

            <div style={{ }}>
                <div style={{color:'#edb108',position:'absolute',left:'70%'}}>{obj.des3}</div>
                <br/>
                <div style={{width:150,position:'absolute',left:'55%'}}>{obj.des4}</div>
                <br/>
                <div style={{position:'absolute',left:'55%'}}>{obj.des5}</div>
            </div>
            
          </div>
        </div>
      </div>
    );
};


const NUM_ROWS = 5;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}



    
export default class Weixiu extends Component {
    constructor(props) {
        super(props);
        // 维修服务内容配置（1）
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
          dataSource,
          isLoading: true,
          home:false,
          xiangqing:false
        };
    }
    // 维修服务内容配置（2）
    componentDidMount() {
        setTimeout(() => {
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 600);
    }

    // 维修服务内容配置（3）
    //当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用
    onEndReached = (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.rData = { ...this.rData, ...genData(++pageIndex) };
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 1000);
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
            xiangqing:true
        })
    }

    render() {
        if(this.state.home){
            return  <Redirect to="/shouye"/>
        }else if(this.state.xiangqing){
            return <Redirect to="/xiangqing"/>
        }
        return (
            <div style={{height:"812px",background:"#F4F3F3"}}>
                {/* 维修服务标题 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>维修服务</span>
                </NavBar>

                {/* 维修服务内容 */}
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // 页脚
                    renderFooter={() => (
                        <div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? 'Loading...' : 'Loaded'}
                        </div>
                    )}
                    renderRow={row}
                    renderSeparator={separator}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />

                {/* 添加维修内容 */}
                <NavBar
                    mode="light"
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <i onClick={()=>{this.doNext()}} style={{fontSize:50,color:'#ab1602'}} className='iconfont icon-jiahao'></i>
                </NavBar>
                          
            </div>
        )
    }
}
