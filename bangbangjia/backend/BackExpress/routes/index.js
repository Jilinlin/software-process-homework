var express = require('express');
var router = express.Router();
var mysql=require("mysql");// 链接mySQL数据库,通过第三方数据块
var dbconfig=require("../config/dbconfig.json");// 引入数据库配置连接的基本信息对象

/* GET home page. */

// 后端登录
router.post('/backlogin', function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  // console.log(req.body);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from manager",function(err,result){
    if(err){
      console.log(err);
    }else{
      var i;
      for(i=0;i<result.length;i++){
        if(username==result[i].mname&&password==result[i].mpassword){
          con.query("update manager set mstate=? where mname=? and mpassword =?",[1,username,password],function(err,result){
            if(err){
              console.log(err);
            }else{
              console.log("change success");
            }
          })
          res.send(result[i].mphone);
          break;
        }
      }
      if(i==result.length){
        res.send("login failure");
      }
    }
  })

});
// 后端获得头像
router.post('/backget_img', function(req, res, next) {
  var username=req.body.username;
  console.log(req.body);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from manager",function(err,result){
    if(err){
      console.log(err);
    }else{
      var i;
      for(i=0;i<result.length;i++){
        if(username==result[i].mname){
          res.send(result[i].mpicture);
          break;
        }
      }
      if(i==result.length){
        res.send("The user does not exist");
      }
    }
  })

});
// 后端退出
router.get('/backexit', function(req, res, next) {
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from manager where mstate=?",[1],function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result.length!=0){
        // console.log(result,result[0].mphone);
        con.query("update manager set mstate=? where mphone=?",[0,result[0].mphone],function(err,result){
          if(err){
            console.log(err);
          }else{
            res.send("exit success");
          }
        })
      }else{
        res.send("exit failure");
      }
    }
  })
});
// 后端首页获得头像
router.post('/backtouxiang_shou', function(req, res, next) {
  var phone=req.body.phone;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from manager where mstate=? and mphone=?",[1,phone],function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result.length!=0){
        res.send(result[0].mpicture);
      }else{
        console.log("get failure");
      }
    }
  })
});
// 后端公告查找
router.get('/backgonggao', function(req, res, next) {
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from announce",function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
});
// 后端公告渲染
router.post('/backgonggao_post', function(req, res, next) {
  var page=req.body.page;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from announce",function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result.length);
      if(result.length<=6){

        var arr=[];
        for(var i=0;i<result.length;i++){
          arr.push(result[i]);
        }
        if(page==1){
          res.send(arr);
        }
      }else if(result.length>6&&result.length<=16){
        var arr1=[];
        var arr2=[];
        for(var i=0;i<6;i++){
          arr1.push(result[i]);
        }
        for(var i=6;i<result.length;i++){
          arr2.push(result[i]);
        }
        if(page==1){
          console.log(arr);
          res.send(arr1);
        }else if(page==2){
          res.send(arr2);
        }
      }
    }
  })
});
// 后端公告删除
router.post('/backgonggao_del', function(req, res, next) {
  var ano=req.body.ano;
  console.log(ano);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("delete from announce where ano=?",[ano],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("delete success");
    }
  })
});
// 后端公告增加
router.post('/backfabu', function(req, res, next) {
  var message=req.body;
  console.log(message);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("insert into announce(apicture,ano,aname,adate,acontent) values(?,?,?,?,?)",[message.apicture,message.ano,message.aname,message.adate,message.acontent],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("add success");
    }
  })
});
//  后端公告查找
// router.post('/backgonggao_ser', function(req, res, next) {
//   var message=req.body.message;
//   console.log(message);
//   var con=mysql.createConnection(dbconfig);// 创建连接
//   con.connect();
//   con.query("select * from announce where aname=?",[message],function(err,result) {
//     if(err){
//       console.log(err);
//     }else{
//       res.send(result);
//     }
//   })
// });

