import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from "./mutations";

Vue.use(Vuex)

export default new Vuex.Store({
	//使用localstorage放在try..catch中，防止本地存储关闭报错
	// state: state因为键和值都一样，所以可以省略
	state,
	//ctx代表上下文可以用于使用commit方法，来触发mutations。 city就是传过来的值,
	//changeCity是mutations里面的方法
	// actions: {
	// 	changeCity(ctx, city) {
	// 		ctx.commit('changeCity', city)
	// 	}
	// },
	mutations,
	getters: {
		doubleCity(state) {
			return state.city + ' ' + state.city
		}
	}
})
