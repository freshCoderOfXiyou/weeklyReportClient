// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/weeklyReport');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

/************** 定义模式loginSchema **************/
const userSchema = mongoose.Schema({
    account : String,
    password : String,
    section:Array
});
/*define job schema*/
const jobShcema = mongoose.Schema({
	date:String,
	sectionName:String,
	sectionId:String,
	job:String,
	jobCount:Number,
	opretor:String,
	id:String//which combine with date and sectionId and operator
})

/************** 定义模型Model **************/
const Models = {
   userModel : mongoose.model("users" , userSchema),
   jobModel:mongoose.model("jobs" , jobShcema)
}

module.exports = Models;