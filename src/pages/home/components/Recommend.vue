<template>
    <div>
        <div class="title">猜你喜欢</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: 'HomeRecommend',
        data () {
			return {
				recommendList: [{
					id: '01',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/201402/12/8b2a8c922a1d0d323e8da3e4191e5395.jpg_200x200_12b2e021.jpg',
                    title: '阜阳生态园',
                    desc: '真不好看，真垃圾'
                }, {
					id: '02',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/201402/12/8b2a8c922a1d0d323e8da3e4191e5395.jpg_200x200_12b2e021.jpg',
					title: '阜阳生态园',
					desc: '真不好看，真垃圾'
				}, {
					id: '03',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/201402/12/8b2a8c922a1d0d323e8da3e4191e5395.jpg_200x200_12b2e021.jpg',
					title: '阜阳生态园',
					desc: '真不好看，真垃圾'
				}, {
					id: '04',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/201402/12/8b2a8c922a1d0d323e8da3e4191e5395.jpg_200x200_12b2e021.jpg',
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
    .item
        display: flex
        height: 1.9rem
        overflow: hidden
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                line-height: .54rem
                font-size: .32rem
                ellipse()
            .item-desc
                line-height: .4rem
                color: #ccc
                ellipse()
            .item-button
                line-height: .44rem
                background-color: #ff9300
                padding: 0 .16rem
                border-radius: .06rem
                margin-top: .2rem
                color: #fff
</style>
