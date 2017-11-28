import Vue from "vue"
import Vuex from "vuex"
// import axios from "axios"
Vue.use(Vuex);

const state = {
	"name":"登陆",
	"id":"0000",
	"work":[],	
	"init":false
}

function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return decodeURIComponent(arr[2]);
	else
	return null;
}


const mutations = {
	initName(state){
		state.id = getCookie("userId");
		state.name = getCookie("userName");
		let locWorks = getCookie("userWork");
		locWorks = locWorks.substr(2);
		locWorks = JSON.parse(locWorks);			
		// console.log(typeof locWorks)
		// locWorks = locWorks.subString(2);
		state.works = locWorks;
		state.init = true ;
	}
}


export default new Vuex.Store({
    state,
    mutations
});