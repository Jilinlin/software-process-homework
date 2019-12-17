var express = require('express');
var router = express.Router();
var mysql=require("mysql");// 链接mySQL数据库,通过第三方数据块
var dbconfig=require("../config/dbconfig.json");// 引入数据库配置连接的基本信息对象

// 娇
//我的 个人信息显示
router.post('/mine', function(req, res, next) {
  var phonenumber=req.body.phonenumber;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user where uphone=?;",[phonenumber],function(err,result){
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
     })
 });

 //我的 设置 个人信息
 router.post('/user', function(req, res, next) {
  var phonenumber=req.body.phonenumber;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user where uphone=?;",[phonenumber],function(err,result){
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
     })
 });

 //我的 设置 个人信息 修改姓名
 router.post('/username', function(req, res, next) {
  var name=req.body.name;
  var phonenumber=req.body.phonenumber;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user where uphone=?;",[phonenumber],function(err,result){
      if(err){
        console.log(err);
      }else{
        con.query("update user set name = ? where uphone=?;",[name,phonenumber],function(err,result){
        res.send(result);
      }
        )}   
 })
});


 //我的设置 个人信息 修改电话
 router.post('/userphone', function(req, res, next) {
  var rephone=req.body.rephone;
  var phonenumber=req.body.phonenumber;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user where uphone=?;",[phonenumber],function(err,result){
      if(err){
        console.log(err);
      }else{
        con.query("update user set uphone = ? where uphone=?;",[rephone,phonenumber],function(err,result){
        res.send(result);
      }
        )}   
 })
})


 //我的设置 个人信息 修改门牌号
 router.post('/usernumber', function(req, res, next) {
  var renumber=req.body.renumber;
  var phonenumber=req.body.phonenumber;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user where uphone=?;",[phonenumber],function(err,result){
      if(err){
        console.log(err);
      }else{
        con.query("update user set unumber = ? where uphone=?;",[renumber,phonenumber],function(err,result){
        res.send(result);
      }
        )}   
 })
})


//我的 设置 密码修改
router.post('/password',function(req,res,next){
  console.log("456")
  var oldpw=req.body.oldpw;
  var newpw=req.body.newpw;
  var phonenumber=req.body.phonenumber;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("update user set upassword = ? where uphone=? and upassword=?;",[newpw,phonenumber,oldpw],function(err,result){
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }  
 })
})

//我的 设置 头像更改
router.post('/img',function(req,res,next){
  var img=req.body.img;
  var phonenumber=req.body.phonenumber;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("update user set upicture = ? where uphone=? ;",[img,phonenumber],function(err,result){
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }   
 })
})

//我的 退出登录
// router.post('/goback',function(req,res,next){
//   var phonenumber=req.body.phonenumber;
//   var con=mysql.createConnection(dbconfig);// 创建连接
//   con.connect();
//   con.query("update user set ustate = ? where uphone=? ;",[0,phonenumber],function(err,result){
//       if(err){
//         console.log(err);
//       }else{
//         res.send(result);
//       }   
//  })
// })
router.post('/quit',function(req,res,next){
  var phone=req.body.phone;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user",function(err,result){
      if(err){
        console.log(err);
      }else{
            var i;
            for(i=0;i<result.length;i++){
              if(phone==result[i].uphone){
                con.query("update user set ustate = ? where uphone=?;",[0,phone],function(err,result){
                  if(err){
                    console.log(err);
                  }else{
                    res.send("quit success");
                  }
                })
                break;
              }
            }
            if(i==result.length){
              res.send("quit failure");
            }
      }
  })
})


//我的 缴费记录
router.post('/payment',function(req,res,next){
  var phonenumber=req.body.phonenumber;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from payment where uphone = ?  ;",[phonenumber],function(err,result){
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }   
 })
})

  //登录
router.post('/login', function(req, res, next) {
  var usertel=req.body.usertel;
  var password=req.body.password;
  console.log(req.body);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user",function(err,result){
      if(err){
        console.log(err);
      }else{
            var i;
            for(i=0;i<result.length;i++){
              if(usertel==result[i].uphone&&password==result[i].upassword){
                con.query("update user set ustate = ? where uphone=? and upassword=?;",[1,usertel,password],function(err,result){
                  if(err){
                    console.log(err);
                  }else{
                    console.log('login success');
                  }
                })
                res.send(result[i].uphone);
                break;
              }
            }
            if(i==result.length){
              res.send("login failure");
            }
      }
     })
 });
