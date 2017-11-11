const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let userMInstance = new models.userModel({
        account : req.body.account,
        password : req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    userMInstance.save((err,data) => {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.send('1');
            console.log(data);
        }
    });
});

router.post("/api/logout",(req,res) => {
    req.session.destory(function(err){
        if(err){
            res.send({state:0,msg:"退出登录失败"});
            return;
        }
        else{
	        res.clearCookie("weeklyReport");
	        res.send({state:1,msg:"退出成功"})
        }
    })
})


router.post('/api/login/getAccount',(req,res) => {
    const user = {account:req.body.account,password:req.body.password};
    
    models.User.findOne(user,(err,data) => {
        if (err) {
        	console.log(err);
        	// fail return 0
        	res.send("0");
        }
        else{
        	//  suc return 1
        	res.send("1");
        }
    })

});


