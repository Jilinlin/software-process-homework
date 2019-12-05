import React,{ Component } from 'react'
import {Redirect} from "react-router-dom"
import { NavBar, Icon,ListView} from 'antd-mobile';
import ReactDOM from 'react-dom'

// 闲置信息内容配置（4）
// 列表数据内容
const data1 = [
    {
        img: require(`../../img/手机.jpg`),
        des: '二手手机',
        des2: '¥200.00',
        des3: '王先生：150********',
    },
    {
        img: require(`../../img/烤箱.png`),
        des: '烤箱',
        des2: '¥200.00',
        des3: '王先生：150********',
    },
    {
        img: require(`../../img/玩具jpg.jpg`),
        des: '玩具-适合3-6岁',
        des2: '¥200.00',
        des3: '王先生：150********',
    },
    {
        img: require(`../../img/婴儿床.png`),
        des: '闲置婴儿床',
        des2: '¥200.00',
        des3: '王先生：150********',
    },
    {
        img: require(`../../img/香水.jpg`),
        des: '**香水',
        des2: '¥200.00',
        des3: '王先生：150********',
    },
    {
        img: require(`../../img/婴儿车.jpg`),
        des: '闲置婴儿车',
        des2: '¥200.00',
        des3: '王先生：150********',
    }
];

const NUM_SECTIONS = 2;
const NUM_ROWS_PER_SECTION = 6;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...rowIDs];
  rowIDs = [...rowIDs];
}


    
export default class Weixiu extends Component {

    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
    
        const dataSource = new ListView.DataSource({
          getRowData,
          getSectionHeaderData: getSectionData,
          rowHasChanged: (row1, row2) => row1 !== row2,
          sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
    
        this.state = {
          dataSource,
          isLoading: true,
          height: document.documentElement.clientHeight * 3 / 4,
        };
      }

    componentDidMount() {
    
        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;

        setTimeout(() => {
          genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
            isLoading: false,
            height: hei,
          });
        }, 600);
      }


    // 闲置信息内容配置（3）
    //当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用
    onEndReached = (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
          genData(++pageIndex);
          this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
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
            wupin:true
        })
    }

    render() {
        if(this.state.home){
            return  <Redirect to="/shouye"/>
        }else if(this.state.wupin){
            return <Redirect to="/wupin"/>
        }

        let index = data1.length - 1;

        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
            index = data1.length - 1;
            }
            const obj = data1[index--];
            return (
            <div key={rowID} style={{ padding: '0 15px',width:'48%',float:'left',margin:'3px',borderRadius:'5px',border:'1px solid #8a8a8a',backgroundColor:"white"}}>
                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>

                <div style={{ lineHeight: 1.2 }}>

                    <div style={{float:"left"}}>
                        <img style={{ height: '64px',float:"left",width:'100%',height:150}} src={obj.img} alt="" />
                        <div style={{ marginBottom: '10px',fontSize:18,marginTop:'160px'}}>{obj.des}</div>
                        <div style={{ marginBottom: '10px',color:'#ab1602'}}>{obj.des2}</div>
                        <div>{obj.des3}</div>

                    </div>

                </div>
                </div>
            </div>
            );
        };

      
        return (
            <div style={{height:"812px",background:"#F4F3F3"}}>
                {/* 闲置信息标题 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>闲置信息</span>
                </NavBar>


                {/* 添加闲置信息内容 */}
                <NavBar
                    mode="light"
                    style={{background:"#f2f2f2",height:"210px",lineHeight:"60px",width:'100%',position:'fixed',bottom:'0',zIndex:'999'}}
                    // ,position:'fixed',bottom:'0'
                >
                    <i onClick={()=>{this.doNext()}} style={{fontSize:50,color:'#ab1602'}} className='iconfont icon-jiahao'></i>
                </NavBar>
                          

                {/* 闲置信息内容 */}

                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' ,width:'100%',float:'left'}}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    renderRow={row}
                    style={{
                    height: 550,
                    overflow: 'auto',
                    }}
                    pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />
                    
            </div>
        )
    }
}