//  登陆头像
router.post('/get_img', function(req, res, next) {
  var usertel=req.body.usertel;
  console.log(req.body);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user",function(err,result){
    if(err){
      console.log(err);
    }else{
      var i;
      for(i=0;i<result.length;i++){
        if(usertel==result[i].uphone){
          var arr={
            touxiang:result[i].upicture,
            name:result[i].uname
          };
          res.send(arr);
          break;
        }
      }
      if(i==result.length){
        res.send("The user does not exist");
      }
    }
  })

});
// 注册 加手机号
router.post('/register',function(req,res,next){
   var phonenumber=req.body.phonenumber;
   var con=mysql.createConnection(dbconfig);// 创建连接
   con.connect();
   con.query("select * from user where uphone=? ",[phonenumber],function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result.length==0){
        con.query("insert into user(uphone) values(?)",[phonenumber],function(err,result){
          if(err){
            console.log(err);
          }else{
            res.send("can register");
          }
        })
      }else if(result.length!=0){
        res.send("can't register");
      }
    }
  })
})
// 加问题
router.post('/setques',function(req,res,next){
  var phonenumber=req.body.phonenumber;
  var setquestion=req.body.setquestion;
  // console.log(phonenumber,setquestion);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user where uphone=? ",[phonenumber],function(err,result){
   if(err){
     console.log(err);
   }else{
     if(result.length!=0){
       con.query("update user set father = ? where uphone=?;",[setquestion,phonenumber],function(err,result){
         if(err){
           console.log(err);
         }else{
           res.send("ok");
         }
       })
     }else if(result.length==0){
       res.send("no");
     }
   }
 })
})

//设置密码
router.post('/setpassword',function(req,res,next){
  var phonenumber=req.body.phonenumber;
  var oldpw=req.body.oldpw;
  // console.log(phonenumber,setquestion);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user where uphone=? ",[phonenumber],function(err,result){
   if(err){
     console.log(err);
   }else{
     if(result.length!=0){
       con.query("update user set upassword = ? where uphone=?;",[oldpw,phonenumber],function(err,result){
         if(err){
           console.log(err);
         }else{
           res.send("ok");
         }
       })
     }else if(result.length==0){
       res.send("no");
     }
   }
 })
})

//忘记密码 输入手机号
router.post('/forgetpw', function(req, res, next) {
  var answer=req.body.answer;
  console.log(answer);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user",function(err,result){
      if(err){
        console.log(err);
      }else{
            var i;
            for(i=0;i<result.length;i++){
              if(answer==result[i].uphone){
                res.send("login success");
                break;
              }
            }
            if(i==result.length){
              res.send("login failure");
            }
      }
     })
 });


 //忘记密码 输入父亲名字
router.post('/idetified',function(req,res,next){
  var phonenumber=req.body.phonenumber;
  var father=req.body.handle;
  // console.log(phonenumber,setquestion);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user where uphone=? ",[phonenumber],function(err,result){
    if(err){
      console.log(err);
    }else{
      var i;
      for(i=0;i<result.length;i++){
        if(father==result[i].father){
          res.send('父亲名字验证一致');
          break;
        }
      }
      if(i==result.length){
        res.send("父亲名字验证不一");
      }
    }    
  })
});


//重新设置密码
router.post('/resetpw',function(req,res,next){
  var phonenumber=req.body.phonenumber;
  var oldpw1=req.body.oldpw1;
  // console.log(phonenumber,setquestion);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from user where uphone=? ",[phonenumber],function(err,result){
   if(err){
     console.log(err);
   }else{
     if(result.length!=0){
       con.query("update user set upassword = ? where uphone=?;",[oldpw1,phonenumber],function(err,result){
         if(err){
           console.log(err);
         }else{
           res.send("ok");
         }
       })
     }else if(result.length==0){
       res.send("no");
     }
   }
 })
});



//聪
/* GET home page. */
router.get('/guangchang',function(req,res,next){
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from plaza",function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})
//广场我的post
router.post('/mys',function(req,res,next){
  var phone=req.body.phone;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from plaza where uphone=?",[phone],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})
//公告get
router.get('/gonggao',function(req,res,next){
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from announce",function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })

})
//投诉get
router.get('/tousu',function(req,res,next){
  var con=mysql.createConnection(dbconfig);// 创建连接
    con.connect();
    con.query("select * from feedback",function(err,result){
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
     })
})
router.get('/payment',function(req,res,next){
  // res.send([
  //   {
  //     title:'水费缴纳',
  //     word:'12345677 | 何*花',
  //     money:'50.00元',
  //     time:'2019-11-12'
  //   },
  //   {
  //     title:'电费缴纳',
  //     word:'12345677 | 何*花',
  //     money:'50.00元',
  //     time:'2019-11-12'
  //   }
  // ])
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from payment",function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
   })
})
//维修get
  router.get('/weixiu',function(req,res,next){

    var con=mysql.createConnection(dbconfig);// 创建连接
    con.connect();
    con.query("select * from repair",function(err,result){
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
     })
  })
  //闲置get
  router.get('/xianzhi',function(req,res,next){
    var con=mysql.createConnection(dbconfig);// 创建连接
     con.connect();
     con.query("select * from ldle",function(err,result){
       if(err){
         console.log(err);
       }else{
         res.send(result);
       }
      })
 });
 //登录get
router.post('/login', function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  console.log(req.body);
  const message={username:"admin",password:"111"}

  if(username==message.username&&password==message.password){
    res.send("success");
  }else{
    res.send("failure");
  }

});
//维修提交
router.post('/weixiu1', function(req, res, next) {
  var message=req.body;
  console.log(message);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("insert into repair(name,unumber,uphone,rcontent,rtime,rstate,worker) values(?,?,?,?,?,?,?)",
  [message.name,message.unumber,message.uphone,message.rcontent,message.rtime,message.rstate,message.worker],
  function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("add success");

      }
     })
});

