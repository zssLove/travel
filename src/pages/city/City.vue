<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities"
                   :hotcities="hotCities"
                   :letter="letter"
        ></city-list>
        <city-alphabet :cities="cities"
                       @change="handleLetterChange"
        ></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/Header'
	import CitySearch from './components/Search'
	import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'
    import axios from 'axios'
	export default {
		name: 'City',
        components: {
			CityHeader,
			CitySearch,
            CityList,
			CityAlphabet
        },
        data() {
		    return {
				//cities要有下面this.cities一致
				hotCities: [],
				cities: {},
                letter: ''
			}
        },
        methods: {
			getCityInfo() {
				axios.get('/api/city.json')
                    .then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc(res) {
				res = res.data
                if(res.ret && res.data) {
                	const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            },
            handleLetterChange(letter) {
                this.letter = letter
            }
        },
        mounted() {
			this.getCityInfo()
		}
	}
</script>

<style scoped lang="stylus">

</style>
