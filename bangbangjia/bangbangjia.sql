/*
SQLyog Professional v12.08 (64 bit)
MySQL - 5.7.14 : Database - bangbangjia
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bangbangjia` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `bangbangjia`;

/*Table structure for table `announce` */

DROP TABLE IF EXISTS `announce`;

CREATE TABLE `announce` (
  `ano` int(11) NOT NULL,
  `aname` varchar(50) DEFAULT NULL,
  `adate` char(20) DEFAULT NULL,
  `acontent` text,
  `apicture` char(200) DEFAULT NULL,
  PRIMARY KEY (`ano`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `announce` */

insert  into `announce`(`ano`,`aname`,`adate`,`acontent`,`apicture`) values (1,'《关于垃圾分类的通知》','2019/10/10','为营造全社会共同践行垃圾分类理念的良好氛围为营造全社会共同践行垃圾分类理念的良好氛围为营造全社会共同践行垃圾分类理念的良好氛围','img1.jpg'),(2,'《关于路灯维修的通知》','2019/10/8','请各位业主注意，小区将于2019年10月3日进行路灯维修','img2.jpg'),(3,'《关于下去停电的通知》','2019/10/6','请各位业主注意，2019.10.6日晚八点整，小区将停电一小时，请做好准备工作','img3.jpg'),(4,'《关于小区停水的通知》','2019/9/6','请各位业主注意，因业务维修，该小区将于中午12点停水一小时','img4.jpg'),(5,'《关于小区供暖的通知》','2019/8/6','请各位业主注意，小区将于12月5日正常供暖','img5.jpg'),(6,'关于小区共享单车摆放的通知》','2019/7/6','请各位业主注意，为了方便出行，请将共享单车摆放整齐','img6.jpg'),(7,'《关于小区绿化的通知》','2019/6/6','请各位业主注意，小区将于2018.11.11进行绿化工作','img7.jpg'),(8,'《关于增加小区监控数量的通知》','2019/5/6','请各位业主注意，为了保证各住户的安全，小区将增加监控数量','img8.jpg');

/*Table structure for table `feedback` */

DROP TABLE IF EXISTS `feedback`;

CREATE TABLE `feedback` (
  `upicture` varchar(20) DEFAULT NULL,
  `uname` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `uphone` char(11) DEFAULT NULL,
  `fcontent` text,
  `fdate` char(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `feedback` */

insert  into `feedback`(`upicture`,`uname`,`name`,`uphone`,`fcontent`,`fdate`) values ('img1.jpg','Jenny','珍妮','13611112222','小区垃圾随意投放现象严重','2019-12-12'),('img2.jpg','Danny','丹妮','15033334444','小区车辆随意停放影响出行','2019-12-2'),('img3.jpg','Jerry','杰瑞','13088889999','小区路灯不亮','2019-11-12'),('img4.jpg','Tom','汤姆','18911111111','小区植被太少，绿化工作不到位','2019-11-9'),('img5.jpg','Li Lei','李雷','19122222222','小区监控太少，盲区太多','2019-11-9'),('img6.jpg','Jackson','杰克森','13244444444','小区垃圾太多，不能及时清理','2019-11-9'),('img7.jpg','Han Meimei','韩梅梅','17899999999','小区空气质量太差','2019-11-9'),('img8.jpg','Li Ming','李明','13988888888','小区中午施工噪音太大，影响休息','2019-11-9'),('img9.jpg','Kim','吉姆','17866666666','小区停车位太少','2019-11-9');

/*Table structure for table `ldle` */

DROP TABLE IF EXISTS `ldle`;

CREATE TABLE `ldle` (
  `upicture` varchar(20) DEFAULT NULL,
  `uname` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `uphone` char(11) DEFAULT NULL,
  `ldate` char(20) DEFAULT NULL,
  `lcontent` text,
  `lpicture` varchar(20) DEFAULT NULL,
  `lname` varchar(10) DEFAULT NULL,
  `lprice` float DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `ldle` */

insert  into `ldle`(`upicture`,`uname`,`name`,`uphone`,`ldate`,`lcontent`,`lpicture`,`lname`,`lprice`) values ('img1.jpg','Jenny','珍妮','13611112222','2019-12-9','出售旧沙发一套，九成新，有意私聊','sofa.jpg','沙发',880),('img2.jpg','Danny','丹妮','15033334444','2019-12-9','出售毛呢大衣一件，八成新，230元','coat.jpg','大衣',200),('img3.jpg','Jeffery','杰弗瑞','13122222222','2019-12-9','出售旧裤子，长胖了穿不下','pants.jpg','裤子',50),('img4.jpg','Han Meimei','韩梅梅','15622222222','2019-12-9','出售沙发一套，七成新','sofa.jpg','沙发',770),('img5.jpg','Li Lei','李雷','17811111111','2019-12-9','随缘出一件大衣，喜欢的私聊','coat.jpg','大衣',100),('img6.jpg','Wang Aiguo','王爱国','17344444444','2019-12-9','出售裤子，有意私聊','pants.jpg','裤子',60);

/*Table structure for table `manager` */

DROP TABLE IF EXISTS `manager`;

CREATE TABLE `manager` (
  `mpicture` varchar(20) DEFAULT NULL,
  `mpassword` varchar(20) DEFAULT NULL,
  `mno` varchar(10) NOT NULL,
  `mname` varchar(20) DEFAULT NULL,
  `msex` char(2) DEFAULT NULL,
  `mage` int(11) DEFAULT NULL,
  `mid` char(18) DEFAULT NULL,
  `mphone` char(11) DEFAULT NULL,
  `mstate` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`mno`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `manager` */

insert  into `manager`(`mpicture`,`mpassword`,`mno`,`mname`,`msex`,`mage`,`mid`,`mphone`,`mstate`) values ('img1.jpg','111','2003','admin','女',20,'130123456789123456','13012341234',1),('img2.jpg','111111','2004','韩梅梅','女',22,'130123456789121111','13012341111',0),('img3.jpg','222222','2005','李明','男',30,'130123456789122222','15212341111',0),('img4.jpg','333333','2006','王建国','男',34,'131123456789123333','15212342222',0),('img5.jpg','444444','2007','李爱岗','男',24,'131123456789124444','17812342222',0),('img6.jpg','555555','2008','孙敬业','女',18,'131123456789125555','18912342222',0),('img7.jpg','666666','2009','李小花','女',50,'131123456789125555','18912343333',0);

/*Table structure for table `myplaza` */

DROP TABLE IF EXISTS `myplaza`;

CREATE TABLE `myplaza` (
  `upicture` varchar(20) DEFAULT NULL,
  `uname` varchar(20) DEFAULT NULL,
  `mytime` char(20) DEFAULT NULL,
  `mycontent` text,
  `mypicture` varchar(20) DEFAULT NULL,
  `myread` int(11) DEFAULT NULL,
  `mylike` int(11) DEFAULT NULL,
  `mycomment` text,
  `mycommentno` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `myplaza` */

insert  into `myplaza`(`upicture`,`uname`,`mytime`,`mycontent`,`mypicture`,`myread`,`mylike`,`mycomment`,`mycommentno`) values ('img1.jpg','韩梅梅','10小时前','我可真好看','img1.jpg',66,54,'不如我好看',1),('img1.jpg','韩梅梅','10小时前','我在跳舞','img2.jpg',88,33,'',0),('img1.jpg','韩梅梅','10小时前','无聊聊','img1.jpg',33,33,'',0),('img1.jpg','韩梅梅','10小时前','啊啊啊啊啊','img2.jpg',44,22,'？？？？？',1),('img1.jpg','韩梅梅','10小时前','哈哈哈哈哈哈哈哈','img3.jpg',66,54,'hhhhhh',1);

/*Table structure for table `payment` */

DROP TABLE IF EXISTS `payment`;

CREATE TABLE `payment` (
  `addmoney` float DEFAULT NULL,
  `cellname` varchar(200) DEFAULT NULL,
  `punit` varchar(20) DEFAULT NULL,
  `ptype` varchar(10) DEFAULT NULL,
  `unumber` varchar(30) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `uphone` char(11) DEFAULT NULL,
  `arrearage` float DEFAULT NULL,
  `balance` float DEFAULT NULL,
  `ppassword` varchar(10) DEFAULT NULL,
  `ptime` char(200) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `payment` */

insert  into `payment`(`addmoney`,`cellname`,`punit`,`ptype`,`unumber`,`name`,`uphone`,`arrearage`,`balance`,`ppassword`,`ptime`) values (1,'xxx小区7-4-501','xx供电公司','电费','11111','安安','1234567899',0,54,'123456','2019/12/17 上午11:01:30'),(20,'xxx小区7-4-501','xx供水公司','水费','22222','安安','1234567899',30,0,'123456','2019/12/17 上午11:15:13'),(900,'xxx小区7-4-501','xx供暖公司','供暖费','33333','安安','1234567899',0,500,'123456','2019/12/17 上午11:10:45'),(50,'xxx小区7-4-501','xx燃气公司','燃气费','44444','安安','1234567899',0,120,'123456','2019/12/17 上午11:06:00'),(0,'xxx小区5-4-301','xx供电公司','电费','34567871','韩梅梅','13232323232',0,60,'555555','2019/12/12 上午10:10:10'),(0,'xxx小区5-4-501','xx供水公司','水费','23456787','宋美人','19811111111',15,0,'666666','2019/12/12 上午10:10:10'),(0,'xxx小区7-4-301','xx供电公司','电费','34567876','李明','17666666666',0,20,'777777','2019/12/12 上午10:10:10'),(NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `plaza` */

DROP TABLE IF EXISTS `plaza`;

CREATE TABLE `plaza` (
  `picture` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `uphone` char(11) DEFAULT NULL,
  `plcontent` text,
  `plpicture` varchar(20) DEFAULT NULL,
  `pltime` char(20) DEFAULT NULL,
  `pltag` varchar(20) DEFAULT NULL,
  `pllocate` varchar(20) DEFAULT NULL,
  `plike` int(11) DEFAULT NULL,
  `pread` char(10) DEFAULT NULL,
  `comment` text,
  `commentno` int(11) DEFAULT NULL,
  `follow` varchar(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `plaza` */

insert  into `plaza`(`picture`,`name`,`uphone`,`plcontent`,`plpicture`,`pltime`,`pltag`,`pllocate`,`plike`,`pread`,`comment`,`commentno`,`follow`) values ('img8.jpg','安安','1234567899','晚上风景真美','img2.jpg','上午10:10:10','夜晚 风景','河北师范大学',14,'10阅读','真美',1,'关注'),('img3.jpg','韩梅梅','13232323232','啊啊啊啊啊啊啊啊啊啊啊啊啊啊','img3.jpg','上午10:20:30','aaa','aaaaa',11,'100阅读','aaaaaaaaaaaaaa',1,'关注'),('img4.jpg','李明','17666666666','哔哔哔哔哔哔哔哔哔哔不不','img2.jpg','下午02:20:22','bbb','bbbbb',22,'10万阅读','bbbbbbbbbbbbbbbbbbb',1,'关注'),('img5.jpg','珍妮','13611112222','崔璨崔璨崔璨崔璨惆怅长岑长','sofa.jpg','晚上08:10:10','ccc','ccccc',12,'90阅读','ccccccccccccccccccccccc',1,'关注'),('img6.jpg','丹妮','13211111111','哒哒哒哒哒哒多多多','coat.jpg','上午10:10:30','ddd','ddddddd',33,'90阅读','dddddddddddddddd',1,'关注'),('img7.jpg','汤姆','13611111111','鹅鹅鹅饿鹅鹅鹅饿','img7.jpg','上午10:20:10','eee','eeeeeeee',54,'90阅读','eeeeeeeeeeeeeee',1,'关注'),('img1.jpg','杰瑞','13733333333','呃呃呃呃呃呃呃呃呃呃呃呃',NULL,'上午10:30:10','发发发','ffff',23,'90阅读','ffffffffffffffff',1,'关注'),('img8.jpg','安安','1234567899','今天中午吃什么','img7.jpg','上午08:16:33','fff','ffffff',12,'10阅读','eeeeeeeeee',1,'关注'),('img8.jpg','安安','1234567899','啦啦啦','login_touxiang.jpg','上午8:48:47',NULL,NULL,11,'0','',0,'关注');

/*Table structure for table `repair` */

DROP TABLE IF EXISTS `repair`;

CREATE TABLE `repair` (
  `rno` int(11) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `unumber` varchar(30) DEFAULT NULL,
  `uphone` char(11) DEFAULT NULL,
  `rcontent` text,
  `rpicture` varchar(20) DEFAULT NULL,
  `allocate` varchar(5) DEFAULT NULL,
  `worker` text,
  `rtime` char(20) DEFAULT NULL,
  `rstate` varchar(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `repair` */

insert  into `repair`(`rno`,`name`,`unumber`,`uphone`,`rcontent`,`rpicture`,`allocate`,`worker`,`rtime`,`rstate`) values (1,'珍妮','7号楼4单元301室','13611112222','地暖坏了','img1.jpg','已分配','李师傅\r\n13211111111','2019-12-12','未解决'),(2,'丹妮','7号楼','13223232323','厕所怀','img2.jpg','已分配','王师傅\r\n12121212121','2019-12-12','已解决'),(3,'赫本','6号楼','12211212121','灯坏','img2.jpg','未分配','','2019-12-12','未解决'),(4,'李明','8号楼','23232323232','下水道堵','img3.jpg','未分配','','2019-12-12','未解决'),(5,'汤姆','9号楼','33333333333','门坏了','img4.jpg','已分配','张师傅\r\n11111111111','2019-12-12','已解决');

/*Table structure for table `traffic` */

DROP TABLE IF EXISTS `traffic`;

CREATE TABLE `traffic` (
  `plate` varchar(10) NOT NULL,
  `body` char(6) DEFAULT NULL,
  `engine` varchar(10) DEFAULT NULL,
  `tstate` varchar(5) DEFAULT NULL,
  `fine` float DEFAULT NULL,
  `point` int(11) DEFAULT NULL,
  `ttime` char(20) DEFAULT NULL,
  `tplace` varchar(50) DEFAULT NULL,
  `tcontent` text,
  PRIMARY KEY (`plate`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `traffic` */

insert  into `traffic`(`plate`,`body`,`engine`,`tstate`,`fine`,`point`,`ttime`,`tplace`,`tcontent`) values ('冀A88888','111111','0000000','已处理',100,0,'2019-12-12 10:10:10','大同街中山路至健康路路段','违反规定停放、临时停车且驾驶人不在现场或驾驶人员虽然在现场但拒绝立即驶离，妨碍其他车辆、行人通行的'),('冀A11111','222222','1111111','未处理',0,0,'','',''),('冀B22222','333333','3333333','已处理',50,2,'2019-12-12 10:10:10','和平东路','随意停放'),('鲁A11111','444444','4444444','已处理',100,2,'2019-12-12 10:10:10','泰山西路','超速'),('京A22222','555555','5555555','已处理',200,4,'2019-12-12 10:10:10','中山路','酒驾'),('京A44444','666666','6666666','已处理',100,0,'2019-12-12 10:10:10','和平路','闯红灯');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `upicture` varchar(20) DEFAULT NULL,
  `uname` varchar(20) DEFAULT NULL,
  `upassword` varchar(20) DEFAULT NULL,
  `usex` varchar(2) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `uphone` char(11) NOT NULL,
  `unumber` varchar(30) DEFAULT NULL,
  `father` varchar(20) DEFAULT NULL,
  `ustate` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`uphone`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`upicture`,`uname`,`upassword`,`usex`,`name`,`uphone`,`unumber`,`father`,`ustate`) values ('img1.jpg','Jenny','123456','女','珍妮','13611112222','7号楼4单元301室','Danny',0),('img2.jpg','Danny','111111','男','丹妮','13211111111','7号楼4单元302室','Tom',0),('img3.jpg','Tom','222222','男','汤姆','13611111111','7号楼4单元403室','Jerry',0),('img4.jpg','Jerry','333333','男','杰瑞','13733333333','7号楼4单元303室','Jeffery',0),('img5.jpg','仙女','444444','女','韩梅梅','13232323232','5号楼4单元301室','韩寒',0),('img6.jpg','小仙女','555555','女','宋美人','19811111111','5号楼4单元401室','宋民国',0),('img7.jpg','猛男','666666','男','李明','17666666666','7号楼4单元301室','李爱国',0),('img8.jpg','a','111','男','安安','1234567899','7号楼4单元501室','啊啊',1),('img9.jpg','b','888888','女','bb','3333333333','8号楼3单元301室','BB',0),('img1.jpg','c','9999999','女','gg','66666666666','7号楼3单元501室','GG',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
