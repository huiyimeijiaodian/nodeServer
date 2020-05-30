var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
//解决跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
    next();  
});
//创建接口:如登录接口：http://localhost:8888/loginIn.json
// 用户登录
app.get('/loginIn.json', function (req, res) {
	console.log('登录请求',req.query);//获取请求数据
	setTimeout(function() {
		let data = {rc:0,msg:'登录成功'};
		res.json(data);
	}, 500);//500ms后返回数据
})
//用户退出
app.post('/loginOut.json', function (req, res) {
	console.log('退出请求',req.body);
  let data = {rc:0,msg:'退出成功'};
  res.json(data);
})
// 返回用户列表
const userList=[
	{id:1,name:'陈先生',sex:'男'},
	{id:2,name:'蔡小姐',sex:'女'},
]
app.get('/userList.json', function (req, res) {
	setTimeout(function() {
	  let data = {rc:0,msg:'获取用户列表',list:userList};
    res.json(data);
	}, 2000);//模拟2s后再返回数据
})
//添加的新用户数据
app.post('/addUser.json', function (req, res) {
   // 添加用户
	let user = req.body;//获取post请求数据
	console.log('添加',user);
	let data = {rc:0,msg:'添加用户成功'};
	 res.json(data);
})
app.delete('/deleteUser.json', function (req, res) {
   // 删除用户
	let reqData = req.body;
	console.log('删除用户',reqData);
	let data = {rc:0,msg:'删除用户成功'};
	res.json(data);
})

//开启服务，监听请求
var server = app.listen(8888, function () {
  console.log("服务器已开启，访问地址为", server.address())
})