//闲置提交
router.post('/wupin', function(req, res, next) {
  var message=req.body;
  console.log(message);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("insert into ldle(uname,name,lname,lprice,uphone,lcontent,ldate,lpicture) values(?,?,?,?,?,?,?,?)",
  [message.uname,message.name,message.lname,message.lprice,message.uphone,message.lcontent,message.ldate,message.lpicture],
  function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("add success");

      }
     })
});
//广场发布
router.post('/fabu', function(req, res, next) {
  var message=req.body;
  console.log(message);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select *from user where uphone=?",[message.uphone],function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result[0].upicture,result[0].uname);
      con.query("insert into plaza(picture,name,uphone,plcontent,plpicture,pltime,plike,pread,comment,commentno,follow) values(?,?,?,?,?,?,?,?,?,?,?)",
      [result[0].upicture,result[0].name,message.uphone,message.plcontent,message.plpicture,message.pltime,message.plike,message.pread,message.comment,message.commentno,message.follow],
      function(err,result) {
        if(err){
          console.log(err);
        }else{
          res.send("add success");
    
        }
      })

    }
  })
});
// 广场关注
router.post('/follow', function(req, res, next) {
  var follow=req.body.follow;
  var pltime=req.body.pltime;
  // console.log(follow);
  // console.log(pltime);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  if(follow == '关注'){
        con.query("update plaza set follow=? where pltime=?",['已关注',pltime],function(err,result) {
        if(err){
          console.log(err);
        }else{
          res.send("update success");
        }
      })
  }else if(follow == '已关注'){
    con.query("update plaza set follow=? where pltime=?",['关注',pltime],function(err,result) {
        if(err){
          console.log(err);
        }else{
          res.send("update success");
        }
      })
  }
});
//反馈建议
router.post('/jianyi', function(req, res, next) {
  var message=req.body;
  console.log(message);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("insert into feedback(uname,uphone,fcontent,fdate) values(?,?,?,?)",
  [message.uname,message.uphone,message.fcontent,message.fdate],
  function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("add success");

      }
     })
});

router.post('/mys_del', function(req, res, next) {
  var pltime=req.body.pltime;
  console.log(pltime);
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("delete from plaza where pltime=?",[pltime],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send("delete success");
    }
  })
});

// 何
// 生活缴费
router.post('/jiaofei', function(req, res, next) {
  var danwei=req.body.danwei;
  var huhao=req.body.huhao;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from payment where unumber=? and punit=?",[huhao,danwei],function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
});
// 生活缴费充值
router.post('/jiaofeiadd', function(req, res, next) {
  var danwei=req.body.danwei;
  var huhao=req.body.huhao;
  var jine=req.body.jine;
  var time=req.body.time;
  var balance=0;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from payment where unumber=? and punit=?",[huhao,danwei],function(err,result) {
    if(err){
      console.log(err);
    }else{
      balance=parseFloat(result[0].balance)+parseFloat(jine);
      console.log(balance);
    }
    con.query("update payment set addmoney=?,ptime=? where unumber=? and punit=?",[jine,time,huhao,danwei],function(err,result) {
      if(err){
        console.log(err);
      }else{
        console.log("ok");
      }
    })
    if(danwei=="xx供水公司"){
      con.query("update payment set arrearage=? where unumber=? and punit=?",[0.00,huhao,danwei],function(err,result) {
        if(err){
          console.log(err);
        }else{
          res.send("ok");
        }
      })
    }
    else if(danwei=="xx供暖公司"){
      con.query("update payment set balance=? where unumber=? and punit=?",[0.00,huhao,danwei],function(err,result) {
        if(err){
          console.log(err);
        }else{
          res.send("ok");
        }
      })
    }
    else{
      con.query("update payment set balance=? where unumber=? and punit=?",[balance,huhao,danwei],function(err,result) {
        if(err){
          console.log(err);
        }else{
          res.send("ok");
        }
      })
    }
  })
});
// 生活缴费密码确认
router.post('/jiaofeipay', function(req, res, next) {
  var pwd=req.body.pwd;
  var phone=req.body.phone;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("select * from payment where ppassword=? and uphone=?",[pwd,phone],function(err,result) {
    if(err){
      console.log(err);
    }else{
      if(result){
        res.send("ok")
      }else{
        res.send("error")
      }
    }
  })
});
// 广场点赞
router.post('/dianzan', function(req, res, next) {
  var uphone=req.body.uphone;
  var plike=parseInt(req.body.plike);
  var like=plike+1;
  var con=mysql.createConnection(dbconfig);// 创建连接
  con.connect();
  con.query("update plaza set plike=? where uphone=?",[like,uphone],function(err,result) {
    if(err){
      console.log(err);
    }else{
      console.log("ok");
    }
  })
  con.query("select * from plaza",function(err,result) {
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
});

module.exports = router;
