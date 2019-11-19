<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: 'HomeWeekend',
		data () {
			return {
				recommendList: [{
					id: '01',
					imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
					title: '阜阳生态园',
					desc: '真不好看，真垃圾'
				}, {
					id: '02',
					imgUrl: 'https://imgs.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
					title: '阜阳生态园',
					desc: '真不好看，真垃圾'
				}, {
					id: '03',
					imgUrl: 'https://imgs.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
					title: '阜阳生态园',
					desc: '真不好看，真垃圾'
				}, {
					id: '04',
					imgUrl: 'https://imgs.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
					title: '阜阳生态园',
					desc: '真不好看，真垃圾'
				}]
			}
		}
	}
</script>

<style scoped lang="stylus">
    @import '~styles/mixins.styl'
    .title
        line-height: .8rem
        background-color: #eee
        text-indent: .2rem
        margin-top: .2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 38%
    .item-img
        width: 100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipse()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipse()
</style>
