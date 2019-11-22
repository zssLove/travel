export default {
	//changeCity命名随便, city是外部传过来的，state是所有的共用数据
	changeCity(state, city) {
		state.city = city
		try {
			localStorage.city = city
		}catch (e) {}
	}
}
