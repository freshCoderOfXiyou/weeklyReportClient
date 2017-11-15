//@ This file contain code which is useless but need to learn .


	// these code has two important point , first using for-in block to cicle properties . Another is use replace function to handle String.
	for(var pro in thisLineData){
		// console.log("outer"+pro)
		if (pro.indexOf("Num")>0){
			// console.log(pro)
			num = parseInt( this.lineData[i][pro] )
			if (num > 0) {
				var jobName = (pro+"").replace(/Num/, "")
				tempObj = {column:thisEname , job: jobName , num:num , date:this.dateValue , man:this.man , columnCname : thisCname , manId : this.manId }
				sendData.push(tempObj)
			}
		}
	}  	


	//sweetalert的用法总结：
	//文档网址：https://sweetalert.js.org/docs/#configuration
	/* 通过npm安装：npm install sweetalert --save 
		通过import导入：import swal from 'sweetalert'

	*
	*/
	//基本用法如下，icon的取值有success error warning info
	swal({
	  title: "操作失败了！",
	  text: "增加栏目失败了，请联系管理员处理。",
	  icon: "success",
	  dangerMode: false,
	});