//后端业主渲染
router.post('/backyezhu', function(req, res, next) {
  var page=req.body.page;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user",function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result.length);
      if(result.length<=7){
        var arr=[];
        for(var i=0;i<result.length;i++){
          arr.push(result[i]);
        }
        if(page==1){
          res.send(arr);
        }
      }else if(result.length>7&&result.length<=14){
        var arr1=[];
        var arr2=[];
        for(var i=0;i<7;i++){
          arr1.push(result[i]);
        }
        for(var i=7;i<result.length;i++){
          arr2.push(result[i]);
        }
        if(page==1){
          res.send(arr1);
        }else if(page==2){
          res.send(arr2);
        }
      }
    }
  })
});
// 后台业主删除
router.post('/backyezhu_del', function(req, res, next) {
  var uphone=req.body.uphone;
  console.log(uphone);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("delete from user where uphone=?",[uphone],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("delete success");
    }
  })
});
// 后端业主查找
router.post('/backyezhu_ser', function(req, res, next) {
  var message=req.body.message;
  console.log(message);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user where uname=? or uphone=?",[message,message],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
});
//后端闲置渲染
router.post('/backxianzhi', function(req, res, next) {
  var page=req.body.page;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from ldle",function(err,result){
    if(err){
      console.log(err);
    }else{
      // console.log(result.length);
      if(result.length<=6){
        var arr=[];
        for(var i=0;i<result.length;i++){
          arr.push(result[i]);
        }
        if(page==1){
          res.send(arr);
        }
      }else if(result.length>6&&result.length<=16){
        var arr1=[];
        var arr2=[];
        for(var i=0;i<6;i++){
          arr1.push(result[i]);
        }
        for(var i=6;i<result.length;i++){
          arr2.push(result[i]);
        }
        if(page==1){
          res.send(arr1);
        }else if(page==2){
          res.send(arr2);
        }
      }
    }
  })
});
// 后台闲置删除
router.post('/backxianzhi_del', function(req, res, next) {
  var uname=req.body.uname;
  console.log(uname);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("delete from ldle where uname=?",[uname],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("delete success");
    }
  })
});
// 后端报修管理渲染
router.post('/backweixiu', function(req, res, next) {
  var page=req.body.page;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from repair",function(err,result){
    if(err){
      console.log(err);
    }else{
      // console.log(result.length);
      if(result.length<=6){
        var arr=[];
        for(var i=0;i<result.length;i++){
          arr.push(result[i]);
        }
        if(page==1){
          res.send(arr);
        }
      }else if(result.length>6&&result.length<=16){
        var arr1=[];
        var arr2=[];
        for(var i=0;i<6;i++){
          arr1.push(result[i]);
        }
        for(var i=6;i<result.length;i++){
          arr2.push(result[i]);
        }
        if(page==1){
          res.send(arr1);
        }else if(page==2){
          res.send(arr2);
        }
      }
    }
  })
});
// 后端报修管理删除
router.post('/backweixiu_del', function(req, res, next) {
  var rno=req.body.rno;
  console.log(rno);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("delete from repair where rno=?",[rno],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("delete success");
    }
  })
});
// 后端反馈管理渲染
router.post('/backfankui', function(req, res, next) {
  var page=req.body.page;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from feedback",function(err,result){
    if(err){
      console.log(err);
    }else{
      // console.log(result.length);
      if(result.length<=6){
        var arr=[];
        for(var i=0;i<result.length;i++){
          arr.push(result[i]);
        }
        if(page==1){
          res.send(arr);
        }
      }else if(result.length>6&&result.length<=16){
        var arr1=[];
        var arr2=[];
        for(var i=0;i<6;i++){
          arr1.push(result[i]);
        }
        for(var i=6;i<result.length;i++){
          arr2.push(result[i]);
        }
        if(page==1){
          res.send(arr1);
        }else if(page==2){
          res.send(arr2);
        }
      }
    }
  })
});
// 后台反馈删除
router.post('/backfankui_del', function(req, res, next) {
  var uname=req.body.uname;
  console.log(uname);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("delete from feedback where uname=?",[uname],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("delete success");
    }
  })
});
// 后端管理人员界面渲染
router.post('/backguanli', function(req, res, next) {
  var page=req.body.page;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from manager",function(err,result){
    if(err){
      console.log(err);
    }else{
      // console.log(result.length);
      if(result.length<=4){
        var arr=[];
        for(var i=0;i<result.length;i++){
          arr.push(result[i]);
        }
        if(page==1){
          res.send(arr);
        }
      }else if(result.length>4&&result.length<=8){
        var arr1=[];
        var arr2=[];
        for(var i=0;i<4;i++){
          arr1.push(result[i]);
        }
        for(var i=4;i<result.length;i++){
          arr2.push(result[i]);
        }
        if(page==1){
          res.send(arr1);
        }else if(page==2){
          res.send(arr2);
        }
      }
    }
  })
});
// 后端管理人员详细信息渲染
router.post('/backguanli_show', function(req, res, next) {
  var mname=req.body.mname;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from manager where mname=?",[mname],function(err,result){
    // con.query("select * from manager",function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
});
//后端添加管理人员
router.post('/backaddmanager', function(req, res, next) {
  var message=req.body;
  console.log(message);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("insert into manager(mpicture,mpassword,mno,mname,msex,mage,mid,mphone,mstate) values(?,?,?,?,?,?,?,?,?)",[message.mpicture,message.mpwd,message.mno,message.mname,message.msex,message.mage,message.mid,message.mphone,message.mstate],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("add success");
    }
  })
});
// 后端维修分配师傅
router.post('/backweixiu_fenpei', function(req, res, next) {
  var fixsel=req.body.fixsel;
  var rno=req.body.rno;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("update repair set allocate=? where rno=?",[fixsel,rno],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("update success");
    }
  })
});
// 后端维修是否解决
router.post('/backweixiu_jiejue', function(req, res, next) {
  var fixsel=req.body.fixsel;
  var rno=req.body.rno;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("update repair set rstate=? where rno=?",[fixsel,rno],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("update success");
    }
  })
});


module.exports = router;
