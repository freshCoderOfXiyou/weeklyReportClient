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